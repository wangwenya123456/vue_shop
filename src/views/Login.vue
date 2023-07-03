<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 图标部分 -->
      <div class="avatar-box">
        <img src="@/assets/logo.png" />
      </div>
      <!-- 表单部分 -->
      <el-form class="login_form" :model="loginForm">
        <!-- 用户名 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-person" v-model="loginForm.userName"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-password" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="loginSuc()">登录</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: '',
      },
    }
  },
  methods: {
    loginSuc() {
      window.sessionStorage.setItem('loginToken', 'loginToken1111');
      this.$message({
        message: '登录成功',
        type: 'success'
      });
      this.$router.push('/home');
    },
  }
};
</script>
<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #fff;
  position: relative;

  .avatar-box {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>

