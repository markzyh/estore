<template>
  <div class="product-lists">
      <ul>
          <li v-for="(item,index) in productImg" :key="index">
            <img :src="item.imgUrl" alt="" class="fl">
            <div class="fl product-lists-text">
              <h3>{{item.productName}}</h3>
              <p>{{item.productDec}}</p>
              <!-- <a :href="item.productUrl">立即购买</a> -->
              <router-link :to="{path:'/details'+item.productUrl}">立即购买</router-link>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      productImg:[
        {
          productName:'开放产品',
          imgUrl:require('../assets/1.png'),
          productDec:'开放产品是一款开放产品',
          productUrl:'/analysis'
        },
        {
          productName:'品牌营销',
          imgUrl:require('../assets/2.png'),
          productDec:'开放产品是一款开放产品',
          productUrl:'/count'
        },
        {
          productName:'使命必达',
          imgUrl:require('../assets/3.png'),
          productDec:'开放产品是一款开放产品',
          productUrl:'/forecast'
        },
        {
          productName:'勇攀高峰',
          imgUrl:require('../assets/4.png'),
          productDec:'开放产品是一款开放产品',
          productUrl:'/publish'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-lists-text{
  margin-left: 10px;
}
li{
      float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
h3{
      font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
}
a{
      background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
</style>
