export default function displayMessage(type, message, appendEle) {
  let detailesData = `

  <div class="modal-content ">
  <div class="modal-body message-container flex-column">
    <img class="message_img" src=${
      type == "cart"
        ? "../assets/icons/addToCart.svg"
        : "../assets/icons/addToFavorite.svg"
    }>
    <p class="message_text">${message}${
    type == "cart"
      ? `<i class='bx bxs-cart-add' style='color:#ff0000'></i>`
      : `<i class='bx bxs-heart' style='color:#ff0000'></i>`
  } </p>
      </div>
      </div>
`;

  appendEle.innerHTML = "";
  appendEle.insertAdjacentHTML("afterbegin", detailesData);
}
