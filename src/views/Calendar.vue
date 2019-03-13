<template>
  <div id="calendar">
    <div class="container">
      <button v-on:click="previous()">Previous</button><button v-on:click="next()">Next</button>
      <h2>{{ currentMonth + " " + currentYear }}</h2>
      <table class="table table-bordered">
        <thead>
          <tr class="table-success">
            <th>Su</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>Th</th>
            <th>F</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-if="startOfMonth == 'Sunday'">1</td>
            <td v-else></td>
            <td v-if="startOfMonth == 'Monday'">1</td>
            <td v-else></td>
            <td v-if="startOfMonth == 'Tuesday'">1</td>
            <td v-else></td>
            <td v-if="startOfMonth == 'Wednesday'">1</td>
            <td v-else></td>
            <td v-if="startOfMonth == 'Thursday'">1</td>
            <td v-else></td>
            <td v-if="startOfMonth == 'Friday'">1</td>
            <td v-else></td>
           <td v-if="startOfMonth == 'Saturday'">1</td>
           <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
</style>

<script>
import moment from "moment";

export default {
  data() {
    return {
      today: moment(),
      startOfMonth: moment()
        .startOf("month")
        .format("dddd"),
      endOfMonth: moment()
        .endOf("month")
        .format("dddd"),
      date: 1,
      months: [],
      years: [],
      currentYear: moment().format("YYYY"),
      currentMonth: moment().format("MMMM")
    };
  },
  methods: {
    previous: function() {
      this.currentMonth = moment()
        .subtract(1, "month")
        .format("MMMM");
    },
    next: function() {
      this.currentMonth = moment()
        .add(1, "month")
        .format("MMMM");
    }
  }
};
</script>
