<template>
  <section class="section">
    <table class="table is-striped is-fullwidth" v-if="isFinishedLoading">
      <tr>
        <td>ID</td>
        <td>{{ slot.id }}</td>
      </tr>
      <tr>
        <td>Start</td>
        <td>{{ slot.start }}</td>
      </tr>
      <tr>
        <td>End</td>
        <td>{{ slot.end }}</td>
      </tr>
      <tr>
        <td>Location</td>
        <td>{{ slot.location.name }}</td>
      </tr>
      <tr>
        <td>Location GPS</td>
        <td>{{ slot.location.latlong }}</td>
      </tr>
    </table>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
    <button class="button is-success" @click="book" v-if="isFinishedLoading">Book</button>
  </section>
</template>

<script>
import axios from "axios";

export default {
name: "AppointmentDetail",
data() {
  return {
    slot: null,
    isLoading: false,
    isFinishedLoading: false
  }
},
  methods: {
    book() {
      alert('booking..' + this.slot.id)
    }
  },
  mounted() {
    let self = this
    self.isLoading = true
    console.log(this.$route.params.slotId)
    axios.get('http://localhost:3002/comhealth/slots/' + this.$route.params.slotId).then(function(resp) {
      self.slot = resp.data
      self.isLoading = false
      self.isFinishedLoading = true
    })
  }
}
</script>

<style scoped>

</style>