export const enlargeImage = (imageUrl, id) => {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalImg = document.createElement("img");
  modalImg.classList.add("modal-image");
  modalImg.src = imageUrl;
  modalContainer.appendChild(modalImg);

  const btnToClose = document.createElement("button");
  btnToClose.classList.add("modal-close-button");
  btnToClose.textContent = "X";
  btnToClose.setAttribute("id", `btnClose-${id}`);

  btnToClose.addEventListener("click", () => {
    closeModalWindow(modalContainer);
  });

  modalContainer.appendChild(btnToClose);

  document.body.appendChild(modalContainer);
};

export const closeModalWindow = (modal) => {
  modal.remove();
};
