<script lang="ts" setup>
import { reactive } from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();

const data = reactive({
  list: [
    { name: '塔吊', normal: 10, warn: 2 },
    { name: '升降机监控', normal: 30, warn: 21 },
    { name: '地磅', normal: 120, warn: 10 },
  ],
});
</script>

<template>
  <div class="block" @click="router.push({name: 'ciscoManage', query: {type: 'house'}})">
    <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
    <img class="title" src="@/assets/设备安全管理@2x.png" alt="" />
    <div class="line"></div>

    <div>
      <div class="title-box">
        <div class="box-item">
          <img src="@/assets/正常设施设备@2x.png" alt="" />
          <div class="count"><span>118</span>个<br />正常设施设备</div>
        </div>
        <div class="box-item" style="margin-right: 80px">
          <img src="@/assets/异常设施设备@2x.png" alt="" />
          <div class="count"><span>11</span>个<br />异常设施设备</div>
        </div>
      </div>
      <div class="content-box">
        <ul>
          <li v-for="(item, i) in data.list" :key="i">
            <div>
              <span class="name">{{ item.name }}</span>
              <span class="normal">正常：{{ item.normal }}</span>
              <span class="warn">异常：{{ item.warn }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.block {
  // flex: 1;
  margin-top: 30px;

  .title {
    width: 100px;
  }
  .title-box {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    div.box-item {
      display: flex;
      justify-content: space-between;
    }

    .count {
      margin-left: 5px;
      color: #97a0a7;
      font-size: 12px;
      span {
        font-size: 28px;
        color: #fff;
        margin-right: 5px;
      }
    }

    img {
      width: 52px;
      height: 52px;
    }
  }
  .content-box {
    // max-height: 25vh;
    overflow: auto;
    color: #97a0a7;
    margin-top: 14px;
    li {
      position: relative;
      margin-bottom: 8px;
      height: 40px;
      line-height: 40px;
      background: linear-gradient(
        94deg,
        rgba(3, 157, 206, 0.2) 0%,
        rgba(3, 157, 206, 0) 100%
      );
      cursor: pointer;

      &::before {
        position: absolute;
        left: 0;
        display: block;
        content: '';
        width: 4px;
        height: 40px;
        background: #00bbff;
      }
      &::after {
        position: absolute;
        top: 0;
        right: 10%;
        display: block;
        content: '';
        width: 10px;
        height: 40px;
        background: url(@/assets/右@2x.png) no-repeat center;
      }

      div {
        display: flex;
        justify-content: space-around;

        .name {
          margin-left: 20px;
          flex: 1;
        }
        .normal {
          flex: 1;
          color: #00bbff;
        }
        .warn {
          margin-right: 50px;
          color: #ff8947;
          flex: 1;
        }
      }
    }
  }
}
</style>
