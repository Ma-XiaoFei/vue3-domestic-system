<script setup lang="ts">
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <LayoutHeader />
      </el-header>
      <div id="content-main">
        <el-main>
          <LayoutMain />
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  .el-header {
    height: 80px;
    padding: 0;
  }
  .el-main {
    padding: 0;
    height: calc(100vh - 80px);
  }
}
</style>
