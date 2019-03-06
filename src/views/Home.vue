<template>
  <div class="home">
    <div class="container">
      <h1>Events in Your Area</h1>
      <p>{{ events }}</p>
   <!--    <div v-for="event in events">
        <p>{{ event }}</p>
        <button v-on:click="favoriteEvent()">Add to Favorites</button>
      </div> -->
    </div>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      events: []
    };
  },
  created: function() {
    axios.get("/api/eventful").then(response => {
      this.events = response.data;
    });
  },
  methods: {
    favoriteEvent: function() {
      axios.post("/api/favorites").then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
