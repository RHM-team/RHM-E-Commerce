export default function displayProduct(product, appendElement) {
  let productCard = `<div class="col-10 col-sm-8 col-md-4 col-lg-3 cardContainer products">
    <div  class="col-12 card product-card product-container-card" data-id="${product["id"]}" data-toggle="modal" data-target="#exampleModalLong">
        <div class="card-body">
            <img
            src= ${product["avatar"]}
            class="card-img-top mb-3"
            alt=${product["title"]}
            height="220vh"
            style="border-radius: 5%"
            />
            <div class="social">
            <i class="bx bx-heart add__to__fav"></i>
            <i class="bx bx-cart add__to__cart"></i>
            </div>
            <h5 class="card-title text-truncate">${product["title"]}</h5>
            <p class="card-text product-desc text-truncate">${product["description"]}</p>
        </div>
        <hr>
        <div
            class="card-body d-flex justify-content-between"
            style="margin-top: -6%"
        >
            <div
            class="d-flex justify-content-between align-items-md-center gap-2"
            >
            <i class="bx bx-money"></i>
            <p class="card-text price"><span>EGP </span>${product["sale"]}</p>
            </div>
        </div>
    </div>
</div>`;

  appendElement.insertAdjacentHTML("beforeend", productCard);
}
