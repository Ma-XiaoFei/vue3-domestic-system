<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed } from 'vue';
import {useRouter} from 'vue-router';
import RealTimeWarning from './RealTimeWarning.vue';
import CiscoManage from './CiscoManage.vue';
import LaborRealName from './LaborRealName.vue';
import LineProgress from '@/components/LineProgress/Index.vue';

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
  <div class="home-page">
    <div class="left">
      <RealTimeWarning />
      <CiscoManage />
      <LaborRealName />
    </div>
    <div class="main-bg">
      <LineProgress :safetyIndex="65"/>
      <div class="tip-box">
        <p>项目状态：施工中</p>
        <p>竣工时间：2023年6月</p>
        <p>建设单位：南部建设管理有限公司</p>
        <p>设计单位：清华美术设计公司</p>
      </div>
    </div>
    <div class="right">
      <!-- 本月安全事故统计 -->
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

      <!-- 视频监控 -->
      <div class="video" @click="router.push({name: 'videoSurveillance',query: {type: 'house'}})">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/视频监控@2x.png" alt="" />
        <div class="line"></div>
        <div class="content">
          <img
            style="width: 100%; margin-top: 10px"
            src="@/assets/位图.png"
            alt=""
          />
        </div>
      </div>

      <div class="announcement">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/最新公告@2x.png" alt="" />
        <div class="line"></div>
        <div class="content">
          <div class="tabs-content">
            <ul>
              <li v-for="i in 4" :key="i">
                <span
                  ><i class="circle"></i>
                  {{ i % 3 === 0 ? '智慧工地新标准' : '工地安全须知' }}
                </span>
                <span>2022/01/2{{ i + 1 }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-page {
  height: 100%;
  overflow: auto;
  display: flex;
  padding: 23px 30px;
  justify-content: space-between;
  background: url(@/assets/BG.png) no-repeat bottom;
  background-size: 100% 100%;
  background-attachment: fixed;
  .main-bg {
    position: relative;

    height: 100%;
    flex: 1.5;
    @media screen and (min-width: 1700px) {
      flex: 2;
    }

    img {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 100%;
    }

    .tip-box {
      position: absolute;
      padding: 31px;
      right: 10%;
      top: 2%;
      color: #fff;
      background: url(@/assets/tipBox@2x.png) no-repeat;
      background-size: 100% 100%;

      @media screen and (max-width: 1600px){
        top: 20%;
      }

      p {
        margin-bottom: 10px;
      }
    }
  }
  .left,
  .right {
    flex: 1;
    // width: 444px;
  }

  .left {
    .rectangular {
      width: 20px;
    }
    .title {
      width: 74px;
    }
    .line {
      position: relative;
      margin-top: 10px;
      // width: 444px;
      height: 1px;
      background-color: #202834;

      &::after {
        content: '';
        position: absolute;
        top: -1px;
        right: 20px;
        width: 10px;
        height: 3px;
        background: #fff;
      }
    }
  }

  .right {
    .safety-accident {
      .title {
        width: 150px;
      }

      .tabs-content {
        margin-top: 10px;
        // max-height: 32vh;
        overflow: auto;
        ul {
          li {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            height: 50px;
            color: #97a0a7;
            line-height: 50px;
            font-size: 12px;
            background: #06192b;
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
    .video{
      cursor: pointer;
    }
    .video,
    .announcement {
      margin-top: 30px;

      .tabs-content {
        margin-top: 10px;
        // max-height: 32vh;
        overflow: auto;

        ul {
          li {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            margin-bottom: 16px;
            height: 50px;
            color: #97a0a7;
            line-height: 50px;
            font-size: 12px;
            background: #06192b;
          }
        }
      }
    }
  }
}

.left,
.right {
  max-width: 1500px;
  width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.circle {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #009eff;
}
</style>
