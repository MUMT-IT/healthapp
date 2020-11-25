<template>
  <div>
    <Nav></Nav>
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
          <td>Activity</td>
          <td>{{ slot.activity.name }}</td>
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
      <div class="buttons">
        <button class="button is-light" @click="cancel" v-if="isFinishedLoading">Back</button>
        <button class="button is-success" @click="confirm" v-if="isFinishedLoading">Confirm</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Nav from '@/components/Nav.vue';

export default {
name: "AppointmentDetail",
  components: {
  Nav
  },
data() {
  return {
    slot: null,
    isLoading: false,
    isFinishedLoading: false,
  }
},
  methods: {
    confirm() {
      alert('booking..' + this.slot.id)
    },
    cancel() {
      this.$router.back()
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
