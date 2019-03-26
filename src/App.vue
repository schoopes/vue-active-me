<template>
  <div id="app">
    <header class="header header2 straight-sm transparent light sticky-header animated-dropdown ttb-dropdown">
        <div class="header-inner">
            <div class="container-fluid">
<!--                 <a href="index.html" class="site-logo" title="Bold - Multipurpose Template">
                    <img src="assets/images/logo-white.png" data-rjs="3" alt="Bold Logo">
                    <span class="sr-only">Bold</span>
                </a> -->

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
                        <!-- <span v-if="isLoggedIn()"> -->
                            <li v-if="isLoggedIn()">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li v-if="isLoggedIn()">
                                <router-link to="/logout">Logout</router-link>
                            </li>
                            <li v-if="isLoggedIn()">
                                <router-link to="/profile">Profile</router-link>
                            </li>
                            <li v-if="isLoggedIn()">
                                <router-link to="/calendar">Calendar</router-link>
                            </li>
                   <!--      </span>
                        <span v-else> -->
                            <li v-if="!isLoggedIn()">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li v-if="!isLoggedIn()">
                                <router-link to="/login">Login</router-link>
                            </li>
                            <li v-if="!isLoggedIn()">
                                <router-link to="/signup">Sign Up</router-link>
                            </li>
                       <!--  </span> -->
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
