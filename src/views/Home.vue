<template>
  <div class="home">
    <div class="container">
      <div class="table-row">
        <div class="mb10"></div>
        <h1 class="title dark">Events in <span class="light text-custom">{{ user.location }}</span></h1>
        <div v-for="event in events">
          <div class="row">
            <div class="col-sm-6">
                <div class="service service-box service-border service-icon-top custom">
                    <div class="service-icon">
                        <i class="fa fa-globe"></i>
                    </div><!-- End .service-icon -->
                      <br>
                      <h3>{{ event.event }}</h3>
                      <h4>{{ event.city }}</h4>
                      <p>{{ event.venue }}</p>
                      <p>{{ event.address }}</p>
                      <p>{{ event.when }}</p>
                      <p>{{ event.description }}</p>
                      <button class="service-title" v-on:click="favoriteEvent(event.id)">Add to Favorites</button>
                </div><!-- End .service -->
            </div>
          </div>
        </div>
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
