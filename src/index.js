import { initializeSwiper } from "./js_modules/swiper.js";
import { fetchProductData } from "./js_modules/api.js";
import { showCart } from "./js_modules/cartUtilities.js";
import { createProductCards } from "./js_modules/productCard.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchProductData();
  initializeSwiper();

  const cartButton = document.querySelector(".header__cart");
  cartButton.addEventListener("click", showCart);
});
