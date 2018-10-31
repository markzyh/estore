<template>
  <div class="selection clear">
    <div class="details-group">
      <span>产品类型：</span>
      <div class="selection-component">
        <div class="selection-component-selected" @click="selectAction">{{selected}}<em></em> </div>
        <ul class="selection-component-list" v-if="isShow">
          <li v-for="(item,index) in selectionList" :key="index" @click="changeSelected(item)">{{item.name}}</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props:['selectionList'],
    data() {
      return {
        selected: "教育版",
        isShow: false
      };
    },
    methods: {
      selectAction() {
        this.isShow = !this.isShow
      },
      changeSelected(attr){
        this.selected  = attr
        this.selectAction()
      }
    },
    mounted() {}
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .selection-component{
    display: inline-block;
    position: relative;
    //overflow: hidden;
  }
  .selection-component-selected{
    cursor: pointer;
    width: 100px;
    line-height: 26px;
    border: 1px solid #ebebeb;
    text-align: center;
    em {
      display: inline-block;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #e3e3e3;
      width: 0;
      height: 0;
      margin-top: -1px;
      margin-left: 6px;
      margin-right: -14px;
      vertical-align: middle;
    }
  }
  .selection-component-list {
    background: #fff;
    z-index: 9;
    text-align: center;
    position: absolute;
    overflow: hidden;
    top: 26px;
    left: 0;
    width: 100px;
    line-height: 26px;
    li {
      border: 1px solid #ebebeb;
      line-height: 26px;
      border-top: 0;
      cursor: pointer;
    }
  }

</style>
