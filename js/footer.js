let footerContainer = document.querySelector('.all');

let footer = `<div class="row mb-0 section--4 section">
<footer class="bg-dark text-center text-lg-start text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row my-4">
      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <div
          class="rounded-circle bg-dark shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
          style="width: 150px; height: 150px"
        >
          <div class="cube">
            <div class="top"></div>
            <div>
              <span style="--i: 0">
                <h2>RHM</h2>
                <h2>RHM</h2>
              </span>
              <span style="--i: 1">
                <h2>RHM</h2>
                <h2>RHM</h2>
              </span>
              <span style="--i: 2">
                <h2>RHM</h2>
                <h2>RHM</h2>
              </span>
              <span style="--i: 3">
                <h2>RHM</h2>
                <h2>RHM</h2>
              </span>
            </div>
          </div>
        </div>
        <p class="text-center"><em>"Think outside the box"</em></p>
        <ul
          class="list-unstyled d-flex flex-row justify-content-center"
        >
          <li>
            <a class="text-white px-2" href="#!">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a class="text-white px-2" href="#!">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a class="text-white ps-2" href="#!">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div id="about" class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">About US</h5>
        <q
          ><i
            >Hi, We are RHM. <br />
            We began with a simple vision where we aim to offer our
            customers the widest variety of choices in Furniture and
            Home Decor!</i
          ></q
        >
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-4">FOLLOW US</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="" class="text-white me-4"
              ><i
                class="bx bxl-facebook-circle"
                style="font-size: 25px"
              ></i
            ></a>
          </li>
          <li class="mb-2">
            <a href="" class="text-white me-4"
              ><i class="bx bxl-twitter" style="font-size: 25px"></i
            ></a>
          </li>
          <li class="mb-2">
            <a href="" class="text-white me-4"
              ><i
                class="bx bxl-instagram-alt"
                style="font-size: 25px"
              ></i
            ></a>
          </li>
          <li class="mb-2">
            <a href="" class="text-white me-4"
              ><i class="bx bxl-reddit" style="font-size: 25px"></i
            ></a>
          </li>
          <li class="mb-2">
            <a href="" class="text-white me-4"
              ><i class="bx bxl-vk" style="font-size: 25px"></i
            ></a>
          </li>
        </ul>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div id="contact" class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <!-- <h5 class="text-uppercase mb-4">Contact US</h5> -->
        <!-- Button trigger modal-->
        <button
          type="button"
          class="btn btn-dark mb-3"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style="
            box-shadow: 1px 1px 10px -5px white,
              -1px -1px 10px -5px white;
            font-weight: 700;
            margin-top: -5px;
          "
        >
          CONTACT US
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content contact-body">
              <div class="modal-header">
                <h5
                  class="modal-title text-white"
                  id="staticBackdropLabel"
                >
                  We would love to hear from you!
                </h5>
                <button
                  type="button"
                  class="btn-close bg-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                class="modal-body d-flex flex-column gap-2 justify-content-center"
              >
                <p class="text-white">Comments / Questions</p>
                <input
                  type="text"
                  id="contactInput"
                  placeholder="Your Name"
                  class="w-50"
                />
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="50"
                  rows="6"
                  maxlength="250"
                ></textarea>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn text-light"
                  style="background-color: var(--primary-color)"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul class="list-unstyled">
          <li>
            <p>
              <i class="fas fa-map-marker-alt pe-2"></i>Warsaw, 57
              Street, Poland
            </p>
          </li>
          <li>
            <p><i class="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
          </li>
          <li>
            <p>
              <i class="fas fa-envelope pe-2 mb-0"></i>RHM@gmail.com
            </p>
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div
    class="row text-center p-3"
    style="background-color: rgba(0, 0, 0, 0.2)"
  >
    <span>© 2023 Copyright: RHM</span>
  </div>
  <!-- Copyright -->
</footer>
</div>
<!-- End of Footer Section -->
</div>
<!--End of Products Page Container-->`;

footerContainer.insertAdjacentHTML("beforeend", footer);
