<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import QueryGroup from '../../../components/QueryGroup/Index.vue';
const tableData = Array.from({length: 10}, (t,i)=> ({
    date: i+1,
    name: '地磅'+i,
    state: '北京市朝阳区望京东路123',
    city: '项目1',
    address: '在线',
    zip: '正常',
  }));
const data = reactive({
    groups: [
        {
            type: 'input',
            label: '地磅名称',
            name: 'a'
        },
        {
            type: 'select',
            label: '项目名称',
            name: 'b'
        },
        {
            type: 'select',
            label: '离在线状态',
            name: 'c'
        },
    ],
    params: {
        a: '',
        b: '',
        c: ''
    }
});
</script>

<template>
  <QueryGroup :groups="data.groups" v-model="data.params" />

  <el-table stripe :data="tableData" style="width: 100%" height="200">
    <el-table-column prop="date" label="序号" />
    <el-table-column prop="name" label="地磅名称" />
    <el-table-column prop="state" label="位置（GPS定位）" />
    <el-table-column prop="city" label="项目名称" />
    <el-table-column prop="address" label="离在线状态" />
    <el-table-column prop="zip" label="报警状态" />
    <el-table-column label="操作" width="120">
        <template #="{row}">
            <a>查看</a>
        </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped></style>
