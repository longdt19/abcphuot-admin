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

    <el-form-item label="Châu lục" :label-width="formLabelWidth">
      <el-input v-model="continent" autocomplete="off"></el-input>
    </el-form-item>

  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="edit_wifi" :loading="loading">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import { WIFI_URL } from '@/constants/endpoints'

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
      continent: '',
      formLabelWidth: '120px',
      wifi: {},
      loading: false
    }
  },
  methods: {
    open (wifi) {
      this.wifi = wifi
      this.continent = wifi.continent
      this.country = wifi.country
      this.internet_name = wifi.internet_name
      this.connection = wifi.connection
      this.speed_download = wifi.speed_download
      this.speed_upload = wifi.speed_upload
      this.information = wifi.information
      this.prepayment = wifi.prepayment
      this.price_day = wifi.price_day
      this.dialogFormVisible = true
    },
    async edit_wifi () {
      if (this.loading) return
      this.loading = true

      const data = {
        'country': this.country,
        'internet_name': this.internet_name,
        'connection': this.connection,
        'speed_download': this.speed_download,
        'speed_upload': this.speed_upload,
        'information': this.information,
        'prepayment': this.prepayment,
        'price_day': this.price_day,
        'id': this.wifi.id,
        'continent': this.continent
      }
      const response = await this.$services.do_request('patch', WIFI_URL, data)
      this.loading = false

      if (response.status === 200) {
        this.$emit('wifi_edited', response.data)
        this.$message.success('Cập nhật wifi thành công')
        this.dialogFormVisible = false
      } else {
        this.$message.error('Cập nhật wifi thất bại')
      }
    }
  }
}
</script>

<style lang="css">
</style>
