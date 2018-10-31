<template>
  <div class="drop-dialog">
    <div class="drop-dialog-cover" v-if="isShow"  @click="closeCover"></div>
    <transition name="drop">
      <div class="drop-dialog-content" v-if="isShow">
        <p class="drop-dialog-close" @click="closeCover">x</p>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: ['isShow'],
    data() {
      return {

      };
    },
    methods: {
      closeCover(){
        this.$emit('isClose')
      }
    },
    computed: {},
    mounted() {}
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .drop-enter {
    /*进入之前*/
    transform: translateY(-500px);
  }

  .drop-enter-active {
    /*进入过程*/
    transition: all 0.5s ease;
  }

  .drop-enter-to {
    /*进入之后*/
  }

  .drop-leave {
    /*离开之前,在离开被触时*/
  }

  .drop-leave-active {
    transition: all 0.5s ease;
  }

  .drop-leave-to {
    transform: translateY(-500px);
  }

.drop-dialog-close{
     position: absolute;
     line-height: 1;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
}
  .drop-dialog-cover {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    left: 0;
    top: 0;
    z-index: 5
  }
  .drop-dialog-content{
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;   
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10; 
  }

</style>
