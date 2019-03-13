<template>
  <div class="home">
    <div class="container">
      <h1>Events in {{ user.location }}</h1>
      <div v-for="event in events">
        <br>
        <h3>{{ event.event }}</h3>
        <h4>{{ event.city }}</h4>
        <p>{{ event.venue }}</p>
        <p>{{ event.address }}</p>
        <p>{{ event.when }}</p>
        <p>{{ event.description }}</p>
        <button v-on:click="favoriteEvent(event.id)">Add to Favorites</button>
      </div>
    </div>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      events: [],
      user: []
    };
  },
  created: function() {
    axios.get("/api/eventful").then(response => {
      this.events = response.data;
    });
    axios.get("/api/users/me").then(response => {
      this.user = response.data;
    });
  },
  methods: {
    favoriteEvent: function(eventfulId) {
      axios.post("/api/favorites", { eventful_id: eventfulId, user_id: this.user.id }).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
