<template>
<section>
  <div class="" style="padding-left:50px">

    <el-button @click='upload_post()'>Tải lên</el-button>
  </div>
  <div class="" style="padding-top: 20px; padding-left:50px">
    <el-form>
      <el-form-item label="Tiêu đề" :label-width="formLabelWidth">
        <el-input v-model="title" autocomplete="off" style="width: 70%"></el-input>
      </el-form-item>
      <el-form-item label="Thể loại" :label-width="formLabelWidth">
        <el-select v-model="category" placeholder="Chọn thể loại">
          <el-option label="Kinh nghiệm" value="experience"></el-option>
          <el-option label="Cảm nhận" value="feeling"></el-option>
          <el-option label="Địa điểm" value="place"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>

  <div class="components-container">
    <div>
      <tinymce ref='tinymce' :height="300" v-model="content" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</section>
</template>

<script>
import { POST_URL } from '@/constants/endpoints'
import Tinymce from './Tinymce'

export default {
  name: 'TinymceDemo',
  components: {
    Tinymce
  },
  data() {
    return {
      content: '',
      title: '',
      category: '',
      formLabelWidth: '120px'
    }
  },
  methods: {
    async upload_post () {
      if (this.loading) return
      this.loading = true
      const data_title = {
        'name': this.title,
        'category_id': this.category
      }
      const res_title = await this.$services.do_request('post', POST_URL, data_title)

      if (res_title.status === 200) {
        this.$message.success('Khởi tạo bài viết thành công')
        const data_upload_content = {
          'id': res_title.data.id,
          'content': this.$refs.tinymce.get_content()
        }
        const resp_content = await this.$services.do_request('patch', POST_URL, data_upload_content)
        this.loading = false

        if (resp_content.status === 200) {
          this.$message.success('Tải bài viết lên thành công')
          this.$router.push('/blog-list')
        } else {
          this.$message.error('Tải bài viết lên thất bại')
        }
      } else {
        this.$message.error('Khởi tạo bài viết thất bại')
      }
    }
  },
  created() {
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
