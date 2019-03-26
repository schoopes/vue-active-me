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
    var hashObj = this.$route.hash
      .replace("#", "")
      .split("&")
      .reduce((prev, item) => {
        return Object.assign({ [item.split("=")[0]]: item.split("=")[1] }, prev);
      }, {});
    axios
      .get(
        "http://localhost:3000/api/google/callback?code=" +
          hashObj.code +
          "&scope=" +
          hashObj.scope +
          "&id_token=" +
          hashObj.id_token
      )
      .then(response => {
        console.log(response.data);
        var googleEvents = response.data;
        // console.log(googleEvents);
        this.$root.googleEvents = googleEvents;
        this.$router.push("/calendar");
      });
  }
};
</script>
