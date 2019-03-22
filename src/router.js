import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Profile from "./views/Profile.vue";
import Calendar from "./views/Calendar.vue";
import Callback from "./views/Callback.vue";
import Edit from "./views/Edit.vue";
import Sendgrid from "./views/Sendgrid.vue";
import SendgridConfirmation from "./views/SendgridConfirmation.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/google/callback',
      name: 'callback',
      component: Callback
    },
    {
      path: '/edit',
      name: 'user-edit',
      component: Edit
    },
    {
      path: '/sendgrid',
      name: 'sendgrid',
      component: Sendgrid
    },
    {
      path: '/sendgrid/confirmation',
      name: 'sendgrid-confirmation',
      component: SendgridConfirmation
    }
  ]
});
