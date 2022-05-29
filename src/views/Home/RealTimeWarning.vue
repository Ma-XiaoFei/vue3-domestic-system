<script setup lang="ts">
import { onMounted, reactive } from 'vue';

const data = reactive({
  flag: 0,
  warnList: [
    {
      id: 1,
      type: '环境预警',
      time: '10:10:00',
      leval: 'A级风险',
    },
    {
      id: 2,
      type: '质量预警',
      time: '09:10:00',
      leval: 'B级风险',
    },
    {
      id: 3,
      type: '安全预警',
      time: '08:10:00',
      leval: 'C级风险',
    },
    {
      id: 4,
      type: '环境预警',
      time: '07:10:00',
      leval: 'D级风险',
    },
  ],
  titleList: ['安全预警', '质量预警', '环境预警', '设备预警'],
});
const isClick = (i: number) => {
  data.flag = i;
};
</script>

<template>
  <div class="time-warn">
    <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
    <img class="title" src="@/assets/实时预警备份@2x.png" alt="" />
    <div class="line"></div>

    <div class="content">
      <ul class="tabs">
        <li
          @click="isClick(index)"
          :class="{ active: data.flag == index }"
          v-for="(item, index) in data.titleList"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
      <div class="tabs-content">
        <ul>
          <li>
            <span>预警类型</span>
            <span>发生时间</span>
            <span>风险等级</span>
          </li>
          <li v-for="item in data.warnList" :key="item.id">
            <span>{{ item.type }}</span>
            <span>{{ item.time }}</span>
            <span>{{ item.leval }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

.time-warn {
  // flex: 1;
  // height: 0;
  // overflow: auto;
}
.content {
  height: 100%;
  .tabs {
    max-width: 500px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    li {
      cursor: pointer;
      width: 108px;
      height: 40px;
      line-height: 40px;
      background: rgba(1, 19, 84, 0.46);
      color: #97a0a7;
      text-align: center;
      border: 1px solid #66ffff;
    }
    li.active {
      color: #66ffff;
      box-shadow: inset 0px 0px 12px 0px rgba(102, 255, 255, 0.98);
    }
  }

  .tabs-content {
    margin-top: 10px;
    // max-height: 25vh;
    overflow: auto;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        padding: 0 30px;
        height: 40px;
        color: #97a0a7;
        line-height: 40px;
        &:nth-child(odd) {
          background: #06192b;
        }
        &:nth-child(even) {
          background-color: #041322;
        }
      }
    }
  }
}
</style>
