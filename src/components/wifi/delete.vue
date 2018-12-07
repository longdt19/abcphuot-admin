<template>
<el-dialog title="Cảnh báo" :visible.sync="centerDialogVisible" width="30%" center>
  <div class="" style="text-align: center">
    <span style="color: red">Sau khi xóa sẽ không thể phục hồi</span>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  data () {
    return {
      centerDialogVisible: false
    }
  },
  methods: {
    open (wifi) {
      this.centerDialogVisible = true
    }
  }
}
</script>

<style lang="css">
</style>
