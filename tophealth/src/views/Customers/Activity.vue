<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <div class="container">
        <b-field>
          <b-select placeholder="Select services" v-model="selectedActivity">
            <option
                v-for="option in options"
                :value="option"
                :key="option.id">
              {{ option.name }}
            </option>
          </b-select>
        </b-field>
        <button class="button is-success" @click="book">Go</button>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import axios from "axios";
export default {
  name: "Activity",
  components: {
    Nav
  },
  data() {
    return {
      selectedActivity: null,
      options: []
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
    axios.get('http://localhost:5000/api/v1.0/hscheduler/services').then((resp)=>{
      resp.data[0].forEach((service)=>{
        self.options.push(service);
      })
    })
  }
}
</script>

<style scoped>

</style>
