<template>
  <div class="analysis">
    <h2>流量分析</h2>
    <p class="analysis-text">是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    <counter @on-change="getProductMsg('buyNumber',$event)"></counter>
    <selection :selectionList="selectionList" :productType="productType"  @on-change="getProductMsg('productType',$event)"></selection> 
    <radio-com :analysisYear="analysisYear" @on-change="getProductMsg('productDate',$event)"></radio-com> 
    <multi-com :productVersionList="productVersionList" @on-change="getProductMsg('productVersionArr',$event)"></multi-com> 
    <div class="details-group">
      <span>总价：</span><div class="analysis-price">{{productPrice}}元</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Counter from "../components/base/counter";
import Selection from "../components/base/selection";
import RadioCom from "../components/base/radio-com";
import MultiCom from "../components/base/multi-com";
export default {
  components: { Counter, Selection, RadioCom, MultiCom },
  data() {
    return {
      productPrice: 100,
      buyNumber: 1, //购买数量
      productType: 0, //产品类型
      productDate: 0, //有效时间
      productVersionArr: [0], //产品版本,多选
      selectionList: [
        {
          name: "教育版",
          value: 0
        },
        {
          name: "入门版",
          value: 1
        },
        {
          name: "家庭版",
          value: 2
        },
        {
          name: "豪华版",
          value: 3
        }
      ],
      analysisYear: [
        {
          name: "半年",
          checked: true
        },
        {
          name: "一年",
          checked: false
        },
        {
          name: "三年",
          checked: false
        }
      ],
      productVersionList: [
        {
          name: "客户版",
          value: 0,
          isChecked: true
        },
        {
          name: "代理商版",
          value: 1,
          isChecked: false
        },
        {
          name: "专家版",
          value: 2,
          isChecked: false
        }
      ]
    };
  },
  methods: {
    getProductMsg(attr, data) {
      this[attr] = data;
      this.getProductPrice()
      //console.log(attr + this[attr]);
    },
    getProductPrice() {//传数据,获取价格
      let productMessage = {
        buyNumber : this.buyNumber,
        productType : this.productType,
        productDate : this.productDate,
        productVersionArr : this.productVersionArr.join(',')
      }
      axios
        .post("/getPrice",productMessage)
        .then(res => {
          console.log(productMessage)
          this.productPrice = res.data.price
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {},
  mounted() {
    this.getProductPrice()
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.analysis-text {
  margin: 10px 0;
  line-height: 1.6;
}
.details-group {
  margin: 30px 0;
  span {
    width: 100px;
    display: inline-block;
  }
}
.analysis-price {
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
}
</style>
