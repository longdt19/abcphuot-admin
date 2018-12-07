<template>
<el-dialog title="Tạo mới SIM" :visible.sync="dialogFormVisible" width="500px">
  <el-form>
    <el-form-item label="Tên quốc gia" :label-width="formLabelWidth">
      <el-input v-model="country" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Mạng quốc tế" :label-width="formLabelWidth">
      <el-input v-model="internet_name" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Số máy kết nối" :label-width="formLabelWidth">
      <el-input v-model="connection" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Tốc độ download" :label-width="formLabelWidth">
      <el-input v-model="speed_download" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Tốc độ upload" :label-width="formLabelWidth">
      <el-input v-model="speed_upload" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Gói cước dữ liệu" :label-width="formLabelWidth">
      <el-input v-model="information" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Phí đặt cọc" :label-width="formLabelWidth">
      <el-input v-model="prepayment" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Giá thuê 1 ngày" :label-width="formLabelWidth">
      <el-input v-model="price_day" autocomplete="off"></el-input>
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
      country: '',
      internet_name: '',
      connection: null,
      speed_download: '',
      speed_upload: '',
      information: '',
      prepayment: null,
      price_day: null,
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
