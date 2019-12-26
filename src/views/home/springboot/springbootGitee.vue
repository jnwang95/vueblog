<template>
  <div class="reader">
    <mavon-editor class="aa"
                  v-model="content"
                  previewBackground="#ffffff"
                  :toolbarsFlag="false"
                  :boxShadow="false"
                  :subfield="false"
                  defaultOpen="preview"
                  :shortCut="false"
                  :editable="false"
                  :ishljs="true" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.detail()
  },
  methods: {
    async detail () {
      const { data: res } = await this.$axios.get('springboot/getSpringBootByGitee')
      if (res.code === 200) {
        this.content = res.data.content
      }
    }
  }
}
</script>
<style lang="less" scoped>
.reader {
  margin-left: 15%;
  margin-right: 15%;
}
</style>
