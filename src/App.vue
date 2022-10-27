<template>
  <div id="app">
    <!-- start header here -->

    <nav class="navbar navbar-expand-sm sticky-top">
      <a class="navbar-brand" href="#">
        <img
          src="assets/images/aali.png"
          alt=""
          class="img-fluid"
          style="width: 70px; background-color: white"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="fa fa-solid fa-bars fa-1x text-danger"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/service">Service</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- end header here -->

    <router-view />

    <!-- start footer here -->

    <footer style="background-color: rgb(60, 60, 60)">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="foot-box">
            <img src="assets/images/logo2.png" alt="" />
          </div>
        </div>
        <div
          class="col-lg-6 col-md-12 col-sm-12 footer text-white">
          
            <span> Connect </span>
            <a href="" class="fab fab-footer facebook fa-facebook"></a>
            <a href="" class="fab fab-footer twitter fa-twitter"></a>
            <a href="" class="fab fab-footer instagram fa-instagram"></a>
          
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-md-12 footer"
          style="color: rgb(182, 178, 191)"
        >
          <p>
            Designed with love by
            <a href="" class="cool-footer-link" style="margin-left: 0px">
              Codeefly
            </a>
            © 2022
          </p>
        </div>
        <div class="col-lg-6 col-md-12 footer text-center">
          <a
            href=""
            style="color: rgb(182, 178, 191) !important"
            class="cool-footer-link"
          >
            Terms & Condition
          </a>
          <a
            href=""
            style="color: rgb(182, 178, 191) !important"
            class="cool-footer-link"
          >
            Privacy Policy
          </a>
          <a
            href=""
            style="color: rgb(182, 178, 191) !important"
            class="cool-footer-link"
            >Support
          </a>
        </div>
      </div>
    </footer>

    <!-- end footer here -->
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/
.router-link-exact-active {
  color: rgb(234, 67, 67);
}
</style>
