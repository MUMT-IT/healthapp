<template>
  <section class="section">
    <b-field label="Pick a date">
      <b-datepicker
          inline
          v-model="date"
          :events="slots"
      >
      </b-datepicker>
    </b-field>
    <button class="button is-success" @click="book">Book</button>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "SlotCalendar",
  data() {
    return {
      date: null,
      slots: [],
    }
  },
  methods: {
    loadData: function() {
      let self = this
      self.isLoading = true
      axios.get('http://localhost:3002/comhealth/locations/' + self.$route.params.locationId + '/slots').then(function(resp) {
        resp.data.forEach((d)=>{
          d.start = new Date(d.start)
          if (d.quota > 0) {
            self.slots.push({
              date: d.start,
              type: 'is-success'
            })
          }
        })
        self.isLoading = false
      })
    },
    book: function() {
      if (this.date) {
        this.$router.push({name: 'Slot', params: {
          locationId: this.$route.params.locationId,
            day: this.date.day,
            month: this.date.month,
            year: this.date.year
          }})
      } else {
        this.$buefy.toast.open({
          message: 'Please selecte a date.',
          type: 'is-danger'
        })
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>