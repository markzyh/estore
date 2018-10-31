<template>
  <div class="analysis">
    <h2>流量分析</h2>
    <p class="analysis-text">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    <counter @on-change="getProductMsg('buyNumber',$event)"></counter>
    <selection></selection> 
    <radio-com></radio-com> 
    <multi-com></multi-com> 
    <div class="details-group">
      <span>总价：</span><div class="analysis-price">{{getPrice}}元</div>
    </div>
  </div>
</template>

<script>
import Counter from '../components/base/counter'
import Selection from '../components/base/selection'
import RadioCom from '../components/base/radio-com'
import MultiCom from '../components/base/multi-com'
export default {
  components: {Counter,Selection,RadioCom,MultiCom},
  data() {
    return {
      getPrice:100,
      buyNumber:1,
    }
  },
  methods:{
    getProductMsg(attr,data){
      this[attr] = data
      console.log(this.buyNumber)
    }
  }, 
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.analysis-text{
  margin:10px 0;
  line-height: 1.6;
}
.details-group{
  margin: 30px 0;
  span{
    width: 100px;
    display: inline-block;
    
  }
}
.analysis-price{
  display: inline-block;
  margin-left: 20px;
    font-size: 20px;
}
</style>
