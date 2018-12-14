<template>
<el-dialog title="Chỉnh sửa bài viết" :visible.sync="centerDialogVisible" width="85%" center>

  <section>
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
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="edit_post()" :loading='loading'>Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import Tinymce from '../upload/Tinymce'

import {
  POST_URL
} from '@/constants/endpoints'

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
      blog: {},
      formLabelWidth: '120px',
      centerDialogVisible: false,
      loading: false
    }
  },
  methods: {
    open (blog) {
      this.title = blog.name
      this.category = blog.category_id
      this.content = blog.content
      this.blog = blog
      this.centerDialogVisible = true
    },
    async edit_post() {
      if (this.loading) return
      this.loading = true
      const data = {
        'id': this.blog.id,
        'category_id': this.category,
        'content':  this.$refs.tinymce.get_content(),
        'name': this.title
      }
      console.log('data', data)
      const response = await this.$services.do_request('patch', POST_URL, data)
      console.log('response', response)
      this.loading = false

      if (response.status === 200) {
        this.$message.success('Chỉnh sửa bài viết thành công')
        this.$emit('blog_edited')
        this.centerDialogVisible = false
      } else {
        this.$message.error('Chỉnh sửa bài viết thất bại')
      }
    }
  },
  created() {}
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>
