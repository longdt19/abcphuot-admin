<template>
<section>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Ngày tạo" header-align="center" align="center">
      <template slot-scope="scope">
        {{formatDate(scope.row.created_at)}}
      </template>
    </el-table-column>

    <el-table-column label="Tiêu đề" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.name}}
      </template>
    </el-table-column>

    <el-table-column label="Thể loại" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.category_id}}
      </template>
    </el-table-column>

    <el-table-column label="Nội dung" header-align="center" align="center">
      <template slot-scope="scope">
        {{scope.row.content === null ? 'Chưa có' : 'Đã có'}}
      </template>
    </el-table-column>

    <el-table-column label="Thao tác" header-align="center" align="center">
      <template slot-scope="scope">
        <el-button size="mini" type="warning"
          @click='edit_blog(scope.row)'
        >
          Sửa
        </el-button>
        <el-button size="mini" type="danger"
          @click="delete_blog(scope.row)"
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
  <edit-blog-component ref='edit_blog' @blog_edited='blog_edited' />
  <delete-blog-component ref='delete_blog' @blog_deleted='blog_deleted' />
</section>
</template>

<script>
import { LIST_POSTS_URL } from '@/constants/endpoints'
import formatDate from '@/utils/formatDate'
import EditBlogComponent from './edit'
import DeleteBlogComponent from './delete'

export default {
  components: {
    EditBlogComponent,
    DeleteBlogComponent
  },
  data () {
    return {
      tableData: [],
      loading: false
    }
  },
  methods: {
    formatDate,
    edit_blog (blog) {
      this.$refs.edit_blog.open(blog)
    },
    delete_blog (blog) {
      this.$refs.delete_blog.open(blog)
    },
    blog_edited () {
      this.get_list_posts()
    },
    blog_deleted () {
      this.get_list_posts()
    },
    async get_list_posts () {
      if (this.loading) return
      this.loading = true
      const response = await this.$services.do_request('get', LIST_POSTS_URL)
      this.loading = false

      if (response.status === 200) {
        this.dialogFormVisible = false
        this.tableData = response.data.result
      } else {
        this.$message.error('Lấy danh sách các bài viết thất bại')
      }
    }
  },
  created () {
    this.get_list_posts()
  }
}
</script>
