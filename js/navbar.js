let container = document.querySelector('.all');


let userDetails = `<div class="all row">
<aside class="profile-card">
    <header>
      <a target="_blank" href="#">
        <img src="http://lorempixel.com/150/150/people/" class="hoverZoomLink">
      </a>
      <h1>John Doe</h1>
      <h2>Better Visuals</h2>
    </header>
    <div class="profile-bio">
      <p>
        It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
      </p>
    </div>
    <ul class="profile-social-links">
      <li>
        <a target="_blank" href="https://www.facebook.com/creativedonut">
          <i class="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/dropyourbass">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/vipulsaxena">
          <i class="fa fa-github"></i>
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.behance.net/vipulsaxena">
          <i class="fa fa-behance"></i>
        </a>
      </li>
    </ul>
  </aside>
</div>`

let navbar = `<div class="row">
<nav
  class="navbar fixed-top navbar-expand-md justify-content-center bg-dark py-md-2"
>
  <div class="container-fluid">
    <button
      class="navbar-toggler p-1 rounded-2 ms-auto bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-between"
      id="navbarNav"
    >
      <!--Buttons Section-->
      <div class="col-12 col-md-4 d-md-flex justify-content-md-start">
        <div class="col-12 d-md-flex justify-content-md-evenly">
          <a
            class="col-12 col-md-auto nav-link active d-block d-md-flex align-items-md-center text-light text-center my-sm-3 my-md-0"
            aria-current="page"
            href="../index.html"
            >Home</a
          >
          <a
            class="col-12 col-md-auto nav-link d-block d-md-flex align-items-md-center text-secondary text-center link-light my-sm-3 my-md-0"
            href="#about"
            >ABOUT</a
          >
          <a
            class="col-12 col-md-auto nav-link d-block d-md-flex align-items-md-center text-secondary text-center link-light my-sm-3 my-md-0"
            href="#contact"
            >CONTACT US</a
          >
        </div>
      </div>
      <!--End of Buttons Section-->

      <!--Logo Section-->
      <a
        class="col-md-4 nav-link justify-content-center d-none d-md-flex mt-2"
        href="/index.html"
        style="z-index: 100"
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
      </a>
      <!--End of Logo Section-->

      <!--Registeration Buttons Section-->
      <div class="col-12 col-md-4 d-md-flex justify-content-md-end">
        <div class="col-md-12 d-md-flex justify-content-md-evenly">
          <a
            class="col-12 col-md-auto nav-link d-flex justify-content-center align-items-md-center my-sm-3 my-md-0" href="../pages/loginPage.html"
          >
            <button
              class="btn btn-dark col-4 col-md-auto fw-bold px-lg-5 rounded-5 border-light logSign"
            >
              LogIn
            </button>
          </a>
          <a
            class="col-12 col-md-auto nav-link d-flex justify-content-center align-items-md-center my-sm-3 my-md-0" href = "../pages/signupPage.html"
          >
            <button
              class="btn btn-light col-4 col-md-auto fw-bold px-lg-5 rounded-5 logSign"
            >
              Sign Up
            </button>
          </a>
          <div class="user-icon d-flex align-items-center gap-3"  style="align-items: baseline;">
          <img src="../assets/user-removebg-preview.png" style="width: 40px; height: 80%; border-radius: 50%; box-shadow: 1px 1px 10px -5px white,
          -1px -1px 10px -5px white;" alt="user">
          <p style="font-size: 15px;" class = "text-white">Lorem</p>
          </div>
          <a
            class="col-12 col-md-auto nav-link d-flex justify-content-center align-items-md-center my-sm-3 my-md-0" href="../pages/checkOut.html"
          >
            <img
              id="cart-icon"
              src="../assets/icons/icon-cart.svg"
              alt="cart"
            />
          </a>
        </div>
      </div>
      <!--End of Registeration Buttons Section-->
    </div>
  </div>
</nav>
</div>
<!--End of NavBar Section-->`

container.insertAdjacentHTML("afterbegin",navbar);

let userIcon = document.querySelector('.user-icon');

userIcon.addEventListener('click', function(){
  document.body.insertAdjacentHTML("afterbegin",userDetails)
})
