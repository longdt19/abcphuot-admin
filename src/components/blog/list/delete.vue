<template>
<el-dialog title="Cảnh báo" :visible.sync="centerDialogVisible" width="30%" center>
  <div class="" style="text-align: center">
    <span style="color: red">Sau khi xóa sẽ không thể phục hồi</span>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="delete_sim" :loading="loading">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import { POST_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      blog: {},
      centerDialogVisible: false,
      loading: false
    }
  },
  methods: {
    open (blog) {
      console.log('blog', blog)
      this.blog = blog
      this.centerDialogVisible = true
    },
    async delete_sim () {
      if (this.loading) return
      this.loading = true
      const data = {
        'id': this.blog.id
      }
      const response = await this.$services.do_request('delete', POST_URL, data)
      this.loading = false
      if (response.status === 200) {
        this.$emit('blog_deleted')
        this.$message.success('Xóa blog thành công')
        this.centerDialogVisible = false
      } else {
        this.$message.error('Xóa blog thất bại')
      }
    }
  }
}
</script>

<style lang="css">
</style>
