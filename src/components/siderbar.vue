<template>
  <div class="slider-bar">
    <div class="left-lists">
      <h3>全部产品</h3>
      <div class="left-nav-panel" v-for="item in productLists" :key="item.id">
        <h4>{{item.name}}</h4>
        <ul class="left-nav">
          <li v-for="(items,idx) in item.children" :key="idx">{{items.cname}}</li>
        </ul>
      </div>
    </div>
    <div class="left-lists">
      <h3>全部新闻</h3>
      <div class="left-nav-panel">
        <ul class="left-nav">
          <li v-for="(items,idx) in newsLists" :key="idx">{{items}}</li>
        </ul>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  props: ["productLists", "newsLists"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
h4 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
ul {
  padding: 10px 15px;
}
li {
  padding: 5px;
}
.left-lists {
  background: #fff;
  margin-top: 20px;
}
</style>
