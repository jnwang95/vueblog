<template>
  <div class="reader">
    <mavon-editor class="aa"
                  v-model="value"
                  previewBackground="#ffffff"
                  :toolbarsFlag="false"
                  :boxShadow="false"
                  :subfield="false"
                  defaultOpen="preview"
                  :shortCut="false"
                  :editable="false"
                  :ishljs="true"
                  @imgAdd="$imgAdd"
                  @imgDel="$imgDel" />
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
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      formdata.append('file', $file)
      this.$axios({
        url: '/file/upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        let _res = res.data
        this.$refs.md.$img2Url(pos, _res.data)
      })
    },
    $imgDel (pos) {
      delete this.img_file[pos]
    }
  }
}
</script>
<style lang="less" scoped>
.reader {
  margin-left: 5%;
  margin-right: 5%;
}
</style>
