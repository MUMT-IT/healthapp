import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/customers/:id/health-records',
    name: 'HealthRecords',
    component: () => import('../views/Customers/HealthRecords.vue')
  },
  {
    path: '/customers/:id/profile',
    name: 'AccountProfile',
    component: () => import('../views/Customers/Profile.vue'),
    beforeEnter: (to, from ,next) => {
      // eslint-disable-next-line no-constant-condition
      axios.get('http://localhost:5000/comhealth/api/v1/lineids/abcde').then(resp=>{
        if (resp.data.status === true) {
          alert('Found')
            next()
        } else {
          next({ name: "Home"})
        }
      })
    }
  },
  {
    path: '/customers/:id/profile/edit',
    name: 'AccountProfileEdit',
    component: () => import('../views/Customers/ProfileEdit.vue')
  },
  {
    path: '/customers/:id/bookings',
    name: 'AccountBooking',
    component: () => import('../views/Customers/Bookings.vue')
  },
  {
    path: '/',
    name: 'Activity',
    component: () => import('../views/Customers/Activity.vue')
  },
  {
    path: '/appointments/:serviceId',
    name: 'Appointment',
    component: () => import('../views/Customers/Appointment.vue')
  },
  {
    path: '/appointments/calendar/:locationId',
    name: 'SlotCalendar',
    component: () => import('../views/Customers/SlotCalendar.vue')
  },
  {
    path: '/appointments/calendar/:locationId/slots',
    name: 'Slot',
    component: () => import('../views/Customers/Slot.vue')
  },
  {
    path: '/appointments/:slotId',
    name: 'AppointmentDetail',
    component: () => import('../views/Customers/AppointmentDetail.vue')
  },
  {
    path: '/slots/:slotId',
    name: 'SlotDetail',
    component: () => import('../views/Customers/SlotDetail.vue')
  },
  {
    path: '/bookings/finish',
    name: 'BookingStatus',
    component: () => import('../views/Customers/BookingStatus.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
