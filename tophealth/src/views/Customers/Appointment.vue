<template>
  <section class="section">
    <div class="container">
      <nav class="panel">
        <p class="panel-heading">
          Menu
        </p>
        <router-link
            :to="{name: 'AppointmentDetail', params: {'slotId': slot.id}}"
            class="panel-block" v-for="slot in slots" :key="slot.id">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
          {{ slot.location.name }}
        </router-link>
      </nav>
      <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
name: "Appointment",
  data() {
    return {
      slots: [],
      isLoading: false,
    }
  },
  methods: {
    loadData: function() {
      let self = this
      self.isLoading = true
      axios.get('http://localhost:3002/comhealth/slots').then(function(resp) {
        self.slots = resp.data
        self.isLoading = false
      })
    },
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>