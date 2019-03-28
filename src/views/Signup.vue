<template>
  <div class="signup">
    <div id="body" class="container">
      <form v-on:submit.prevent="submit(); sendgrid()" id="signup-form">
        <h1 class="bordered-text">Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <input type="text" class="form-control" v-model="firstName" placeholder="First Name">
        </div><br>
        <div class="form-group">
          <input type="text" class="form-control" v-model="lastName" placeholder="Last Name">
        </div><br>
        <div class="form-group">
          <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div><br>
        <div class="form-group">
          <input type="text" class="form-control" v-model="location" placeholder="City You Want to Volunteer In">
        </div><br>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <span v-if="password.length > 0 && password.length < 8 || password.length > 20 " class="text-danger">Password must be between 8 and 20 characters</span>
        </div><br>
        <div class="form-group">
          <input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Confirm Password">
          <span v-if="passwordConfirmation.length > 0 && passwordConfirmation !== password" class="text-danger">Must match password</span>
        </div><br>
        <input type="submit" class="btn" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
#body {
  margin-top: 150px;
  margin-bottom: 150px;
}
.btn {
  background-color: #30047d;
  color: #fff;
}
.text-danger {
  font-weight: bold;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        location: this.location,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          console.log("User successfully created!");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
      axios.post("api/sendgrid/confirmation", params).then(response => {
        console.log(response.data);
      });
    },
    sendgrid: function() {
      this.$router.push("/sendgrid");
    }
  }
};
</script>
