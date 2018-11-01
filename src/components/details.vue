<template>
  <div class="details">
    <div class="details-left">
      <img :src="activeImg" alt="">
      <ul>
          <router-link v-for="(item,index) in detailsLists" :key="index" :to="{path:item.link}" tag="li"  active-class="active">
            {{item.name}}
          </router-link>
      </ul>
    </div>
    <div class="details-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //activeImg:'',
      detailsLists: [
        {
          img: require("../assets/1.png"),
          name: "数据统计",
          link: "/details/count",
          //active: false
        },
        {
          img: require("../assets/2.png"),
          name: "数据预测",
          link: "/details/forecats",
          //active: false
        },
        {
          img: require("../assets/3.png"),
          name: "流量分析",
          link: "/details/analysis",
          active: false
        },
        {
          img: require("../assets/4.png"),
          name: "广告发布",
          link: "/details/publish",
          //active: false
        }
      ]
    };
  },
  computed: {
     activeImg() {//forEach没有返回值
      for(var i = 0;i<this.detailsLists.length;i++){
        if(this.detailsLists[i].link == this.$route.path){
          console.log(i)
          return this.detailsLists[i].img
        }
      } 
    } 
  },
  methods: {
  },
  mounted(){
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.details{
  width: 1200px;
  margin:20px auto;
}
.details-left {
  float: left;
  width: 200px;
  text-align: center;
  background: #fff;
    padding: 20px 0;
}
.details-right{
  float: right;
  width: 900px;margin-left: 20px;
  background: #fff;
  padding: 20px;
}
li{
  text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}
li.active{
      background: #4fc08d;
    color: #fff;
}
</style>
