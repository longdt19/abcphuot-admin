<template>
<el-dialog title="Tạo mới SIM" :visible.sync="dialogFormVisible" width="500px">
  <el-form>
    <el-form-item label="Nhà mạng" :label-width="formLabelWidth">
      <el-input v-model="owned" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Số ngày sử dụng" :label-width="formLabelWidth">
      <el-input v-model="day_used" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Giá" :label-width="formLabelWidth">
      <el-input v-model="price" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      owned: '',
      day_used: null,
      price: null,
      formLabelWidth: '120px'
    }
  },
  methods: {
    open () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="css">
</style>
