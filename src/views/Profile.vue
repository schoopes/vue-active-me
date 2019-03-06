<template>
  <div class="profile">
    <div class="container">
      <h1>{{ user.first_name }}'s Profile</h1>
      <p>Full Name: {{ user.first_name }} {{ user.last_name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>City: {{ user.location }}</p><br>
      <h2>My Events</h2>
      <div v-for="favorite in favorites">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Event: {{ favorite.event }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">City: {{ favorite.city }}</h6>
            <p class="card-text">Venue: {{ favorite.venue }}</p>
            <p class="card-text">When: {{ calendarTime(favorite.when) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var axios = require("axios");
import moment from "moment";

export default {
  data: function() {
    return {
      user: [],
      favorites: [],
      userId: ""
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
    }
  }
};
</script>
