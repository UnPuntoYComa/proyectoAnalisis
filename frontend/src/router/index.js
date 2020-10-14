import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestSurveyBuilder from '../components/pages/survey-builder/TestSurveyBuilder.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/login/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/login/Signup.vue')
  },
  {
    path: '/encuestas',
    name: 'Encuestas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/VerEncuestas.vue')
  },
  {
    path: '/crear-encuesta',
    name: 'CrearEncuestas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/CrearEncuesta'),
    children: [
      {
        path: "/",
        name: "Create",
        component: TestSurveyBuilder,
      },
    ]
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    component: () => import(/* webpackChunkName: "proyecto" */ '../views/Estadisticas.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
