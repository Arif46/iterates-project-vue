import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/HomeSection.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/AboutSection.vue')
    }
  },
  {
    path: '/service',
    name: 'service',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/ServiceSection.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/ContactSection.vue')
    }
  },
  {
    path: '/service-details-one',
    name: 'service_details_one',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/ServiceDetails-one.vue')
    }
  },
  {
    path: '/service-details-two',
    name: 'service_details_two',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/ServiceDetails-two.vue')
    }
  },
  {
    path: '/service-details-three',
    name: 'service_details_three',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/ServiceDetails-three.vue')
    }
  },
  {
    path: '/service-details-four',
    name: 'service_details_four',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/pages/ServiceDetails-four.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
