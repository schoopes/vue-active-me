<template>
  <div id="app">
    <header class="header header2 light sticky-header animated-dropdown ttb-dropdown">
        <div class="header-inner">
            <div class="container-fluid">
                <router-link to="/">
                   <a class="text-custom site-logo">Active<span id="logo-color">Me</span></a>
                </router-link>

                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-container" aria-expanded="false">
                    <span class="toggle-text">Menu</span>
                    <span class="toggle-wrapper">
                        <span class="sr-only">Toggle Menu</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </span>
                </button>¡

                <div class="collapse navbar-collapse" id="main-nav-container">
                    <ul class="nav navbar-nav onepage-nav">
                            <li v-if="isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/" class="toggle-text">Home</router-link>
                            </li>
                            <li v-if="isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/logout" class="toggle-text">Logout</router-link>
                            </li>
                            <li v-if="isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/profile" class="toggle-text">Profile</router-link>
                            </li>
                            <li v-if="isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/calendar" class="toggle-text">Calendar</router-link>
                            </li>
                            <li v-if="!isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/" class="toggle-text">Home</router-link>
                            </li>
                            <li v-if="!isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/login" class="toggle-text">Login</router-link>
                            </li>
                            <li v-if="!isLoggedIn()">
                                <router-link id="link" aria-expanded="false" role="button" to="/signup" class="toggle-text">Sign Up</router-link>
                            </li>
                       <!--  </span> -->
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- End .container-fluid -->
        </div><!-- End .header-inner -->
    </header><!-- End .header -->


    <div class="main">
      <router-view/>
    </div>


  </div>
</template>

<style>
#logo-color {
    color: #b3b3ff;
}

a.site-logo {
    font-size: 28px;
    font-weight: bold;
}

header.light {
    opacity: 0.8;
}
.currentLink {
    color: #b3b3ff;
}
#link {
    background-color: #30047d;
    color: #fff;
}
#link:hover {
    background-color: #fff;
    color: #30047d;
}
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
