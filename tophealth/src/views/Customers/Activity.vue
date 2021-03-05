<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="title is-size-5">Health Booking Service</h1>
          <h1 class="subtitle is-size-5">
            กรุณาเลือกบริการเพื่อทำการนัดหมาย
          </h1>
        <br>
        <b-field>
          <b-select placeholder="Select services" v-model="selectedActivity" expanded>
            <option
                v-for="option in options"
                :value="option"
                :key="option.id">
              {{ option.name }}
            </option>
          </b-select>
        </b-field>
        <button class="button is-success" @click="book">Ok</button>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Activity",
  data() {
    return {
      selectedActivity: null,
      options: [],
      profile: {}
    }
  },
  methods: {
    book: function() {
      console.log(this.selectedActivity.id)
      this.$router.push({name: 'Appointment', params: {serviceId: this.selectedActivity.id}})
    }
  },
  mounted() {
    let self = this;
    axios.get('https://mumtmis.herokuapp.com/api/v1.0/hscheduler/services').then((resp)=>{
      resp.data[0].forEach((service)=>{
        self.options.push(service);
      })
    })
  }
}
</script>

<style scoped>

</style>
