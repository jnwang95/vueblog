<template>
  <div class="main_body">
    <!-- springcloud全套学习 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springcloudQT"
                 :body-style="{
            height: '100px'
          }">
          <h3>SpringCloud全套学习</h3>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springcloudGitee"
                 :body-style="{
            height: '100px'
          }">
          <h3>gitee资源</h3>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"
                 @click.native="springcloudGithub"
                 :body-style="{
            height: '100px'
          }">
          <h3>github资源</h3>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    springcloudQT () {
      this.$router.push({ path: '/springcloudQT' })
    },
    springcloudGitee () {
      this.$router.push({ path: '/springcloudGitee' })
    },
    springcloudGithub () {
      this.$router.push({ path: '/springcloudGithub' })
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
