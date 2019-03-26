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
          <br><input type="password" class="form-control" v-model="password" placeholder="Enter New Password">
        </div><br>
        <div>
          <input type="submit" class="btn btn-success" value="Update Information">
        </div><br>
      </form>
      <button type="button" class=" btn btn-danger" data-toggle="modal" data-target="#destroyModal">
        Delete Account Permanently
      </button>
     <!--  Are You Sure Modal -->
      <div class="modal fade" id="destroyModal" tabindex="-1" role="dialog" aria-labelledby="destroyModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="destroyModalLabel">Delete Account Permanently</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Are You Sure?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" v-on:click="destroyUser()">Yes, Delete Account</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Nevermind</button>
            </div>
          </div>
        </div>
      </div><br>
      <br><router-link to="/profile">Back to Profile</router-link>
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
    },
    destroyUser: function() {
      axios.delete("api/users/" + this.user.id).then(response => {
        console.log(response.data);
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("jwt");
        this.$router.push("/");
      });
    }
  }
};
</script>
