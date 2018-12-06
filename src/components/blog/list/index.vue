<template>
<section>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Ngày tạo" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.created}}
      </template>
    </el-table-column>

    <el-table-column label="Tiêu đề" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.title}}
      </template>
    </el-table-column>

    <el-table-column label="Thể loại" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.category}}
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
          created: '15/6/2018',
          title: 'title blog',
          category: 'Kinh nghiệm'
        },
        {
          created: '15/6/2018',
          title: 'title blog',
          category: 'Kinh nghiệm'
        },
        {
          created: '15/6/2018',
          title: 'title blog',
          category: 'Kinh nghiệm'
        }
      ]
    }
  }
}
</script>
