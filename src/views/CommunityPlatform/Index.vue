<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed } from 'vue';
import SafetyAnalysis from './SafetyAnalysis.vue';
import SafetyAccident from './SafetyAccident.vue';
import VideoSurveillance from './VideoSurveillance.vue';
import LineProgress from '@/components/LineProgress/Index.vue';
import CircularProgress from '@/components/CircularProgress/Index.vue';

const data = reactive({
  list: [
    {
      leval: '①',
      typeName: '电梯设备巡检',
      num: '已完成',
    },
    {
      leval: '②',
      typeName: '1号楼消防巡检',
      num: '已完成',
    },
    {
      leval: '③',
      typeName: '2号楼消防巡检',
      num: '已完成',
    },
    {
      leval: '4',
      typeName: '车库防水巡检',
      num: '未完成',
    },
    {
      leval: '5',
      typeName: '岗亭巡检',
      num: '未完成',
    },
  ],
  safetyEquipmentList: [
    { type: '人脸识别', total: '89/个', error: '23/个', offline: '5/个' },
    { type: '用电监测', total: '89/个', error: '23/个', offline: '5/个' },
    { type: '用水监测', total: '89/个', error: '23/个', offline: '5/个' },
    { type: '视频监测', total: '89/个', error: '23/个', offline: '5/个' },
  ],
});
</script>

<template>
  <div class="home-page">
    <div class="left">
      <!-- 安全指数分析 -->

      <div style="flex: 1.5; height: 0">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img
          class="title"
          style="width: 120px"
          src="@/assets/安全指数分析@2x.png"
          alt=""
        />
        <div class="line"></div>
        <div class="progress-box">
          <LineProgress :safetyIndex="68" />
        </div>
      </div>
      <!-- 本月安全事故统计 -->
      <SafetyAccident />
      <!-- 实时视频监控 -->
      <VideoSurveillance />
    </div>
    <div class="main-bg">
      <div class="cellinformation">
        <div></div>
        <ul>
          <li><img src="@/assets/编组9.png" alt="" />名称：景顺家园</li>
          <li>
            <img
              src="@/assets/编组9备份6.png"
              alt=""
            />地址：北京市朝阳区望京西路98号
          </li>
          <li>
            <img src="@/assets/编组9备份7.png" alt="" />消防责任人：李莎
            132****6563
          </li>
          <li>
            <img src="@/assets/编组9备份8.png" alt="" />消防管理人：王珍珍
            132****6563
          </li>
          <li>
            <img src="@/assets/编组9备份9.png" alt="" />消控室联系人：赵可欣
            010-74656897
          </li>
        </ul>
      </div>
      <!-- 巡更巡检信息 -->
      <div class="patrolinformation">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/巡更巡检信息@2x.png" alt="" />
        <div class="line"></div>
        <div class="content">
          <div class="tabs-content">
            <ul>
              <li v-for="(item, i) in data.list" :key="i">
                <span class="leval">{{ item.leval }}</span>
                <span>{{ item.typeName }}</span>
                <span class="status">{{ item.num }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <!-- 今日人车流量信息 -->
      <div class="trafficinformation">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/今日人车流量信息@2x.png" alt="" />
        <div class="line"></div>

        <div class="content" style="height: calc(100% - 50px)">
          <div class="bg"></div>
          <div class="wrapper-right">
            <div class="flex-column">
              <h5 style="flex: 1">今日流量</h5>
              <div class="data-box" style="flex: 2">
                <img src="@/assets/lock.png" alt="" />
                <div>
                  <span style="color: #fff; font-size: 26px">1,782</span
                  >/人<br />今日开门数
                </div>
              </div>
            </div>
            <div class="flex-column">
              <h5>今日车流量</h5>
              <div class="data-box">
                <img src="@/assets/stop-car.png" alt="" />
                <div>
                  <span style="color: #fff; font-size: 26px">1,032</span
                  >/人<br />今日进场
                </div>
              </div>
              <div class="data-box">
                <img src="@/assets/car.png" alt="" />
                <div>
                  <span style="color: #fff; font-size: 26px">823</span
                  >/人<br />今日出场
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="trafficinformation safety-equipment">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img
          class="title"
          style="width: 120px"
          src="@/assets/设备安全管理@2x.png"
          alt=""
        />
        <div class="line"></div>
        <div class="content">
          <!-- 透明图 -->
          <div class="outer"></div>
          <div style="display: flex; justify-content: space-around">
            <div>
              <CircularProgress :num="74.9" />
              正常设备比
            </div>
            <div>
              <CircularProgress :num="65.7" />
              故障设备比
            </div>
            <div>
              <CircularProgress :num="80" />
              离线设备比
            </div>
          </div>
          <div class="li-content">
            <ul>
              <li>
                <span>设备类型</span>
                <span>总数</span>
                <span>故障</span>
                <span>离线</span>
              </li>
              <li v-for="t in data.safetyEquipmentList" :key="t.type">
                <span>{{ t.type }}</span>
                <span>{{ t.total }}</span>
                <span>{{ t.error }}</span>
                <span>{{ t.offline }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 最新公告 -->
      <div class="announcement">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/最新公告@2x.png" alt="" />
        <div class="line"></div>
        <div class="">
          <div class="tabs-content">
            <ul>
              <li v-for="i in 2" :key="i">
                <span
                  ><i class="circle"></i>
                  {{ i % 2 === 0 ? '工地建设学习分享会' : '智慧工地新标准' }}
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
  overflow: hidden;
  height: calc(100vh - 80px);
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  background: url(@/assets/bg@2x2.png) no-repeat bottom;
  background-size: 100% 100%;
  background-attachment: fixed;
  .main-bg {
    position: relative;
    padding: 0 10px;
    height: 100%;
    flex: 1.5;
    display: flex;
    flex-direction: column;
    // @media screen and (min-width: 1700px) {
    //    flex: 2;
    // }

    // img {
    //   width: 100%;
    //   position: absolute;
    //   bottom: 0;
    //   height: 100%;
    // }
    .cellinformation {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: rgba(3, 157, 206, 0.1);
      div {
        width: 100%;
        height: 22vh;
        background: url(@/assets/cellinformation.png) no-repeat;
        background-size: 100% 100%;
      }
      img {
        width: 100%;
        // height: 60%;
      }
      ul {
        li {
          font-size: 16px;
          color: #ffffff;
          line-height: 24px;
          margin-top: 10px;
          text-shadow: 0px 0px 4px rgba(0, 234, 255, 0.6);
          img {
            width: 26px;
            height: 26px;
            vertical-align: middle;
            margin-right: 13px;
          }
        }
      }
    }
    .patrolinformation {
      margin-top: 20px;
      flex: 1;
      .title {
        width: 120px;
      }
      .tabs-content {
        margin-top: 10px;
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
            margin-bottom: 6px;
            &:nth-child(1) .leval {
              color: #009eff;
            }
            &:nth-child(1) .status,
            &:nth-child(2) .status,
            &:nth-child(3) .status {
              color: #00c72a;
            }
            &:nth-child(4) .status,
            &:nth-child(5) .status {
              color: #ff6262;
            }
            &:nth-child(2) .leval,
            &:nth-child(3) .leval {
              color: #009eff;
            }
            &:nth-child(4) .leval,
            &:nth-child(5) .leval {
              color: #ffffff;
            }
          }
        }
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

    .progress-box {
      padding: 30px 20px;
      margin-top: 10px;
      height: calc(100% - 50px);
      background-color: rgba(3, 157, 206, 0.1);
    }

    .line-progress {
      width: 100%;
      margin: 0;
    }
  }

  .right {
    .content {
      height: 100%;
      background-color: rgba(3, 157, 206, 0.1);
      .wrapper-right {
        padding: 20px;
        height: calc(100% - 50px);
        text-align: left;
        display: flex;
        justify-content: space-between;
        color: #fff;

        .data-box {
          display: flex;
          text-align: left;
        }
        img {
          width: 60px;
          height: 60px;
          margin-right: 10px;
        }
      }

      .flex-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div {
          color: #909aa2;
        }
      }
    }
    // display: flex;
    // flex-direction: column;
    .trafficinformation {
      font-size: 14px;
      color: #909aa2;
      flex: 1.5;
      height: 0;

      .title {
        width: 150px;
      }

      .content {
        text-align: center;
      }

      .bg {
        background: #039dce;
        opacity: 0.1;
      }
      .li-content {
        height: calc(100% - 120px);
        overflow: auto;
        ul {
          li {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            border-bottom: 1px solid rgba(0, 138, 183, 0.2);
            &:not(&:nth-child(1)) {
              margin-bottom: 8px;
              background: linear-gradient(
                94deg,
                rgba(3, 157, 206, 0.2) 0%,
                rgba(3, 157, 206, 0.05) 100%
              );
            }
          }
        }
      }
    }
    .announcement {
      margin-top: 20px;
      flex: 1;
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

.safety-equipment {
  .content {
    height: calc(100% - 20px) !important;
  }
}
</style>
