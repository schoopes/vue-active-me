<template>
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="isLoggedIn()">
        <router-link to="/logout">Logout</router-link> |
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/calendar">Calendar</router-link>
      </span>
      <span v-else>
        <router-link to="/login">Login</router-link> |
        <router-link to="/signup">Sign Up</router-link>
      </span>
    </div> -->
    <header class="header header2 straight-sm transparent light sticky-header animated-dropdown ttb-dropdown">
        <div class="header-inner">
            <div class="container-fluid">
                <a href="index.html" class="site-logo" title="Bold - Multipurpose Template">
                    <img src="assets/images/logo-white.png" data-rjs="3" alt="Bold Logo">
                    <span class="sr-only">Bold</span>
                </a>

                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-container" aria-expanded="false">
                    <span class="toggle-text">Menu</span>
                    <span class="toggle-wrapper">
                        <span class="sr-only">Toggle Menu</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </span>
                </button>

                <div class="collapse navbar-collapse" id="main-nav-container">
                    <ul class="nav navbar-nav onepage-nav">
                        <li class="dropdown active">
                            <a href="#home" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Home<span class="angle"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Business<span class="angle"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="index.html">Business - Version 1</a></li>
                                        <li><a href="index2.html">Business - Version 2</a></li>
                                        <li><a href="index3.html">Business - Version 3</a></li>
                                        <li><a href="index4.html">Business - Version 4</a></li>
                                        <li><a href="index5.html">Business - Version 5</a></li>
                                        <li><a href="index6.html">Business - Version 6</a></li>
                                        <li><a href="index7.html">Business - Version 7</a></li>
                                        <li><a href="index8.html">Business - Version 8</a></li>
                                        <li><a href="index9.html">Business - Version 9</a></li>
                                        <li><a href="index10.html">Business - Version 10</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Shop<span class="angle"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="index-shop.html">Shop - Version 1</a></li>
                                        <li><a href="index-shop2.html">Shop - Version 2</a></li>
                                        <li><a href="index-shop3.html">Shop - Version 3</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Blog<span class="angle"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="index-blog.html">Blog - Version 1</a></li>
                                        <li><a href="index-blog2.html">Blog - Version 2</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Portfolio<span class="angle"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="index-portfolio.html">Portfolio - Version 1</a></li>
                                        <li><a href="index-portfolio2.html">Portfolio - Version 2</a></li>
                                        <li><a href="index-portfolio3.html">Portfolio - Version 3</a></li>
                                        <li><a href="index-portfolio4.html">Portfolio - Version 4</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Photography<span class="angle"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="index-photography.html">Photography - Version 1</a></li>
                                        <li><a href="index-photography2.html">Photography - Version 2</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Onepages<span class="angle"></span></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="index-onepage.html">Onepage - Version 1</a></li>
                                        <li><a href="index-onepage2.html">Onepage - Version 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#about">About us</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#blog">Blog</a>
                        </li>
                        <li>
                            <a href="#contact">Contact us</a>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- End .container-fluid -->
        </div><!-- End .header-inner -->
    </header><!-- End .header -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
