<template>
  <div>
    <ul>
      <li v-for="item in menuList"
          :id="item.id"
          :key="item.id"
          @click="springbootQTdeteil(item.id)">
        <el-link type="primary"
                 :underline="false">
          <h4>{{item.title}}</h4>
        </el-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuList: []
    }
  },
  created () {
    this.menu()
  },
  methods: {
    async menu () {
      const { data: res } = await this.$axios.get('springcloud/getSpringCloudQT')
      if (res.code === 200) {
        this.menuList = res.data
      }
    },
    springbootQTdeteil (id) {
      this.$router.push({
        path: `/springcloudQTdetail/${id}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
.el-link {
  font-size: 20px;
}
li {
  list-style-type: none;
  line-height: 15px;
}
ul {
  margin-left: 30%;
}
</style>
