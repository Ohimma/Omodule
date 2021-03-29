<template>
<!-- https://github.com/lin-xin/vue-manage-system  -->
    <div class="login">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>

            <el-form class="ms-content" :model="param" :rules="rules" ref="login" label-width="0px" >
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <template #prepend>
                            <el-button icon="el-icon-user"></el-button>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter="submitForm()"
                    >
                        <template #prepend>
                            <el-button icon="el-icon-lock"></el-button>
                        </template>
                    </el-input>
                </el-form-item>

                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            param: {
                username: "admin",
                password: "123123"
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success("登录成功");
                    localStorage.setItem("ms_username", this.param.username);
                    this.$router.push("/");
                } else {
                    this.$message.error("请输入账号和密码");
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.login {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/login/login04.jpeg");
    background-size: 100%;
}
.login .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 400px;
    /* height: 40%; */
    margin: -170px 0 0 -200px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.login .ms-login  .ms-title {
    width: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}

.login .ms-login .ms-content {
    padding: 30px 30px 20px 30px;
}

.login .ms-login .ms-content .login-btn {
    text-align: center;
}
.login .ms-login .ms-content .login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login .ms-login .ms-content .login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #313131;
}
</style>