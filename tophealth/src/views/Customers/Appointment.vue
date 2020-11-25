<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <div class="container">
        <nav class="panel">
          <p class="panel-heading">
            Location
          </p>
          <router-link
              :to="{name: 'SlotCalendar', params: {locationId: slot.location.id}}"
              class="panel-block" v-for="slot in slots" :key="slot.id">
        <span class="panel-icon">
          <i class="far fa-calendar-alt" aria-hidden="true"></i>
        </span>
            {{ slot.location.name }}
          </router-link>
        </nav>
        <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
      </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";
import Nav from "@/components/Nav.vue"

export default {
name: "Appointment",
  components: {
    Nav
  },
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
