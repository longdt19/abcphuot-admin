<template>
<el-dialog title="Tạo mới SIM" :visible.sync="dialogFormVisible" width="500px">
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

    <el-form-item label="Nhà mạng" :label-width="formLabelWidth">
      <el-input v-model="owned" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Số ngày sử dụng" :label-width="formLabelWidth">
      <el-input v-model="day_used" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Giá" :label-width="formLabelWidth">
      <el-input v-model="price" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="Quốc gia" :label-width="formLabelWidth">
      <el-input v-model="country" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Hủy bỏ</el-button>
    <el-button type="primary" @click="create_sim()" :loading="loading">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import { SIM_URL, IMAGE_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      dialogFormVisible: false,
      owned: '',
      day_used: null,
      price: null,
      country: '',
      imageUrl: '',
      url_action: '',
      image_id: '',
      formLabelWidth: '120px',
      loading: false
    }
  },
  methods: {
    open () {
      this.dialogFormVisible = true
    },
    async create_sim () {
      if (this.loading) return
      this.loading = true
      const data = {
        'owned': this.owned,
        'day_used': this.day_used,
        'price': this.price,
        'country': this.country,
        'image_id': this.image_id
      }
      const response = await this.$services.do_request('post', SIM_URL, data)
      this.loading = false
      if (response.status === 200) {
        this.$emit('sim_created', response.data)
        this.$message.success('Tạo sim thành công')
        this.dialogFormVisible = false
      } else {
        this.$message.error('Tạo sim thất bại')
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
