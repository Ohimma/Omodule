<template>
  <div class="login02">
    <div class="login-msg">
      <div class="title">
        <img src="../../assets/img/login/login02_logo.png" alt="">
        <span>登录页面翻版</span>
      </div>
      <!-- 
        :model指定表单使用的数据 :rules进行表单校验规则 ref是提交的对象名字
        prop表单校验的属性
        input 绑定的元素必须是model的直接属性 
        prefix 左边 suffix 右边 clearable 删除所有输入 
        :loading  true时会转圈加载 false时正常
        status-icon 添加校验结果反馈显示图标
      -->
      <el-form :model="loginData" :rules="loginDataRules" ref="loginForm">
        <el-form-item prop="account">
          <el-input type="text" 
            v-model="loginData.account" 
            prefix-icon="el-icon-user" 
            placeholder="请输入用户名"
            tabindex="1"
            auto-complete="on">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginData.password"
            type="password"
            placeholder="请输入密码"  
            prefix-icon="el-icon-unlock"
            clearable show-password
            
            
            auto-complete="on">
          </el-input>
        </el-form-item>
        <!-- @keyup.enter="loginBtn" -->
        <!-- @click.prevent="loginBtn" -->
        <el-form-item>
          <el-button 
            type="primary"
            :loading="loading" 
            >登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
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
      loginDataRules: {
        account: [{required: true, message: '请输入用户名', trigger: 'change'}],
        password: [{required: true, message: '请输入密码', trigger: 'change'}]
      },
      loading: false,
    }
  },
 
}
</script>

<style scoped>
.login02 {
  height: 100%;
  width: 100%;

  background-size: 100%;
  overflow: hidden;
  background: #11255A url('../../assets/img/login/login02.png') no-repeat center bottom;


  display: flex;
  justify-content: center;
  align-items: center;
}
.login02 .login-msg {
    width: 27%;
}
.login02 .login-msg .title {
    width: 100%;
    height: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 5%;
}
.login02 .login-msg .title img {
    width: 40px;
    height: 40px;
}
.login02 .login-msg .title span {
  font-size: 20px;
  line-height: 50px;
  color: #FFFFFF;
  margin: 0px 10px;
}

.el-button {
  width: 100%;
  height: 40px;
  margin-top: 25px;
  
  background: #204CC0;
  border: 0;
  border-radius: 4px;

  color: #fff;
  font-size: 20px;
}
.el-button:hover,
.el-button.is-fouse {
  background: #4d73da;
} 

</style>

<style >
.login02  .el-form .el-input__inner {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #fff;
  padding-left: 40px;

  font-size: 17px;
  letter-spacing: 2px;
  color: #fff;
  font-family: "MingLiu";
}
</style>