// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(Vuex)
let store = new Vuex.Store({
  state:{
    totalPrice:0
  },
  getters:{
    getTotal(state){
      return state.totalPrice
    }
  },
  mutations:{
    increment(state,price){
      state.totalPrice += price
    },
    decrement(state,price){
      state.totalPrice -= price
    }
  },
  actions:{
    incre(state,price){
      state.commit('increment',price)
    },
    decre(state,price){
      state.commit('decrement',price)
    },
  }
})
Vue.use(VueAwesomeSwiper, /* { default global options } */)
require('./mock.js')

Vue.config.productionTip = false

Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
