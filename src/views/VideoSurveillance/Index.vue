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
      <img src="@/assets/视频监控@2x.png" alt="" />
    </div>
    <div>
      <QueryComponent />
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
