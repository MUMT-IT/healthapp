<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <h1 class="title">Booking</h1>
      <div class="container">
        <b-field label="สถานที่">
          <b-select placeholder="Select a site" v-model="selectedSite">
            <option
                v-for="site in sites"
                :value="site.id"
                :key="site.id">
              {{ site.name }}
            </option>
          </b-select>
        </b-field>
        <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
        <b-datepicker v-model="pickedSlot"
                      :events="availableSlots"
                      indicators="dots"
                      @input="getSlots($event)"
                      inline
                      locale="th-TH"
                      :unselectable-days-of-week="[0, 6]">
        </b-datepicker>
        <br>
        <nav class="panel">
          <p class="panel-heading">
            Available Slots
          </p>
          <a class="panel-block" v-for="slot in filteredSlots" :key="slot.id">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{ slot.date | moment('hh:mm') }} - {{ slot.end | moment('hh:mm')}} ({{ slot.quota }})
          </a>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"
import Nav from "@/components/Nav.vue"

export default {
name: "Appointment",
  components: {
    Nav
  },
  data() {
    return {
      slots: [],
      filteredSlots: [],
      sites: [],
      siteIds: [],
      isLoading: false,
      selectedSite: null,
      pickedSlot: null,
    }
  },
  computed: {
    availableSlots: function () {
      let self = this;
      let events = [];
      self.slots.forEach((s)=>{
        if (s['site']['id'] === self.selectedSite)
          events.push({
            id: s['id'],
            quota: s['quota'],
            date: s['start'],
            end: s['end'],
            type: "is-success"
          })
      });
      return events;
    },
  },
  methods: {
    getSlots: function (event) {
      this.filteredSlots = this.availableSlots.filter((s)=>{
        return event.getDate() == s.date.getDate() && event.getMonth() === s.date.getMonth();
      })
    },
    loadData: function() {
      let self = this
      self.isLoading = true
      axios.get('http://localhost:5000/api/v1.0/hscheduler/slots').then(function(resp) {
        resp.data[0].forEach((s)=>{
          if(s['service']===parseInt(self.$route.params['serviceId']) && s['cancelled_at'] === null) {
            s['start'] = new Date(s['start'])
            s['end'] = new Date(s['end'])
            self.slots.push(s);
            if (self.siteIds.indexOf(s['site']['id']) < 0)
              self.siteIds.push(s['site']['id']);
          }
        })
        self.siteIds.forEach((s)=>{
          axios.get('http://localhost:5000/api/v1.0/hscheduler/sites/' + s).then((resp)=>{
            self.sites.push(resp.data[0])
          })
        })
        self.selectedSite = self.siteIds[0];
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
