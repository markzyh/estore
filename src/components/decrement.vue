<template>
  <div class="test-vuex">
    <button @click="incrementFive">+{{num}}</button>
    <button @click="decrementFive">-{{num}}</button>
  </div>
</template>

<script>
 
  export default {
    components: {

    },
    data() {
      return {
        num:5
      }
    },
    methods:{
      incrementFive(){
        this.$store.dispatch('incre',this.num)
      },
      decrementFive(){
        this.$store.dispatch('decre',this.num)
      }
    }

  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
