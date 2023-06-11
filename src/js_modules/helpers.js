export function generateId() {
  const numbers = "0123456789";
  let id = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    id += numbers[randomIndex];
  }

  return id;
}

export const calculateDiscountPercent = (newPrice, oldPrice) => {
  const discountPercent = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  return discountPercent;
};

export const setDiscountPercent = () => {
  const productCards = document.getElementsByClassName("product-card");
  const productCardArray = [...productCards];

  productCardArray.forEach((card) => {
    const newPriceElement = card.querySelector(".new-price");
    const oldPriceElement = card.querySelector(".old-price");
    const percentElement = card.querySelector(
      ".product-card__price-percent-sale"
    );

    const newPrice = parseFloat(newPriceElement.textContent);
    const oldPrice = parseFloat(oldPriceElement.textContent);

    const discountPercent = calculateDiscountPercent(newPrice, oldPrice);
    percentElement.textContent = `-${discountPercent}%`;
  });
};
