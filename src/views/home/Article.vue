<template>
  <div>
    <el-row>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>分类</span>
          </div>
          <div v-for="item in caegory"
               :key="item.id"
               :id="item.id"
               class="item">
            <el-badge :value="item.number">
              <el-button @click="showCategory(item.id)">{{item.name}}</el-button>
            </el-badge>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>详情</span>
          </div>
          <div v-if="detail.length == 0">
            支付宝扫一扫？
            <el-image style="width: 100px; height: 100px"
                      :src="require('@/assets/img/IMG_20191227_162126.jpg')"
                      fit="fill"></el-image>
          </div>
          <div v-else>
            <ul>
              <li v-for="item in detail"
                  :id="item.id"
                  :key="item.id"
                  @click="articleDeteil(item.id)">
                <el-link type="primary"
                         :underline="false">
                  <h5>{{item.title}}</h5>
                </el-link>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header"
               class="clearfix">
            <span>标签</span>
          </div>
          <el-tag v-for="item in label"
                  @click="showLabel(item)"
                  :key="item">{{item}}</el-tag>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      caegory: [],
      label: [],
      labelStr: '',
      detail: [],
      id: '',
      url: '../../assets/img/IMG_20191227_162126.jpg'
    }
  },
  created () {
    this.caegorys()
    this.labels()
  },
  methods: {
    async caegorys () {
      const { data: res } = await this.$axios.get('article/caegorys')
      if (res.code === 200) {
        this.caegory = res.data
      }
    },
    async labels () {
      const { data: res } = await this.$axios.get('article/labels')
      if (res.code === 200) {
        this.label = res.data
      }
    },
    async showLabel (labelStr) {
      this.labelStr = labelStr
      const { data: res } = await this.$axios.get('article/showLabel/' + this.labelStr)
      if (res.code === 200) {
        this.detail = res.data
      }
    },
    async showCategory (id) {
      this.id = id
      const { data: res } = await this.$axios.get('article/showCategory/' + this.id)
      if (res.code === 200) {
        this.detail = res.data
      }
    },
    articleDeteil (id) {
      this.$router.push({
        path: `/articledetail/${id}`
      })
    }
  }
}
</script>
<style lang="less" scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.box-card {
  width: 480px;
  margin-left: 10%;
}
.el-tag {
  margin-right: 10px;
  margin-top: 5px;
}
li {
  list-style-type: none;
  height: 20px;
}
.el-tag {
  cursor: pointer;
}
</style>
