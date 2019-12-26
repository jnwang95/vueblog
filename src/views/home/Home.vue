<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel :interval="4000"
                 type="card"
                 height="500px">
      <el-carousel-item v-for="item in 6"
                        :key="item">
      </el-carousel-item>
    </el-carousel>
    <!-- 卡片-->
    <div class="content">
      <el-row :gutter="10">
        <el-col :span="6"
                v-model="value"
                v-for="item in value"
                :key="item.id"
                @click.native="detail(item.id)"
                :id="item.id">
          <el-card shadow="hover">
            <img :src="item.img"
                 class="image">
            <div style="padding: 14px;">
              <span>{{item.title}}</span>
              <div>
                <span>{{item.subTitle}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-pagination layout="prev, pager, next"
                   :page-size="16"
                   :total="total"
                   @prev-click="prev"
                   @next-click="next">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: [],
      total: 0,
      pageNum: 1
    }
  },
  created () {
    this.getBlogs()
  },
  methods: {
    async getBlogs () {
      const { data: res } = await this.$axios.get('index/getBLogs/' + this.pageNum)
      if (res.code === 200) {
        this.value = res.data.data
        this.total = res.data.total
      }
    },
    prev () {
      this.pageNum--
      this.getBlogs()
    },
    next () {
      this.pageNum++
      this.getBlogs()
    },
    detail (id) {
      this.$router.push({
        path: `/blogdetail/${id}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
.el-menu-item {
  font-size: 20px;
}

.el-carousel__item {
  background-image: url('../../assets/img/67V58PICtyp.jpg');
}

.content {
  width: 80%;
  margin-left: 10%;
}
.el-pagination {
  margin-left: 45%;
}

.el-card {
  margin-bottom: 20px;
  height: 450px;
}
img {
  height: 300px;
}
</style>
