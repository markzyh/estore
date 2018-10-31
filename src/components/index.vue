<template>
  <div class="index-wrap">
    <div class="index-left">
      <sider-bar :productLists='productLists' :newsLists='newsLists'></sider-bar>
    </div>
    <div class="index-right">
      <banner></banner>
      <product-lists></product-lists>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SiderBar from "../components/siderbar";
import Banner from "../components/banner";
import ProductLists from "../components/productLists";
export default {
  components: {
    SiderBar,
    Banner,
    ProductLists
  },
  name: "HelloWorld",
  data() {
    return {
      productLists: [],
      newsLists: []
    };
  },
  methods: {
    getProductLists() {
      axios
        .post("/productLists")
        .then(res => {
          this.productLists = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getNewsLists() {
      axios
        .post("/newsLists")
        .then(res => {
          this.newsLists = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getProductLists();
    this.getNewsLists();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.common-header {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  overflow: hidden;
}

.header-logo {
  width: 80px;
  height: 80px;
  display: block;
  margin: 6px 0 0 10px;
}

.header-btn {
  margin-right: 20px;

  span {
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin: 0 4px;
  }
}

.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 850px;
  margin-top: 20px;
  margin-left: 20px;
}
</style>