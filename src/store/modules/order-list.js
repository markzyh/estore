const getters = {
    getTotal(state){
        return state.totalPrice
    }
}
const actions = {
    incre(state,price){
        state.commit('increment',price)
    },
    decre(state,price){
        state.commit('decrement',price)
    },
}
const mutations = {
    increment(state,price){
        state.totalPrice +=price
    },
    decrement(state,price){
        state.totalPrice -=price
    },
}
const state = {
    totalPrice:0
}
export default {
    getters,actions,mutations,state
}