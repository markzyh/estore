<template>
  <div class="login-form">

    <div class="login-panel-inside">
      <div class="login-group">
        <label for="userName">用户名:</label><input type="text" v-model="userNameVal">
        <p class="check-text">{{userNameError.errorText}}</p>
      </div>
      <div class="login-group">
        <label for="password">密码:</label><input type="password" v-model="passwordVal">
        <p class="check-text">{{passwordError.errorText}}</p>
      </div>
      <input type="button" value="登录" @click="checkLogin">

    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    props: ['isShow'],
    data() {
      return {
        userNameVal: "",
        passwordVal: "",
      };
    },
    methods: {
      checkLogin() {
        if (!this.userNameError.status || !this.passwordError.status) {
          alert("部分选项未通过");
        } else {
          axios
            .post('/userMsg') //假数据,登录名和密码
            .then(res => {
              this.$emit('hasLogin', res)
              console.log(res)
            })
        }
      },
    },
    computed: {
      userNameError() {
        let errorText, status;
        if (!/@/g.test(this.userNameVal)) {
          errorText = "用户名里面必须有@";
          status = false;
        } else {
          errorText = "";
          status = true;
        }
        if (!this.nameflag) {
          //只做一次
          errorText = "";
          this.nameflag = true;
        }
        return {
          errorText,
          status
        };
      },
      passwordError() {
        let errorText, status;
        if (!/^\w{1,6}$/g.test(this.passwordVal)) {
          errorText = "请输入1-6位数密码";
          status = false;
        } else {
          errorText = "";
          status = true;
        }
        if (!this.passflag) {
          errorText = "";
          this.passflag = true;
        }
        return {
          errorText,
          status
        };
      }
    },
    mounted() {}
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .drop-enter {
    /*进入之前*/
    transform: translateY(-500px);
  }

  .drop-enter-active {
    /*进入过程*/
    transition: all 0.5s ease;
  }

  .drop-enter-to {
    /*进入之后*/
  }

  .drop-leave {
    /*离开之前,在离开被触时*/
  }

  .drop-leave-active {
    transition: all 0.5s ease;
  }

  .drop-leave-to {
    transform: translateY(-500px);
  }

  .login-form {
    color: #333;
  }


  .login-panel {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
  }

  .login-panel-inside {
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
    background: #fff;
  }

  .login-group {
    width: 80%;
    margin: 20px auto;

    input {
      width: 60%;
      height: 40px;
      line-height: 40px;
      border: 1px solid #333;
      padding-left: 16px;
      font-size: 20px;
    }

    label {
      display: inline-block;
      width: 30%;
      color: #333;
    }
  }

  .login-panel-close {
    position: absolute;
    top: 0;
    right: 1%;
    font-size: 24px;
    cursor: pointer;
  }

  .check-text {
    font-size: 20px;
    margin-top: 20px;
    color: red;
    text-align: center;
  }

  input[type="button"] {
    background: #4fc08d;
    color: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    margin: 0 auto;
  }

</style>
