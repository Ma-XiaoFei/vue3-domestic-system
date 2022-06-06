<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import QueryComponent from './components/Index.vue';
const data = reactive({
  active: '2',
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
  console.log(data.active);
};
</script>

<template>
  <div class="cisco-manage">
    <div class="title">
      <img src="@/assets/设备安全管理@2x.png" alt="" />
    </div>
    <div>
      <el-tabs
        v-model="data.active"
        type="card"
        class="demo-tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="视频监控125" name="1">
          <QueryComponent />
        </el-tab-pane>
        <el-tab-pane label="车辆识别25" name="2">
          <QueryComponent
        /></el-tab-pane>
        <el-tab-pane label="智慧用电30" name="3">
          <QueryComponent />
        </el-tab-pane>
        <el-tab-pane label="智慧用水15" name="4">
          <QueryComponent
        /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="less" scoped>
.cisco-manage {
  padding: 40px 72px 0;
}

.title {
  margin-bottom: 10px;
  img {
    // width: 18%;
  }
}
</style>
