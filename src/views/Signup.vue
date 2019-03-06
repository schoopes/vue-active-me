<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <input type="text" class="form-control" v-model="name" placeholder="Name">
        </div><br>
        <div class="form-group">
          <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div><br>
        <div class="form-group">
          <input type="text" class="form-control" v-model="location" placeholder="City You Want to Volunteer In">
        </div><br>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <span v-if="password.length > 0 && password.length < 8 || password.length > 20 " class="form-control">Password must be between 8 and 20 characters</span>
        </div><br>
        <div class="form-group">
          <input type="password" class="form-control" v-model="passwordConfirmation" placeholder="Confirm Password">
          <span v-if="passwordConfirmation.length > 0 && passwordConfirmation !== password" class="text-danger">Must match password</span>
        </div><br>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
/*remove once theme is installed*/
.form-control {
  width: 50%;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
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
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
