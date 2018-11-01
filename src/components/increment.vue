<template>
  <div class="test-vuex">
    <button @click="incrementTen">+{{num}}</button>
    <button @click="decrementTen">-{{num}}</button>
  </div>
</template>

<script>
 
  export default {
    components: {

    },
    data() {
      return {
        num:10
      }
    },
    methods:{
      incrementTen(){
        this.$store.dispatch('incre',this.num)
      },
      decrementTen(){
        this.$store.dispatch('decre',this.num)
      }
    }

  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
