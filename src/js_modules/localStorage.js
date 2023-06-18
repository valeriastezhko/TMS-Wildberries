import { createCartLayout, updateCartTotal } from "./cartUtilities";

export const saveCartToLocalStorage = () => {
  const cartContainer = document.querySelector(".header__cart");
  const cartList = cartContainer.querySelector(".cart-list");
  const cartItems = cartList.querySelectorAll("li");

  const cartArray = [];

  cartItems.forEach((item) => {
    const id = item.getAttribute("id");
    const titleElement = item.querySelector(".cart-item__title");
    const quantityElement = item.querySelector(".cart-item__quantity");
    const priceElement = item.querySelector(".cart-item__price");

    const title = titleElement.textContent;
    const quantity = parseInt(quantityElement.textContent);
    const price = parseFloat(priceElement.textContent);

    const cartItem = {
      id,
      title,
      quantity,
      price,
    };
    cartArray.push(cartItem);
  });

  localStorage.setItem("cart", JSON.stringify(cartArray));
};

export const getCartFromLocalStorage = () => {
  const cartContainer = document.querySelector(".header__cart");
  const cartList = cartContainer.querySelector(".cart-list");

  const cartArray = JSON.parse(localStorage.getItem("cart"));

  if (cartArray && cartArray.length > 0) {
    cartArray.forEach((cartItem) => {
      const { id, title, quantity, price } = cartItem;

      createCartLayout(id, title, price);
    });

    updateCartTotal();
  }
};
