<template>
  <section class="section">
    <div class="container">
      <nav class="panel">
        <p class="panel-heading">
          Menu
        </p>
        <a class="panel-block" v-for="slot in slots" :key="slot.id">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span>
          {{ slot.location.name }}
        </a>
      </nav>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
name: "Appointment",
  data() {
    return {
      slots: []
    }
  },
  methods: {
    loadData: function() {
      let self = this
      axios.get('http://localhost:3002/comhealth/slots').then(function(resp) {
        self.slots = resp.data
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