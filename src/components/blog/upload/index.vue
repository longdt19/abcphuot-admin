<template>
<section>
  <div class="" style="padding-left:50px">
    <el-button @click='upload_post()'>Tải lên</el-button>
  </div>
  <div class="" style="text-align: center">
    <el-upload
    class="avatar-uploader"
    :action="url_action"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
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
import { POST_URL, IMAGE_URL } from '@/constants/endpoints'
import Tinymce from './Tinymce'

export default {
  name: 'TinymceDemo',
  components: {
    Tinymce
  },
  data () {
    return {
      content: '',
      title: '',
      category: '',
      imageUrl: '',
      url_action: '',
      image_id: '',
      formLabelWidth: '120px'
    }
  },
  methods: {
    async upload_post () {
      if (this.loading) return
      this.loading = true
      const data_title = {
        'name': this.title,
        'category_id': this.category,
        'banner': this.image_id
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
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.image_id = file.response.id
    },
    beforeAvatarUpload (file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        this.$message.error('Avatar picture must be JPG and PNG format!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
        return false
      }
      return true
    }
  },
  created () {
    this.url_action = process.env.BACKEND_URL + IMAGE_URL
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
