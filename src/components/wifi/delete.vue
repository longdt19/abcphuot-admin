<template>
<el-dialog title="Cảnh báo" :visible.sync="centerDialogVisible" width="30%" center>
  <div class="" style="text-align: center">
    <span style="color: red">Sau khi xóa sẽ không thể phục hồi</span>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="delete_wifi()" :loading="loading">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import { WIFI_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      wifi: {},
      loading: false,
      centerDialogVisible: false
    }
  },
  methods: {
    open (wifi) {
      this.wifi = wifi
      this.centerDialogVisible = true
    },
    async delete_wifi () {
      if (this.loading) return
      this.loading = true
      const data = {
        'id': this.wifi.id
      }
      const response = await this.$services.do_request('delete', WIFI_URL, data)
      this.loading = false
      if (response.status === 200) {
        this.$emit('wifi_deleted')
        this.$message.success('Xóa wifi thành công')
        this.centerDialogVisible = false
      } else {
        this.$message.error('Xóa wifi thất bại')
      }
    }
  }
}
</script>

<style lang="css">
</style>
