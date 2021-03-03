<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <div class="container">
        <div class="has-text-centered">
          <figure class="image is-64x64">
            <img v-bind:src="profile.pictureUrl" class="is-rounded">
          </figure>
        </div>
        <h1 class="title is-size-5 has-text-centered">Welcome {{ profile.displayName }}</h1>
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
