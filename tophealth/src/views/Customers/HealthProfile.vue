<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <div class="container">
        <b-field label="Name">
            <b-input v-model="name"></b-input>
        </b-field>

        <button class="button is-success">Save</button>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
  name: "HealthProfile",
  components: {
    Nav
  },
  data() {
    return {
        name: null,
      
    }
  },
  methods: {
  
  }
}
</script>

<style scoped>

</style>
