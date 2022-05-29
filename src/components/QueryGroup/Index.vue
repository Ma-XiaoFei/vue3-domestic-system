<template>
  <el-form :inline="true" :model="props.groups" class="demo-form-inline">
    <el-form-item
      v-for="item in props.groups"
      :key="item.label"
      :label="item.label"
    >
      <el-select
        v-if="item.type === 'select'"
        @change="(v: string)=> onChange(v,item.name)"
        v-model="formData[item.name]"
        placeholder="请选择"
      >
        <el-option
          v-for="o in item.options"
          :key="o.value"
          :label="o.label"
          :value="o.value"
        ></el-option>
      </el-select>
      <el-input
        v-else
        placeholder="请输入"
        v-model="formData[item.name]"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="onReset">重置</el-button>
      <el-button type="primary" @click="onSubmit">搜索</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { QueryGroupType } from './type';
const form = ref();

const props = defineProps<{
  modelValue?: object;
  groups: QueryGroupType;
  onFinish?(data?: any): void;
  onChange?(v: string, name: string): void;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', data: object): void;
}>();

const formData: any = ref({
  ...props.modelValue,
});

watch(
  () => formData.value,
  () => {
    emit('update:modelValue', formData.value);
  },
  { deep: true }
);

const onSubmit = () => {
  emit('update:modelValue', formData.value);
  props.onFinish && props.onFinish(formData.value);
};

const onReset = () => {
  formData.value = {};
  emit('update:modelValue', {});
  props.onFinish && props.onFinish({});
};

const onChange = (v: string, name: string) => {
  props.onChange && props.onChange(v, name);
};
</script>
