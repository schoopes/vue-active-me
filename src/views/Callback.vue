<template>
  <div class="callback">
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  created: function() {
    axios
      .get(
        "http://localhost:3000/api/google/callback?code=" + this.$route.query.code + "&scope=" + this.$route.query.scope
      )
      .then(response => {
        var googleEvents = response.data;
        console.log(googleEvents);
        this.$root.googleEvents = googleEvents;
        this.$router.push("/calendar");
      });
  }
};
</script>
