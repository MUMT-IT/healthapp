<template>
  <section class="section">
    <table class="table is-striped is-fullwidth">
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
    <button class="button is-success" @click="book">Book</button>
  </section>
</template>

<script>
import axios from "axios";

export default {
name: "AppointmentDetail",
data() {
  return {
    slot: null
  }
},
  methods: {
    book() {
      alert('booking..' + this.slot.id)
    }
  },
  mounted() {
    let self = this
    console.log(this.$route.params.slotId)
    axios.get('http://localhost:3002/comhealth/slots/' + this.$route.params.slotId).then(function(resp) {
      self.slot = resp.data
    })
  }
}
</script>

<style scoped>

</style>