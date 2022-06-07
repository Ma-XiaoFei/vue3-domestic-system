<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const data = reactive({
  list: [
    {
      leval: 'NO.1',
      typeName: '未戴安全帽',
      num: '64起',
    },
    {
      leval: 'NO.1',
      typeName: '未戴安全帽',
      num: '64起',
    },
    {
      leval: 'NO.1',
      typeName: '未戴安全帽',
      num: '64起',
    },
    {
      leval: 'NO.1',
      typeName: '未戴安全帽',
      num: '64起',
    },
    {
      leval: 'NO.1',
      typeName: '未戴安全帽',
      num: '64起',
    },
  ],
});
</script>

<template>
  <div class="safety-accident">
    <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
    <img class="title" src="@/assets/本月安全事故统计@2x.png" alt="" />
    <div class="line"></div>

    <div class="content">
      <div class="tabs-content">
        <ul>
          <li v-for="(item, i) in data.list" :key="i">
            <span class="leval">{{ item.leval }}</span>
            <span>{{ item.typeName }}</span>
            <span>{{ item.num }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.safety-accident {
  padding-top:20px;
  flex: 1.5;
  // height: 0;
  .title {
    width: 150px;
  }

  .content {
    height: 100%;
  }

  .tabs-content {
    height: 100%;
    margin-top: 10px;

    ul {
      height: calc(100% - 25px);
      overflow: auto;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        height: 20%;
        color: #97a0a7;
        font-size: 12px;
       background-color:rgba(3, 157, 206, .1);
        border-bottom: 1px solid rgba(0, 138, 183, 0.2);
        // &:nth-child(odd) {
        //   background: #06192b;
        // }
        // &:nth-child(even) {
        //   background-color: #041322;
        // }

        &:nth-child(1) .leval {
          color: #dc3237;
        }
        &:nth-child(2) .leval,
        &:nth-child(3) .leval {
          color: #00edff;
        }
        &:nth-child(4) .leval,
        &:nth-child(5) .leval {
          color: #009eff;
        }
      }
    }
  }
}
</style>
