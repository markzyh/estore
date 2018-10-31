<template>
  <div class="common-header">
    <router-link :to="{path:'/'}">
      <img src="../assets/logo.png" class="header-logo fl">
    </router-link>
    <div class="header-btn fr">
      <span @click="showLoginForm" v-if="this.userName===''">登录</span><span v-if="this.userName!=''">{{userName}}</span><span>|</span><span @click="showRegForm">注册</span><span>|</span><span>说明</span>
    </div>
    <!-- <my-dialog :isShow="isShowLoginForm" @is-close="closeForm"> -->
      <login-form :isShow="isShowLoginForm" @isClose="closeForm('isShowLoginForm')" @hasLogin="hasLogin"></login-form>
    <!-- </my-dialog> -->
    <reg-form :isShow="isShowRegForm" @isClose="closeForm('isShowRegForm')"></reg-form>
  </div>
</template>

<script>
  import LoginForm from "../components/login-form"
  import RegForm from "../components/reg-form"
  import MyDialog from "../components/dialog"
  export default {
    components: {
      LoginForm,MyDialog,RegForm
    },
    name: "commonHeader",
    data() {
      return {
        isShowLoginForm: false,
        isShowRegForm: false,
        userName:''
      };
    },
    methods: {
      showLoginForm() {
        this.isShowLoginForm = true
      },
      showRegForm() {
        this.isShowRegForm = true
      },
      closeForm(attr){
        console.log("haha")
        this[attr] = false
        console.log("attr")

      },
      hasLogin(res){
        console.log(res.data)//mock.js随机数据
        this.isShowLoginForm = false 
        this.userName = res.data.userName 
      }
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

</style>
