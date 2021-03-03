<template>
  <div class="home">
    <Nav></Nav>
    <router-link :to="{'name': 'Activity'}">Make an appointment</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  },
  mounted() {
  }
}
</script>
