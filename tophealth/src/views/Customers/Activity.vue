<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <div class="container">
        <b-field>
          <b-select placeholder="Select activity" v-model="selectedActivity">
            <option
                v-for="option in options"
                :value="option"
                :key="option.id">
              {{ option.activity }}
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
export default {
  name: "Activity",
  components: {
    Nav
  },
  data() {
    return {
      selectedActivity: null,
      options: [
        {
          id: 1,
          activity: 'Follow up'
        },
        {
          id: 2,
          activity: 'Wellness'
        },
        {
          id: 3,
          activity: 'Consult'
        },
      ]
    }
  },
  methods: {
    book: function() {
      console.log(this.selectedActivity.id)
      this.$router.push({name: 'Appointment', params: {activityId: this.selectedActivity.id}})
    }
  }
}
</script>

<style scoped>

</style>
