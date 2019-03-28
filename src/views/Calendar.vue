<template>
  <div class="calendar container">
    <div v-if="$root.googleEvents" id="calendar">
    </div>
    <div v-else id="body" class="container">
      <h3 class="bordered-text">To View Your Personal Calendar, Click the Button Below:</h3>
      <div class="table-row">
        <div class="row">
          <button class="col-sm-6" id="button" v-on:click="googleAuth()">
            Sign in With Google
          </button>&nbsp;
          <p class="col-sm-6 col-sm-offset-1" id="gmail">&nbsp; Don't have a Gmail account? Maybe you should get one, it's 2019</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#calendar {
  width: 100%;
  background-color: #30047d;
  opacity: 0.8;
  margin-top: 50px;
  margin-bottom: 50px;
}
#body {
  margin-top: 150px;
}
.bordered-text {
  max-width: 100%;
}
#button {
  color: #30047d;
  font-weight: bold;
  border-color: #b3b3ff;
  max-width: 20%;
}
#gmail {
  color: #30047d;
  background-color: #e6e6e6;
  font-weight: bold;
  opacity: 0.8;
  max-width: 30%;
}
</style>

<script>
import axios from "axios";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

export default {
  data() {
    return {
      noAccount: false,
      favorites: [],
      calendarEvents: [],
      eventItem: this.$root.googleEvents.items
    };
  },
  mounted: function() {
    axios.get("/api/favorites").then(response => {
      this.favorites = response.data;
      console.log(this.favorites);

      var calendarEl = document.getElementById("calendar");

      this.favorites.forEach(function(favorite) {
        this.calendarEvents.push({ title: favorite.event, start: favorite.start, color: "purple", textColor: "white" });
      }, this);

      this.eventItem.forEach(function(event) {
        this.calendarEvents.push({
          title: event.summary,
          start: event.start.dateTime,
          color: "black",
          textColor: "white"
        });
      }, this);

      var calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        events: this.calendarEvents
      });

      calendar.render();
    });
  },
  methods: {
    googleAuth: function() {
      window.location.href =
        "https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/calendar&redirect_uri=http://localhost:8080/google/callback&response_type=code%20id_token&client_id=172210505146-cglcauiuv08b1rae1pe7a4o4psobdgr6.apps.googleusercontent.com";
    }
  }
};
</script>
