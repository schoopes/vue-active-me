<template>
  <div class="login">
    <div id="body" class="container">
      <form v-on:submit.prevent="submit()">
        <h1 class="bordered-text">Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <input type="email" class="form-control" v-model="email" placeholder="Email">
        </div><br>
        <div class="form-group">
          <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div><br>
        <input type="submit" class="btn" value="Submit">
      </form>
    </div>
  </div>
</template>

<style>
#body {
  margin-top: 100px;
}
.form-control {
  border-color: #b3b3ff;
  border-width: 3px;
}
.btn {
  background-color: #30047d;
  color: #fff;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
