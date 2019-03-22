<template>
  <div class="user-edit">
    <div class="container">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <form v-on:submit.prevent="submit()">
        <div>
          First Name: <input type="text" class="form-control" v-model="firstName">
        </div>
        <div>
          Last Name: <input type="text" class="form-control" v-model="lastName">
        </div>
        <div>
          Email: <input type="email" class="form-control" v-model="email">
        </div>
        <div>
          City: <input type="text" class="form-control" v-model="location">
        </div><br>
        <button type="button" v-on:click="updatePassword = !updatePassword">
          Change Password
        </button><br>
        <div v-if="updatePassword">
<!--           <br><input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Enter Current Password"> -->
          <br><input type="password" class="form-control" v-model="password" placeholder="Enter New Password">
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
      errors: [],
      user: {},
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      passwordConfirmation: "",
      password: "",
      updatePassword: false
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
      this.firstName = response.data.first_name;
      this.lastName = response.data.last_name;
      this.email = response.data.email;
      this.location = response.data.location;
    });
  },
  methods: {
    submit: function() {
      var userParams = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        location: this.location,
        password: this.password
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
