import { generateId } from "./helpers.js";
import { enlargeImage } from "./modalWindow.js";
import { addToCart } from "./cartUtilities.js";
import { updateCartTotal } from "./cartUtilities.js";
import { setDiscountPercent } from "./helpers.js";

export const createProductCards = (products) => {
  const productContainer = document.getElementById("product-container");

  products.forEach((product) => {
    const id = generateId();
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("id", `card-${id}`);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("product-card__container-image");
    card.appendChild(imgContainer);

    const image = document.createElement("img");
    image.classList.add("product-card__image");
    image.src = product.picture;
    imgContainer.appendChild(image);

    const btnQuickView = document.createElement("button");
    btnQuickView.textContent = "View";
    btnQuickView.classList.add("product-card__btn-quick-view");
    btnQuickView.setAttribute("id", `view-${id}`);

    btnQuickView.addEventListener("click", () => {
      enlargeImage(image.src, id);
    });
    card.appendChild(btnQuickView);

    const salePercent = document.createElement("span");
    salePercent.classList.add("product-card__price-percent-sale");
    salePercent.setAttribute("id", `percent-${id}`);
    card.appendChild(salePercent);

    const btnAddToCart = document.createElement("button");
    btnAddToCart.textContent = "+";
    btnAddToCart.classList.add("product-card__btn-add-to-cart");
    btnAddToCart.setAttribute("id", `add-${id}`);

    btnAddToCart.addEventListener("click", () => {
      addToCart(id, product.title, product.new_price);
      updateCartTotal();
      alert("Product added to cart!");
    });

    card.appendChild(btnAddToCart);

    const title = document.createElement("h3");
    title.textContent = product.title;
    title.classList.add("product-card__title");
    card.appendChild(title);

    const new_price = document.createElement("span");
    new_price.textContent = `${product.new_price} byn.`;
    new_price.classList.add("product-card__price", "new-price");
    new_price.setAttribute("id", `new-price-${id}`);
    card.appendChild(new_price);

    const old_price = document.createElement("span");
    old_price.textContent = `${product.old_price} byn.`;
    old_price.classList.add("product-card__price", "old-price");
    old_price.setAttribute("id", `old-price-${id}`);
    card.appendChild(old_price);

    productContainer.appendChild(card);
  });
  setDiscountPercent();
};
