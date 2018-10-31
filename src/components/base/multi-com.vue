<template>
  <div class="multi-component clear">
    <div class="details-group">
      <span>产品版本：</span>
      <ul class="multi-component-panel">
        <li v-for="(item,index) in productVersionList" :key="index" :class="{checked:isIndexOf(index)}" @click="chooseVersion(index)">{{item.name}}</li>
        <!-- <li v-for="(item,index) in productVersion" :key="index" :class="{checked:item.isChecked}" @click="chooseVersion(index)">{{item.name}}</li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props:['productVersionList'],
  data() {
    return {
      nowIndex: [0],
      versionArray: [],
    };
  },
  methods: {
    chooseVersion(index) {
      if (this.nowIndex.indexOf(index) == -1) {
        this.nowIndex.push(index);
      } else {
        this.nowIndex.forEach((val,idx) => {
          if(this.nowIndex[idx] == index){
            this.nowIndex.splice(idx,1)
          }
        })
      }
      this.$emit('on-change',this.nowIndex)
    },
    /* chooseVersion(index){
        this.productVersion[index].isChecked = !this.productVersion[index].isChecked
        for(var i=0;i<this.productVersion.length;i++){
          if(this.productVersion[i].isChecked == true){
            this.versionArray.splice(0,this.versionArray.length)
            this.versionArray.push(this.productVersion[i].value)
          }
        }
        console.log(this.versionArray)
      }, */
    isIndexOf(index) {
      if (this.nowIndex.indexOf(index) != -1) {
        return true;
      } else {
        return false;
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.multi-component-panel {
  display: inline-block;
  li {
    display: inline-block;
    padding: 2px 16px;
    text-align: center;
    border: 1px solid #ebebeb;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  li.checked {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
}
</style>
