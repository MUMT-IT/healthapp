<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Activity' }">
        Booking
      </b-navbar-item>
      <b-navbar-dropdown label="Account">
        <b-navbar-item tag="router-link" :to="{ name: 'AccountProfile', params: { id: 1} }">
          Your Profile
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'AccountBooking', params: {id: 1} }">
          Your Bookings
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'HealthProfile', params: { id: 1} }">
          Your Health Profile
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav"
}
</script>
