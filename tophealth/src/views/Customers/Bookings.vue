<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
      <h1 class="title is-size-5">Booking History</h1>
      <div v-for="book in books" :key="book.id">
        <span class="icon is-large">
          <i class="far fa-clock fa-2x" v-if="book.status==='pending'"></i>
          <i class="far fa-check-circle fa-2x has-text-success" v-else></i>
        </span>
        <p v-bind:class="{ 'has-text-success': book.status === 'approved' }">
          {{ book.created_at }}<br>
          <span class="icon">
            <i class="far fa-calendar-check"></i>
          </span>
          <span>
            {{ book.activity }}
          </span>
          <br>
          <span class="icon">
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <span>
            {{ book.slot.location.name }}
          </span>
        </p>
        <button class="button is-light is-danger is-rounded">
          <span class="icon">
            <i class="fas fa-trash-alt"></i>
          </span>
          <span>ยกเลิก</span>
        </button>
        <hr>
      </div>
      <button class="button is-light" @click="$router.back()">
        Back
      </button>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import axios from 'axios'

export default {
name: "Bookings",
  components: {
    Nav
  },
  data() {
    return {
      books: [],
      isLoading: false
    }
  },
  mounted() {
    let self = this
    this.isLoading = true
    axios.get('http://localhost:3002/comhealth/customers/1/bookings').then((resp)=>{
      resp.data.forEach((book)=>{
        book.created_at = new Date(book.created_at)
        self.books.push(book)
      })
      self.isLoading = false
    })
  }
}
</script>

<style scoped>

</style>
