<template>
<div>
  <Nav></Nav>
  <div class="has-text-centered">
    <h1 class="title has-text-centered">Profile</h1>
    <table class="table is-fullwidth">
      <tr>
        <td>ชื่อ</td>
        <td>ลิขิต ปรียานนท์</td>
      </tr>
      <tr>
        <td>โทรศัพท์</td>
        <td>092-279-9327</td>
      </tr>
    </table>
    <button class="button is-light" @click="$router.push({ name: 'AccountProfileEdit', params: { id: 1}})">
      <span class="icon">
        <i class="fas fa-pencil-alt"></i>
      </span>
      <span>Edit</span>
    </button>
  </div>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
export default {
name: "Profile",
  components: {
  Nav
  }
}
</script>

<style scoped>

</style>
