<template>
  <div class="main_body">
    <!-- springboot全套学习 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springbootQT"
                 :body-style="{
            height: '100px'
          }">
          <h3>SpringBoot全套学习</h3>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springbootGitee"
                 :body-style="{
            height: '100px'
          }">
          <h3>gitee资源</h3>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springbootGithub"
                 :body-style="{
            height: '100px'
          }">
          <h3>github资源</h3>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springbootThird"
                 :body-style="{
            height: '100px'
          }">
          <h3>SpringBoot整合第三方框架</h3>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '### test'
    }
  },
  methods: {
    springbootQT () {
      this.$router.push({ path: '/springbootQT' })
    },
    springbootGitee () {
      this.$router.push({ path: '/springbootGitee' })
    },
    springbootGithub () {
      this.$router.push({ path: '/springbootGithub' })
    },
    springbootThird () {
      this.$router.push({ path: '/springbootThird' })
    }
  }
}
</script>

<style lang="less" scoped>
.main_body {
  padding-left: 5%;
  padding-right: 5%;
}
.el-col {
  margin-bottom: 10px;
}
</style>
