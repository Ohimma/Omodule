<template>
<div class="login">
    <div class="login-msg">
        <form action="">
            <div class="ltop">
                <input type="text" name="user_name" id="user_name" placeholder="用户名/手机号/邮箱账号">
                <input type="password" name="password" id="password" placeholder="请输入密码">
                <div class="tips">
                   <div class="keep">
                    <input type="checkbox" name="password_keep" id="checked1">
                    <label for="checked1"> 记住密码</label>
                  </div>
                  <div class="forget">
                      <a href="#">欢迎注册, </a>
                      <a href="#">忘记密码</a>
                  </div>
                </div>
               
                <button>登  录</button>
            </div>
        </form>
        
        <div class="lbottom">
            <h4>合作网站登录账号：</h4>
            <!-- <img src="./_static/icon/password_1.png" alt="">
            <img src="./_static/icon/password_1.png" alt="">
            <img src="./_static/icon/password_1.png" alt=""> -->
        </div>        
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginData: {
        account: '',
        password: ''
      },
      loading: false,
    }
  },
 
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: lightblue url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F04%2F80%2F1twUCvZ85i.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612536461&t=7bed628521286fe6619830ac7d676796") ;
    background-repeat: no-repeat;
    background-size: 100% 90%;
    position: relative;
}

.login .login-msg {
    width: 30%;
    height: 60%;
    background-color: white;

    position: absolute;
    top: 10%;
    right: 5%;
}
.login .login-msg .ltop {
    height: 70%;
    width: 100%;
    box-sizing: border-box;
    
    padding: 10% 15%;
}
.login .login-msg .lbottom {
    height: 30%;
    width: 100%;
    border-top: 1px dashed #999;
}

#user_name,
#password {
  width: 100%;
  height: 18%;
  margin-bottom: 15%;
  font-size: 2vh;
   
}


.login .login-msg .tips {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15%;
}

.keep, .forget {
    font-size: 2vh;
}

.login .login-msg .ltop>button {
    width: 100%;
    height: 20%;
    background-color: orangered;
    font-size: 25px;
    color: white;
    border-radius: 5%;
    outline: none;
    border: none;
}

.login .login-msg .lbottom {
    width: 100%;
    height: 20%;
    
}

.login .login-msg .lbottom>h4 {
    margin: 10% 0px 0px 10%
}

</style>