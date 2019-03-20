<template>
  <div class="user-edit">
    <div class="container">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <form v-on:submit.prevent="submit()">
        <div>
          First Name: <input type="text" class="form-control" v-model="user.first_name">
        </div>
        <div>
          Last Name: <input type="text" class="form-control" v-model="user.last_name">
        </div>
        <div>
          Email: <input type="text" class="form-control" v-model="user.email">
        </div>
        <div>
          City: <input type="text" class="form-control" v-model="user.location">
        </div>
        <div>
          Password: <input type="text" class="form-control">
        </div><br>
        <div>
          <input type="submit" class="btn btn-success" value="Update Information">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var userParams = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        location: this.user.location,
        password: this.user.password
      };
      axios
        .patch("api/users/" + this.user.id, userParams)
        .then(response => {
          console.log(response.data);
          this.$router.push("/profile");
        })
        .catch(error => {
          this.errors = error.response.data;
        });
    }
  }
};
</script>
