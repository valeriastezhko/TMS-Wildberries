export const addToCart = (id, title, price) => {
  const cartContainer = document.querySelector(".header__cart");
  const cartList = cartContainer.querySelector(".cart-list");
  const existingItem = cartList.querySelector(`li[id="${id}"]`);

  if (existingItem) {
    const quantityElement = existingItem.querySelector(".cart-item__quantity");
    const quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = `${quantity + 1} pcs`;
  } else {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", id);

    const itemTitle = document.createElement("span");
    itemTitle.textContent = title;
    itemTitle.classList.add("cart-item__title");
    listItem.appendChild(itemTitle);

    const itemQuantity = document.createElement("span");
    itemQuantity.textContent = "1 pcs";
    itemQuantity.classList.add("cart-item__quantity");
    listItem.appendChild(itemQuantity);

    cartList.appendChild(listItem);

    const itemPrice = document.createElement("span");
    itemPrice.textContent = `${price} byn.`;
    itemPrice.classList.add("cart-item__price");
    listItem.appendChild(itemPrice);
  }
  updateCartTotal();
};

export const updateCartTotal = () => {
  const cartContainer = document.querySelector(".header__cart");
  const cartList = cartContainer.querySelector(".cart-list");
  const cartItems = cartList.querySelectorAll("li");

  let total = 0;
  let quantityTotal = 0;

  cartItems.forEach((item) => {
    const priceElement = item.querySelector(".cart-item__price");
    const quantityElement = item.querySelector(".cart-item__quantity");

    const price = parseFloat(priceElement.textContent);
    const quantity = parseInt(quantityElement.textContent);

    total += price * quantity;
    quantityTotal += quantity;
  });

  const totalElement = cartContainer.querySelector(".cart-total");
  const cartIsEmpty = cartItems.length === 0;

  totalElement.textContent = cartIsEmpty
    ? "Cart is empty"
    : `Total: ${total} byn.`;

  cartList.appendChild(totalElement);
};

export const clearCart = () => {
  const cartContainer = document.querySelector(".header__cart");
  const cartList = cartContainer.querySelector(".cart-list");
  const cartItems = cartList.querySelectorAll("li");

  cartItems.forEach((item) => {
    item.remove();
  });

  updateCartTotal();
};

export const showCart = () => {
  const cartContainer = document.querySelector(".header__cart");
  const cartList = cartContainer.querySelector(".cart-list");
  const clearButton = cartList.querySelector(".clear-cart-button");

  if (!clearButton) {
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Cart";
    clearButton.classList.add("clear-cart-button");
    clearButton.addEventListener("click", clearCart);
    cartList.prepend(clearButton);
  }

  cartList.classList.toggle("show");
};
