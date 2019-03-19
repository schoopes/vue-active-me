<template>
  <div class="profile">
    <div class="container">
      <h1>{{ user.first_name }}'s Profile</h1>
      <p>Full Name: {{ user.first_name }} {{ user.last_name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>City: {{ user.location }}</p>
      <router-link to="/calendar">View Calendar</router-link>
      <br>
      <br><h2>My Events</h2>
      <transition-group name="fade">
        <div v-if="showFavorite" v-for="favorite in favorites" v-bind:key="favorite.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Event: {{ favorite.event }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">City: {{ favorite.city }}</h6>
              <p class="card-text">Venue: {{ favorite.venue }}</p>
              <p class="card-text">When: {{ calendarTime(favorite.start) }}</p>
              <button v-on:click="destroyFavorite(favorite.id);showFavorite = !showFavorite">Remove From Favorites</button>
            <!--   <br><p class="card-subtitle mb-2 text-muted">{{ getAttendees(favorite.id) }}{{ attendees - 1 }} other person(s) have favorited this event.</p> -->
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
      showFavorite: true,
      attendees: ""
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
    destroyFavorite(eventfulId) {
      axios.delete("/api/favorites/" + eventfulId).then(response => {
        console.log(response.data);
        this.$router.push("/profile");
      });
    },
    getAttendees(eventfulId) {
      axios.get("/api/favorites/" + eventfulId).then(response => {
        this.attendees = response.data.attendees;
      });
    }
  }
};
</script>
