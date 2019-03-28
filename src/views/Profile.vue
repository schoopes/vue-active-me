<template>
  <div class="profile">
    <div class="container">
      <h1 id="title" class="bordered-text"><i class="fa fa-hand-peace-o"></i> {{ user.first_name }}'s Profile <i class="fa fa-hand-peace-o"></i></h1>
      <div class="table-row bordered-text">
        <div class="mb10"></div>
        <div class="row">
          <div class="col">
            <h5>Full Name: {{ user.first_name }} {{ user.last_name }}</h5>
            <h5>Email: {{ user.email }}</h5>
            <h5>City: {{ user.location }}</h5>
            <router-link to="/edit">Edit User Information</router-link>
            <br><router-link to="/calendar">View Calendar</router-link>
            <br>
          </div>
        </div>
      </div>
      <br><h2 id="events">My Events</h2>
      <transition-group name="fade">
        <div v-for="favorite in favorites" v-bind:key="favorite.id" >
          <div class="row">
            <div class="col">
                <div class="service service-box service-border">
                      <br>
                      <h4>Event: {{ favorite.event }}</h4>
                      <p>City: {{ favorite.city }}}</p>
                      <p>Venue: {{ favorite.venue }}</p>
                      <p>When: {{ calendarTime(favorite.start) }}</p>
                      <button id="button" class="service-title" v-on:click="destroyFavorite(favorite)" >Remove From Favorites</button>
                </div><!-- End .service -->
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
#title {
  margin-top: 120px;
}
#button {
  color: #30047d;
  border-color: #b3b3ff;
}
#events {
  color: #30047d;
  text-align: center;
}
.fa {
  color: #b3b3ff;
}
.service.service-box.service-border {
  border-color: #b3b3ff;
  border-width: 5px;
}
</style>

<script>
var axios = require("axios");
import moment from "moment";

export default {
  data: function() {
    return {
      user: [],
      favorites: [],
      userId: "",
      attendees: []
    };
  },
  created: function() {
    axios.get("/api/favorites").then(response => {
      console.log(response.data);
      this.favorites = response.data;
    });
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
    });
  },
  methods: {
    calendarTime: function(date) {
      return moment(date).format("MMMM Do YYYY @ h:mm: a");
    },
    destroyFavorite(favorite) {
      axios.delete("/api/favorites/" + favorite.id).then(response => {
        console.log(response.data);
        var index = this.favorites.indexOf(favorite);
        this.favorites.splice(index, 1);
        this.$router.push("/profile");
      });
    }
  }
};
</script>
