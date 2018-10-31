<template>
  <div class="pay-form">
    <div class="analysis-pay-shade" v-if="isShowPayForm" @click="hidePayForm">
    </div>
    <div class="analysis-pay" v-if="isShowPayForm">
      <p class="analysis-pay-close" @click="hidePayForm">x</p>
      <ul class="analysis-pay-list">
        <li>购买数量</li>
        <li>产品类型</li>
        <li>有效时间</li>
        <li>产品版本</li>
        <li>总价</li>
      </ul>
      <ul class="analysis-pay-list analysis-pay-msg">
        <li>{{buyNumber}}</li>
        <li>{{selectionList[productType].name}}</li>
        <li>{{analysisYear[productDate].name}}</li>
        <li><span v-for="(item,index) in productVersionArr" :key="index">{{productVersionList[item].name}}</span></li>
        <li>{{productPrice}}</li>
      </ul>
      <h3>请选择银行</h3>
      <ul class="choose-bank">
        <li v-for="(item,index) in payWayLists" :key="index">{{item.name}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  import Counter from "../components/base/counter";
  import Selection from "../components/base/selection";
  import RadioCom from "../components/base/radio-com";
  import MultiCom from "../components/base/multi-com";
  import DropDialog from "../components/drop-dialog";
  export default {
    components: {
      Counter,
      Selection,
      RadioCom,
      MultiCom,
      DropDialog
    },
    data() {
      return {
        isShowPayForm: false,
        productPrice: 100,
        buyNumber: 1, //购买数量
        productType: 0, //产品类型
        productDate: 0, //有效时间
        productVersionArr: [0], //产品版本,多选
        payWayLists:[
          {
            name:'银行卡支付',
            value:101
          },
          {
            name:'支付宝支付',
            value:102
          },
          {
            name:'微信支付',
            value:103
          },
        ],
        selectionList: [{
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
        analysisYear: [{
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
        productVersionList: [{
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
      getProductPrice() { //传数据,获取价格
        let productMessage = {
          buyNumber: this.buyNumber,
          productType: this.productType,
          productDate: this.productDate,
          productVersionArr: this.productVersionArr.join(',')
        }
        axios
          .post("/getPrice", productMessage)
          .then(res => {
            console.log(productMessage)
            this.productPrice = res.data.price
          })
          .catch(err => {
            console.log(err);
          });
      },
      showPayForm() {
        this.isShowPayForm = true
      },
      hidePayForm() {
        this.isShowPayForm = false
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
h3{
      font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
}
.choose-bank{
  overflow: hidden;
  margin-top: 16px;
  li{
    float: left;
    width: 150px;
    text-align: center;
    padding:6px 0;
    border:1px solid #ebebeb;
    cursor: pointer;
    &.active{
      color: #fff;
      background: #4fc08d;
    }
  }
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

  .analysis-buy {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .analysis-pay-shade {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 5;
    left: 0;
    top: 0;
  }

  .analysis-pay {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }

  .analysis-pay-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }

  .analysis-pay-list {
    background: #4fc08d;
    overflow: hidden;

    li {
      float: left;
      overflow: hidden;
      width: 20%;
      padding: 4px 0;
      color: #fff;
      text-align: center;
      font-size: 20px;
      border: 1px solid #4fc08d;
    }
  }

  .analysis-pay-msg {
    background: #fff;

    li {
      border-color: #ebebeb;
      color: #464068;
      font-size: 14px;
    }
  }

</style>
