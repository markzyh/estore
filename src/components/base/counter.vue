<template>
  <div class="counter">
    <div class="details-group">
      <span>购买数量：</span><div class="analysis-number"><b @click="minusNumber">-</b><input type="text" v-model="analysisNumber" @keyup="fixNumber"><b @click="addNumber">+</b></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      analysisNumber:1,
      minNumber:1,
      maxNumber:5
    }
  },
  methods:{
    minusNumber(){
      if(this.analysisNumber <= this.minNumber){
        this.analysisNumber = 1
        return
      }
      this.analysisNumber --
    },
    addNumber(){
      if(this.analysisNumber >= this.maxNumber){
        this.analysisNumber = 5
        return
      } 
      this.analysisNumber ++
    },
    fixNumber(){
      let fixNum = this.analysisNumber
    }
  },
  watch:{
    analysisNumber(){
      this.$emit('on-change',this.analysisNumber)
    }
  },
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.analysis-number{
  display: inline-block;
  margin-left: 10px;
      margin-bottom: -8px;
  input,b{
    display: inline-block;
    width: 30px;
    line-height: 26px;
    text-align: center;
    border:1px solid #ebebeb;
    float: left; 
  }
  b{
    cursor: pointer;
  }
  input{
    border-left: none;
    border-right: none;
  }
}
</style>
