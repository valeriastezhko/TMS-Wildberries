import { createProductCards } from "./productCard.js";
const apiUrl = "https://6481c28c29fa1c5c50320367.mockapi.io/api/wb/wb-clone";

export async function fetchProductData() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const productData = await response.json();
      createProductCards(productData);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
