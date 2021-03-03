<template>
  <div>
    <section class="section">
      <h1 class="title is-size-4">
        Confirm Booking
      </h1>
      <div class="has-text-centered">
        <div class="columns">
          <div class="column">
            <div class="box">
              <div class="field">
                วันที่ {{ slot.start | moment('L hh:mm') }} - {{ slot.end | moment('hh: mm')}} นาฬิกา
              </div>
              <div class="field">
                <div class="buttons is-grouped is-grouped-centered">
                  <a class="button is-danger" @click="$router.go(-1)">Cancel</a>
                  <a class="button is-link" @click="confirm()">Confirm</a>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SlotDetail",
  data() {
    return {
      slot: {},
      profile: {}
    }
  },
  methods: {
    confirm: function () {
      let self = this;
      axios.post('http://mumtmis.herokuapp.com/health-service-scheduler/api/bookings/add',
          {
            slotId: self.$route.params['slotId'],
            lineId: self.profile.userId,
          }).catch((error)=>{
          console.log(error)
      }).then(()=>{
        self.$router.push({name: 'BookingStatus'})
      })
    }
  },
  mounted() {
    let self = this
    axios.get('https://mumtmis.herokuapp.com/api/v1.0/hscheduler/slots/'+ this.$route.params['slotId'])
        .then((resp)=>{
          self.slot = resp.data[0]
    });
  }
}
</script>

<style scoped>

</style>