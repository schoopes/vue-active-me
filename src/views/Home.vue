<template>
  <div class="home">
    <div class="container">
      <div class="table-row">
        <div class="mb10"></div>
        <div v-if="isLoggedIn()">
          <h1 id="title" v-if="isLoggedIn()" class="bordered-text">Events in {{ user.location }}</h1>
          <div>
            <div class="row">
              <div v-for="event in events" class="col">
                <div class="service service-box service-border service-icon-top custom">
                    <div class="service-icon">
                        <i class="fa fa-globe"></i>
                    </div><!-- End .service-icon -->
                      <br>
                      <h3>{{ event.event }}</h3>
                      <h4>{{ event.city }}</h4>
                      <p>{{ event.venue }}</p>
                      <p>{{ event.address }}</p>
                      <p>{{ calendarTime(event.when) }}</p>
                      <p>{{ event.description }}</p>
                      <button id="button" class="service-title" v-on:click="favoriteEvent(event.id)" data-toggle="modal" data-target="#addedModal">Add to Favorites</button>

                      <div class="modal fade" id="addedModal" tabindex="-1" role="dialog" aria-labelledby="destroyModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <p>Favorite Added to Profile!</p>
                            </div>
                          </div>
                        </div>
                      </div><br>


                </div><!-- End .service -->
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h3 id="title" class="bordered-text">Welcome to Active Me! To see volunteer opportunities in your area, please create an account or sign in from the above menu.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#title {
  margin-top: 220px;
}
#button {
  color: #30047d;
}
div.service-icon:hover {
  background-color: #b3b3ff;
}
div.service.service-box.service-border:hover {
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
      events: [],
      user: []
    };
  },
  mounted: function() {
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
    },
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    },
    calendarTime: function(date) {
      return moment(date).format("MMMM Do YYYY @ h:mm: a");
    }
  }
};
</script>
