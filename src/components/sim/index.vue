<template>
<section>
  <div class="">
    <el-button @click="$refs.create_sim.dialogFormVisible = true">Tạo mới</el-button>
  </div>

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
        <el-button size="mini" type="warning"
          @click="$refs.edit_sim.open(scope.row)"
        >
          Sửa
        </el-button>
        <el-button size="mini" type="danger"
          @click="$refs.delete_sim.open(scope.row)"
        >
          Xóa
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block" style="text-align: right; padding-top: 20px">
    <el-pagination layout="prev, pager, next" :total="50">
    </el-pagination>
  </div>
  <create-sim-component ref="create_sim" @sim_created="sim_created"/>
  <edit-sim-component ref="edit_sim"  @sim_edited="sim_edited"/>
  <delete-sim-component ref="delete_sim" @sim_deleted="sim_deleted"/>
</section>
</template>

<script>
import { SIM_URL } from '@/constants/endpoints'

import CreateSimComponent from './create'
import EditSimComponent from './edit'
import DeleteSimComponent from './delete'

export default {
  components: { CreateSimComponent, EditSimComponent, DeleteSimComponent },
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
      const response = await this.$services.do_request('get', SIM_URL)
      this.loading = false
      if (response.status === 200) {
        this.tableData = response.data.result
      }
    },
    sim_created (sim) {
      this.tableData.unshift(sim)
    },
    sim_edited (sim) {
      this.load_list()
    },
    sim_deleted (sim) {
      this.load_list()
    }
  },
  created () {
    this.load_list()
  }
}
</script>
