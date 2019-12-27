<template>
  <div class="reader">
    <div class="goback">
      <el-page-header @back="goBack"
                      title="目录">
      </el-page-header>
    </div>
    <h1 v-text="title"></h1>
    <div>
      <mavon-editor v-model="content"
                    previewBackground="#ffffff"
                    :toolbarsFlag="false"
                    :boxShadow="false"
                    :subfield="false"
                    defaultOpen="preview"
                    :shortCut="false"
                    :editable="false"
                    :ishljs="true" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      content: '',
      title: ''
    }
  },
  created () {
    this.detail()
  },
  methods: {
    async detail () {
      this.id = this.$route.params.id
      const { data: res } = await this.$axios.get('springboot/getSpringBootQTdetail/' + this.id)
      if (res.code === 200) {
        this.content = res.data.content
        this.title = res.data.title
      }
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.reader {
  margin-left: 5%;
  margin-right: 5%;
}
h1 {
  color: rgba(0, 0, 0, 0.288);
}
</style>
