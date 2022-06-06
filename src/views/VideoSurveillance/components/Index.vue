<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import QueryGroup from '../../../components/QueryGroup/Index.vue';
const tableData = Array.from({ length: 10 }, (t, i) => ({
  date: i + 1,
  name: '社区1-监控摄像头',
  state: '鄞州区中慧东路199号',
  city: '项目1',
  address: '在线'
}));
const data = reactive({
  groups: [
    {
      type: 'input',
      label: '摄像头名称',
      name: 'a',
    },
    {
      type: 'input',
      label: '安装位置',
      name: 'b',
    },
    {
      type: 'select',
      label: '项目名称',
      name: 'c',
    },
    {
      type: 'select',
      label: '离在线状态',
      name: 'd',
    },
  ],
  params: {
    a: '',
    b: '',
    c: '',
    d:''
  },
  dialogTableVisible: false,
});
</script>

<template>
  <QueryGroup :groups="data.groups" v-model="data.params" />

  <el-table stripe :data="tableData" max-height="calc(100vh - 300px)">
    <el-table-column align='center' prop="date" label="序号" />
    <el-table-column prop="name" label="摄像头名称" />
    <el-table-column prop="state" label="安装位置" />
    <el-table-column prop="city" label="项目名称" />
    <el-table-column prop="address" label="离在线状态" />
    <el-table-column label="操作">
      <template #="{ row }">
        <el-button link type="text" @click="data.dialogTableVisible = true"
          >查看</el-button
        >
      </template>
    </el-table-column>
  </el-table>

    <el-pagination
        background
        layout="slot,prev, pager, next"
        :total="199"
        class="mt-4"
      >
        <span class="total-num">共199条</span>
      </el-pagination>

  <el-dialog v-model="data.dialogTableVisible">
    <template #header>
      <div class="modal-header">社区1-监控摄像头</div>
    </template>
    <div class="content">
      <span>工地1-监控摄像头1&nbsp;在线</span>
      <p>安装位置：鄞州区中慧东路199号</p>
      <img src="@/assets/位图@2x.png" alt="">
    </div>
    
  </el-dialog>
</template>

<style lang="less" scoped>
 .content{
   padding:0 50px 20px 50px;
   img{
     margin-top:10px;
     width: 100%;
     height: 100%;
   }
  span{
    color: #FFFFFF;
  }
  
 }
 
</style>
