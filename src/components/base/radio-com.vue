<template>
  <div class="radio-component clear">
    <div class="details-group">
      <span>有效时间：</span>
      <ul class="radio-component-panel">
        <li v-for="(item,index) in analysisYear" :key="index" :class="{checked:index === nowIndex}" @click="chooseYear(index)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props:['analysisYear'],
    data() {
      return {
        nowIndex:1,
      };
    },
    methods: {
      chooseYear(index){
          if(index === this.nowIndex){
            this.nowIndex = false
            console.log(this.nowIndex)
          }else{
            this.nowIndex = index
          }  
          this.$emit('on-change',this.nowIndex)  
      },
    },
    mounted() {
      
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .radio-component-panel{
    display: inline-block;
    li{
      display: inline-block;
      padding:2px 16px;
      text-align: center;
      border:1px solid #ebebeb;
      margin:0 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    li.checked{
          border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
    }
  }

</style>
