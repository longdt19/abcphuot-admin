<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      mode="vertical"
      :show-timeout="200"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >

      <el-menu-item index="SimList" @click.native="go_to('sim-list')">
        <el-tooltip class="item" effect="dark" content="Thống kê chung" placement="right">
        </el-tooltip>
        <span>Danh sách SIM</span>
      </el-menu-item>

      <el-menu-item index="WifiList" @click.native="go_to('wifi-list')">
        <el-tooltip class="item" effect="dark" content="Thống kê chung" placement="right">
        </el-tooltip>
        <span>Danh sách WIFI</span>
      </el-menu-item>

      <el-menu-item index="OrderList" @click.native="go_to('order-list')">
        <el-tooltip class="item" effect="dark" content="Thống kê chung" placement="right">
        </el-tooltip>
        <span>Danh sách Order</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <span>Blog</span>
        </template>
        <el-menu-item index="BlogList" @click.native="go_to('blog-list')">Các bài blog</el-menu-item>
        <el-menu-item index="BlogUpload" @click.native="go_to('blog-upload')">Upload</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: { },
  data () {
    return {
      defaultActive: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
    go_to (path) {
      this.$router.push('/' + path)
    }
  },
  created () {
    this.defaultActive = this.$route.name
  }
}
</script>
<style media="screen">
  #app .hideSidebar .el-submenu > .el-submenu__title {
    text-align: right;
  }
</style>
<style scoped="">
</style>
