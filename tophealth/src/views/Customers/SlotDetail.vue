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
              <a class="button is-link" @click="$router.go(-1)">Confirm</a>
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
      slot: {}
    }
  },
  mounted() {
    let self = this
    axios.get('http://localhost:5000/api/v1.0/hscheduler/slots/'+ this.$route.params['slotId'])
        .then((resp)=>{
          self.slot = resp.data[0]
    });
  }
}
</script>

<style scoped>

</style>