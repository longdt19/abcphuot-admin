<template>
<section>
  <div class="">
    <el-button @click="$refs.create_wifi.dialogFormVisible = true">Tạo mới</el-button>
  </div>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Ảnh" header-align="center" align="center">
      <template slot-scope="scope" v-if="scope.row.image" >
        <img :src="scope.row.image" alt="" width="50px">
      </template>
    </el-table-column>

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

    <el-table-column label="Châu lục" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.continent}}
      </template>
    </el-table-column>

    <el-table-column label="Thao tác" header-align="center" align="center">
      <template slot-scope="scope">
        <el-button size="mini" type="warning" @click="$refs.edit_wifi.open(scope.row)">
          Sửa
        </el-button>
        <el-button size="mini" type="danger" @click="$refs.delete_wifi.open (scope.row)">
          Xóa
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="text-align: right; padding-top: 20px">
    <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>

  <create-wifi-component ref="create_wifi" @wifi_created="wifi_created" />
  <edit-wifi-component ref="edit_wifi" @wifi_edited="wifi_edited"/>
  <delete-wifi-component ref="delete_wifi" @wifi_deleted="wifi_deleted"/>
</section>
</template>

<script>
import { WIFI_URL } from '@/constants/endpoints'

import CreateWifiComponent from './create'
import EditWifiComponent from './edit'
import DeleteWifiComponent from './delete'

export default {
  components: {
    CreateWifiComponent,
    EditWifiComponent,
    DeleteWifiComponent
  },
  data () {
    return {
      tableData: [],
      loading: false
    }
  },
  methods: {
    async load_list () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', WIFI_URL)
      this.loading = false
      if (response.status === 200) {
        this.tableData = response.data.result
      }
    },
    wifi_created (wifi) {
      this.tableData.unshift(wifi)
    },
    wifi_edited (wifi) {
      this.load_list()
    },
    wifi_deleted () {
      this.load_list()
    }
  },
  created () {
    this.load_list()
  }
}
</script>
