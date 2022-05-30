<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import QueryGroup from '../../../components/QueryGroup/Index.vue';
const tableData = Array.from({ length: 10 }, (t, i) => ({
  date: i + 1,
  name: '车辆识别1号',
  state: '鄞州区中惠东路199号-东门',
  city: '项目',
  address: '在线',
  zip: '正常',
}));
const tableDataDetail = Array.from({ length: 10 }, (t, i) => ({
  a: i + 1,
  b: 'xxxx',
  c: '卡车',
  d: '1.22',
  e: '驶入',
  f: '2022-06-01 12:00:00',
}));
const data = reactive({
  groups: [
    {
      type: 'input',
      label: '地磅名称',
      name: 'a',
    },
    {
      type: 'select',
      label: '项目名称',
      name: 'b',
    },
    {
      type: 'select',
      label: '离在线状态',
      name: 'c',
    },
  ],
  params: {
    a: '',
    b: '',
    c: '',
  },
  dialogTableVisible: false,
});
</script>

<template>
  <QueryGroup :groups="data.groups" v-model="data.params" />

  <el-table stripe :data="tableData" max-height="calc(100vh - 300px)">
    <el-table-column prop="date" label="序号" />
    <el-table-column prop="name" label="车辆识别" />
    <el-table-column prop="state" label="位置（GPS定位）" />
    <el-table-column prop="city" label="项目名称" />
    <el-table-column prop="address" label="离在线状态" />
    <el-table-column prop="zip" label="报警状态" />
    <el-table-column label="操作">
      <template #="{ row }">
        <el-button link type="text" @click="data.dialogTableVisible = true"
          >查看</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="data.dialogTableVisible">
    <template #header>
      <div class="modal-header">车辆识别1号详情</div>
    </template>
    <el-table :data="tableDataDetail" max-height="50vh">
      <el-table-column property="a" label="序号" />
      <el-table-column property="b" label="车辆牌照" />
      <el-table-column property="c" label="车辆识别" />
      <el-table-column property="d" label="重量（吨）" />
      <el-table-column property="e" label="进出状态" />
      <el-table-column property="f" label="出入时间" />
    </el-table>
    <div>
      <el-pagination
        background
        layout="slot,prev, pager, next"
        :total="50"
        class="mt-4"
      >
        <span class="total-num">共50条</span>
      </el-pagination>
    </div>
  </el-dialog>
</template>

<style lang="less" scoped></style>
