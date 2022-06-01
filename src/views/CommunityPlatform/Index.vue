<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed } from 'vue';
import SafetyAnalysis from './SafetyAnalysis.vue';
import SafetyAccident from './SafetyAccident.vue';
import VideoSurveillance from './VideoSurveillance.vue';

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
});
</script>

<template>
  <div class="home-page">
    <div class="left">
      <!-- 安全指数分析 -->
      <SafetyAnalysis />
      <!-- 本月安全事故统计 -->
      <SafetyAccident />
      <!-- 实时视频监控 -->
      <VideoSurveillance />
    </div>
    <div class="main-bg">
      <div class="outer"></div>
      <div class="cellinformation">
        <div></div>
        <ul>
          <li><img src="@/assets/编组9.png" alt="">名称：景顺家园</li>
          <li><img src="@/assets/编组9备份6.png" alt="">地址：北京市朝阳区望京西路98号</li>
          <li><img src="@/assets/编组9备份7.png" alt="">消防责任人：李莎 132****6563</li>
          <li><img src="@/assets/编组9备份8.png" alt="">消防管理人：王珍珍 132****6563</li>
          <li><img src="@/assets/编组9备份9.png" alt="">消控室联系人：赵可欣  010-74656897</li>
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

        <div class="content">
          <!-- 透明图 -->
          <div class="bg"></div>
        </div>
      </div>

     <!-- 今日人车流量信息 -->
      <div class="trafficinformation">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/今日人车流量信息@2x.png" alt="" />
        <div class="line"></div>
        <div class="content">
          <!-- 透明图 -->
          <div class="outer"></div>
        </div>
      </div>
      <!-- 最新公告 -->
      <div class="announcement">
        <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
        <img class="title" src="@/assets/最新公告@2x.png" alt="" />
        <div class="line"></div>
        <div class="content">
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
  height: 100%;
  overflow: auto;
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  background: url(@/assets/bg@2x2.png) no-repeat bottom;
  background-size: 100% 100%;
  background-attachment: fixed;
  .main-bg {
    position: relative;
    padding:0 10px;
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
    .outer {
      background: #039dce;
      opacity: 0.1;
      flex: 1.5;
    }
    .cellinformation {
      width:100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      position: absolute;
      left: 0;
      top: 0;
      div{
        width:100%;
        height:22vh;
        background: url(@/assets/cellinformation.png) no-repeat;
        background-size: 100% 100%;
        
      }
      img {
        width: 100%;
        // height: 60%;
      }
      ul{
        li{
          font-size: 16px;
          color: #FFFFFF;
          line-height: 24px;
          margin-top:10px;
          text-shadow: 0px 0px 4px rgba(0, 234, 255, 0.6);
          img{
            width: 26px;
            height:26px;
            vertical-align: middle;
            margin-right:13px;
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
            margin-bottom:6px;
            &:nth-child(1) .leval {
              color:#009eff;
            }
            &:nth-child(1) .status, &:nth-child(2) .status, &:nth-child(3) .status{
              color: #00C72A;
            }
            &:nth-child(4) .status, &:nth-child(5) .status{
              color: #FF6262;
            }
            &:nth-child(2) .leval,
            &:nth-child(3) .leval {
              color:#009eff;
            }
            &:nth-child(4) .leval,
            &:nth-child(5) .leval {
              color: #FFFFFF;
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
  }

  .right {
    // display: flex;
    // flex-direction: column;
    .trafficinformation {
      flex:1;
      .title {
        width: 150px;
      }
      .bg{
        background: #039dce;
        opacity: 0.1;
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
    .announcement {
      margin-top: 20px;
      flex:1;
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
