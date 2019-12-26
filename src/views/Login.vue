<template>
<!-- 背景 -->
  <div class="login_back">
    <!-- logo -->
    <div class="logo">
      <img src="../assets/logo.png" />
      <span>康购商城后端平台</span>
    </div>
    <!-- 主体 -->
    <div class="login_box">
      <i class="el-icon-user-solid">用户登录</i>
      <div class="demo-input-suffix">
      <el-input
        placeholder="账号" >
        <i slot="prefix" class="el-input__icon el-icon-user"></i>
      </el-input>
        <el-input
        placeholder="密码" >
        <i slot="prefix" class="el-input__icon el-icon-3702mima"></i>
      </el-input>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.login_back {
  background-color: #bbe6d6;
  height: 100%;
}
.logo {

  img {
    margin-top: 10px;
    margin-left: 10px;
    height: 40px;
    width: 40px;
  }
  span {
    font-size: 20px;
    line-height: 27px;
    font-weight: 1000;
  }
}
.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    padding-left: 10px;
    padding-top: 10px;
}
</style>
