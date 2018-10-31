<template>
  <div class="dialog" v-if="isShow">
    <!-- <button @click="closeLoginForm">click</button> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["isShow"],
  components: {},
  data() {
    return {};
  },
  methods:{
    /* closeLoginForm() {
        console.log("loginformclick")
        this.$emit('is-close')
      } */
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
