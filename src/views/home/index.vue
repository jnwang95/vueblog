<template>
  <div>
    <el-container>
      <!-- 页眉 -->
      <el-header height="80px">
        <el-card class="header-card">
          <div class="header">
            <el-row>
              <el-col :span="18">
                <div>
                  <el-menu default-active="home"
                           mode="horizontal"
                           text-color="#409eff"
                           active-text-color="#42b983"
                           :router="true">
                    <el-menu-item index="/home">HOME</el-menu-item>
                    <el-menu-item index="/springboot">SPRINGBOOT</el-menu-item>
                    <el-menu-item index="/springcloud">SPRINGBCLOUD</el-menu-item>
                    <el-menu-item index="/article">ARTICLE</el-menu-item>
                    <el-menu-item index="/timeline">TIMELINE</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">COLLECTION</template>
                      <el-menu-item index="/webpage">WEBPAGE</el-menu-item>
                    </el-submenu>
                  </el-menu>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="flexRight">
                  <el-input placeholder="请输入内容">
                    <el-button slot="append"
                               icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-header>
      <!-- 主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
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

<style>
.el-header {
  color: #333;
  text-align: center;
}

.el-main {
  margin-top: 10px;
  padding: 0;
}

.el-input {
  float: right;
}

.header {
  width: 100%;
  height: 100%;
}
.el-menu-item,
.el-submenu__title {
  font-size: 18px;
}
.header-card {
  width: 100%;
  height: 80px;
}
</style>
