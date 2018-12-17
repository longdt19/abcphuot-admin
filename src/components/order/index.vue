<template>
<section>
  <el-table :data="tableData" style="width: 100%">

    <el-table-column label="Ngày tạo" header-align="center" align="center">
      <template slot-scope="scope">
        {{formatDate(scope.row.created_at)}}
      </template>
    </el-table-column>

    <el-table-column label="Ngày sửa" header-align="center" align="center">
      <template slot-scope="scope">
        {{formatDate(scope.row.updated_at)}}
      </template>
    </el-table-column>

    <el-table-column label="Sản phẩm" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.product_name}}
      </template>
    </el-table-column>

    <el-table-column label="Số lượng" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.quantity}}
      </template>
    </el-table-column>

    <el-table-column label="Điện thoại" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.phone}}
      </template>
    </el-table-column>

    <el-table-column label="Email" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.email}}
      </template>
    </el-table-column>

    <el-table-column label="Địa chỉ" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.address}}
      </template>
    </el-table-column>

    <el-table-column label="Chú thích" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.description}}
      </template>
    </el-table-column>

    <el-table-column label="Trạng thái" header-align="center" align="center">
      <template slot-scope="scope">
        <el-button size="mini" type="warning">
          test6
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="text-align: right; padding-top: 20px">
    <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
</section>
</template>

<script>
import { ORDER_URL } from '@/constants/endpoints'
import formatDate from '@/utils/formatDate'

export default {
  data () {
    return {
      tableData: [],
      loading: false
    }
  },
  methods: {
    formatDate,
    async get_order_list () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', ORDER_URL)
      this.loading = false
      console.log('response', response)
      if (response.status === 200) {
        this.tableData = response.data.result
      } else {
        this.$message.error('Lấy danh sách order thất bại')
      }
    }
  },
  created () {
    this.get_order_list()
  }
}
</script>
