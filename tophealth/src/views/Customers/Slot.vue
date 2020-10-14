<template>
  <section class="section">
    <table class="table is-striped" v-if="slots.length>0">
      <thead>
      <th>Start</th>
      <th>End</th>
      <th>Quota</th>
      </thead>
      <tr v-for="s in slots" :key="s.id" @click="book(s)">
        <td>{{ s.start }}</td>
        <td>{{ s.end }}</td>
        <td>
          {{ s.quota }}
          <div class="tags has-addons">
            <span class="tag">Confirm</span>
            <span class="tag is-success">5</span>
          </div>
          <div class="tags has-addons">
            <span class="tag">Pending</span>
            <span class="tag is-warning">3</span>
          </div>
        </td>
      </tr>
    </table>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
    <div class="buttons">
      <button class="button is-light" @click="$router.back()">Back</button>
    </div>
  </section>

</template>

<script>
import axios from "axios";

export default {
  name: "Slot",
  data() {
    return {
      slots: [],
      isLoading: false,
    }
  },
  methods: {
    loadData: function () {
      let self = this
      self.isLoading = true
      axios.get('http://localhost:3002/comhealth/locations/' + self.$route.params.locationId + '/slots', {params: {
        day: 14,
          month: 10,
          year: 2020
        }}).then(function (resp) {
        resp.data.forEach((d) => {
          d.start = new Date(d.start)
            self.slots.push(d)
        })
        self.isLoading = false
      })
    },
    book: function(s) {
      this.$router.push({name: 'AppointmentDetail', params: {slotId: s.id}})
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>