export default function displayMessage(type, message, appendEle) {
  let detailesData = `
  
  <div class="modal-content align-items-center " style = "background-color: rgba(0, 0, 0, 0.541); margin-top:100px;">
  <div class="modal-body message-container flex-column">
    <img class="message_img" src=${
      type == "cart"
        ? "/assets/icons/AddToCart2.gif"
        : "/assets/icons/AddToFavourite3.gif"
    }>
    <p class="message_text" style = "color:white;">${message}${
    type == "cart"
      ? `<i class='bx bxs-cart-add' style='color:White'></i>`
      : `<i class='bx bxs-heart' style='color:white'></i>`
  } </p>
      </div>
      </div>
`;

  appendEle.innerHTML = "";
  appendEle.insertAdjacentHTML("afterbegin", detailesData);
}
