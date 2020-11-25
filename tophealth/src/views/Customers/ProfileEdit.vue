<template>
  <div>
    <Nav></Nav>
    <section class="section">
      <h1 class="title has-text-centered is-size-5">Profile</h1>
      <b-field label="ชื่อ">
        <b-input v-model="firstname"></b-input>
      </b-field>
      <b-field label="นามสกุล">
        <b-input v-model="lastname"></b-input>
      </b-field>
      <b-field label="โทรศัพท์">
        <b-input v-model="tel"></b-input>
      </b-field>
      <div class="buttons is-centered">
        <button class="button is-light" @click="$router.back()">
          Cancel
        </button>
        <button class="button is-success">
      <span class="icon">
        <i class="far fa-save"></i>
      </span>
          <span>Save</span>
        </button>
      </div>
    </section>
  </div>

</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
name: "ProfileEdit",
  components: {
    Nav
  },
  data() {
  return {
    firstname: 'ลิขิต',
    lastname: 'ปรียานนท์',
    tel: '092-279-9327'
  }
  }
}
</script>

<style scoped>

</style>
