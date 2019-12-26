<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-model="dataList"
                        v-for="item in dataList"
                        :key="item.id"
                        :id="item.id"
                        :timestamp="item.subTime"
                        placement="top"
                        @click.native="opmenBlog(item.id)">
        <el-card>
          <h4>{{item.title}}</h4>
          <p>{{item.name}} 提交于 {{item.titleTime}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: []
    }
  },
  created () {
    this.getTimeLineList()
  },
  methods: {
    async getTimeLineList () {
      const { data: res } = await this.$axios.get('timeline/list')
      if (res.code === 200) {
        this.dataList = res.data
      }
    },
    opmenBlog (id) {
      this.$router.push({
        path: `/timeLineBlogDetail/${id}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
.block {
  padding-right: 20%;
  padding-left: 15%;
}
</style>
