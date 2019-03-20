<template>
  <div class="calendar">
    <div v-if="$root.googleEvents" id="calendar">
    </div>
    <button v-else v-on:click="googleAuth()">
      Sign in With Google
    </button>
  </div>
</template>

<style>
#calendar {
  width: 100%;
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
        this.calendarEvents.push({ title: favorite.event, start: favorite.start, color: "red", textColor: "black" });
      }, this);
      this.eventItem.forEach(function(event) {
        this.calendarEvents.push({ title: event.summary, start: event.start.dateTime });
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
        "https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/calendar&redirect_uri=http://localhost:8080/google/callback&response_type=code&client_id=172210505146-cglcauiuv08b1rae1pe7a4o4psobdgr6.apps.googleusercontent.com";
    }
  }
};
</script>
