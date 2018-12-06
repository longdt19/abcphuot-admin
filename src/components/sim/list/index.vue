<template>
<section>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Nhà mạng" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.owned}}
      </template>
    </el-table-column>

    <el-table-column label="Số ngày sử dụng" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.day_used}}
      </template>
    </el-table-column>

    <el-table-column label="Giá" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.price}}
      </template>
    </el-table-column>

    <el-table-column label="Thao tác" header-align="center" align="center">
      <template slot-scope="scope">
        <el-button size="mini" type="warning">Sửa</el-button>
        <el-button size="mini" type="danger">Xóa</el-button>
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
export default {
  data () {
    return {
      tableData: [
        {
          owned: 'Name',
          day_used: 7,
          price: 120
        },
        {
          owned: 'Name',
          day_used: 7,
          price: 120
        },
        {
          owned: 'Name',
          day_used: 7,
          price: 120
        }
      ]
    }
  }
}
</script>
