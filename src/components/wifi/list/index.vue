<template>
<section>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Tên quốc gia" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.country}}
      </template>
    </el-table-column>

    <el-table-column label="Mạng quốc tế" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.internet_name}}
      </template>
    </el-table-column>

    <el-table-column label="Số máy kết nối" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.connection}}
      </template>
    </el-table-column>

    <el-table-column label="Tốc độ download" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.speed_download}}
      </template>
    </el-table-column>

    <el-table-column label="Tốc độ upload" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.speed_upload}}
      </template>
    </el-table-column>

    <el-table-column label="Gói cước dữ liệu" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.information}}
      </template>
    </el-table-column>

    <el-table-column label="Phí đặt cọc" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.prepayment}}
      </template>
    </el-table-column>

    <el-table-column label="Giá thuê 1 ngày" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.price_day}}
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
          country: 'Name',
          internet_name: 7,
          connection: 120,
          speed_download: '20Mbps',
          speed_upload: '7Mbps',
          information: '5000Mb tốc độ 4G, miễn phí tốc độ thấp mỗi ngày',
          prepayment: 800000,
          price_day: 5000000
        },
        {
          country: 'Name',
          internet_name: 7,
          connection: 120,
          speed_download: '20Mbps',
          speed_upload: '7Mbps',
          information: '5000Mb tốc độ 4G, miễn phí tốc độ thấp mỗi ngày',
          prepayment: 800000,
          price_day: 5000000
        },
        {
          country: 'Name',
          internet_name: 7,
          connection: 120,
          speed_download: '20Mbps',
          speed_upload: '7Mbps',
          information: '5000Mb tốc độ 4G, miễn phí tốc độ thấp mỗi ngày',
          prepayment: 800000,
          price_day: 5000000
        }
      ]
    }
  }
}
</script>
