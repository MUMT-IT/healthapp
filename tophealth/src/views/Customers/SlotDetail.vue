<template>
  <div>
    <section class="section">
      <div class="has-text-centered">
        <div class="columns">
          <div class="column">
            {{ slot.start | moment('ll hh:mm') }} - {{ slot.end | moment('hh: mm')}}
            </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="buttons is-grouped is-grouped-centered">
              <a class="button is-danger" @click="$router.go(-1)">Cancel</a>
              <a class="button is-link" @click="confirm()">Confirm</a>
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
      if (self.profile !== {}) {
        axios.post('http://localhost:5000/health-service-scheduler/api/bookings/add',
            {
              slotId: self.$route.params['slotId'],
              lineId: self.profile.userId,
            }).catch((error)=>{
            console.log(error)
        })
      } else {
        self.$liff.getProfile().then((profile)=>{
          self.profile = profile
          axios.post('http://localhost:5000/health-service-scheduler/api/bookings/add',
              {
                slotId: self.$route.params['slotId'],
                lineId: self.profile.userId,
              }).catch((error)=>{
              console.log(error)
          })
        })
      }
    }
  },
  mounted() {
    let self = this
    axios.get('http://localhost:5000/api/v1.0/hscheduler/slots/'+ this.$route.params['slotId'])
        .then((resp)=>{
          self.slot = resp.data[0]
    });
    self.$liff.init({
      liffId: "1655713713-L9yW3XWK"
    }).then(()=>{
      if(!self.$liff.isLoggedIn()) {
        self.$liff.login()
      }
      self.$liff.getProfile().then((profile)=>{
        self.profile = profile
      })
    })
  }
}
</script>

<style scoped>

</style>