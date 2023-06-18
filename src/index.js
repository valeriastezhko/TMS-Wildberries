import { initializeSwiper } from "./js_modules/swiper.js";
import { fetchProductData } from "./js_modules/api.js";
import { showCart, updateCartTotal } from "./js_modules/cartUtilities.js";
import { getSearch, hideAdvertising } from "./js_modules/helpers.js";
import { getCartFromLocalStorage } from "./js_modules/localStorage.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchProductData();
  initializeSwiper();
  getCartFromLocalStorage();
  updateCartTotal();

  document.querySelector(".header__cart").addEventListener("click", showCart);
  document
    .getElementById("header__search")
    .addEventListener("input", hideAdvertising);
  document
    .getElementById("header__search")
    .addEventListener("input", getSearch);
});
