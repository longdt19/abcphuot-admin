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
          @click="$refs.delete_sim.open()"
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
  <create-sim-component ref="create_sim" />
  <edit-sim-component ref="edit_sim" />
  <delete-sim-component ref="delete_sim" />
</section>
</template>

<script>
import CreateSimComponent from './create'
import EditSimComponent from './edit'
import DeleteSimComponent from './delete'

export default {
  components: { CreateSimComponent, EditSimComponent, DeleteSimComponent },
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
  },
  methods: {
  }
}
</script>
