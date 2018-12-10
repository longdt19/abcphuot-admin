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
    <el-button type="primary" @click="update_sim()" :loading="loading">Xác nhận</el-button>
  </span>
</el-dialog>
</template>

<script>
import { SIM_URL } from '@/constants/endpoints'

export default {
  data () {
    return {
      dialogFormVisible: false,
      owned: '',
      day_used: null,
      price: null,
      formLabelWidth: '120px',
      sim: {},
      loading: false
    }
  },
  methods: {
    open (sim) {
      this.owned = sim.owned
      this.day_used = sim.day_used
      this.price = sim.price
      this.sim = sim
      this.dialogFormVisible = true
    },
    async update_sim () {
      if (this.loading) return
      this.loading = true

      const data = {
        'owned': this.owned,
        'day_used': this.day_used,
        'price': this.price,
        'id': this.sim.id
      }
      const response = await this.$services.do_request('patch', SIM_URL, data)
      this.loading = false
      if (response.status === 200) {
        this.$emit('sim_edited', response.data)
        this.$message.success('Cập nhật sim thành công')
        this.dialogFormVisible = false
      } else {
        this.$message.error('Cập nhật sim thất bại')
      }
    }
  }
}
</script>

<style lang="css">
</style>
