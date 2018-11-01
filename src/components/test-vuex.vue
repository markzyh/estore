<template>
  <div class="test-vuex">
    {{totalPrice}} 
    <increment></increment>
    <decrement></decrement>
  </div>
</template>

<script>
import Increment from '../components/increment'
import Decrement from '../components/decrement'
  export default {
    components: {
      Increment,Decrement
    },
    data() {
      return {
      }
    },
    computed:{
      totalPrice(){
        return this.$store.getters.getTotal
      }
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
