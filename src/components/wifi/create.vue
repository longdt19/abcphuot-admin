<template>
<el-dialog title="Tạo mới SIM" :visible.sync="dialogFormVisible" width="80%">
  <el-form>
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
    <el-row>
    <el-col :span="12">
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
    </el-col>

    <el-col :span="12">
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
        <el-select v-model="continent" placeholder="Chọn châu lục">
          <el-option label="Châu Á" value="asian"></el-option>
          <el-option label="Châu Âu" value="eroupe"></el-option>
          <el-option label="Khác" value="other"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-row>

  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="create_wifi" :loading="loading">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import { WIFI_URL, IMAGE_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      dialogFormVisible: false,
      loading: false,
      country: '',
      internet_name: '',
      connection: null,
      speed_download: '',
      speed_upload: '',
      information: '',
      prepayment: null,
      price_day: null,
      image_id: '',
      continent: '',
      formLabelWidth: '120px',
      imageUrl: ''
    }
  },
  methods: {
    open () {
      this.dialogFormVisible = true
    },
    async create_wifi () {
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
        'image_id': this.image_id,
        'continent': this.continent
      }
      const response = await this.$services.do_request('post', WIFI_URL, data)
      this.loading = false

      if (response.status === 200) {
        this.$emit('wifi_created', response.data)
        this.$message.success('Tạo wifi thành công')
        this.dialogFormVisible = false
      } else {
        this.$message.error('Tạo wifi thất bại')
      }
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.image_id = file.response.id
      console.log('image_id', this.image_id)
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

<style scoped="">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
