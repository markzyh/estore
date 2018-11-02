import Vue from 'vue'
import Vuex from 'vuex'
import orderList from './modules/order-list'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        orderList
    }
})