<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import {useRouter} from 'vue-router';
import image1 from '@/assets/3号楼中间.png';
import image2 from '@/assets/4号楼.png';
import image3 from '@/assets/6号楼.png';
import image4 from '@/assets/大草坪.png';
import image5 from '@/assets/凉亭.png';
import image6 from '@/assets/小花园.png';
const router = useRouter();
const data = reactive({
  // eslint-disable-next-line no-undef
  imgUrlList:[image1,image2,image3,image4,image5,image6]
});

onMounted(() => {

});
</script>

<template>
  <div class="block" @click="router.push({name: 'videoSurveillance', query: {type: 'platform'}})">
    <img class="rectangular" src="@/assets/矩形@2x.png" alt="" />
    <img class="title" src="@/assets/实时视频监控@2x.png" alt="" />
    <div class="line"></div>
    <ul class="content-box">
      <li v-for="(item,index) in data.imgUrlList" :key="index">
        <img :src='item' alt="">
        <p>{{index+1+'号楼'}}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.block {
  padding-top:20px;
  cursor: pointer;
  flex: 1;
  height: initial;
  margin-top: 30px;

  .title {
    width: 120px;
  }
  .content-box {
    color: #97a0a7;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    flex-wrap: wrap;
    li{
      width:33%;
      position:relative;
      padding:7px;
       img{
        width: 100%;
      }
      p{
        position:absolute;
        bottom:7px;
        left:0;
        background: #032133;
        width: 100%;
        opacity: 0.6;
        font-size: 12px;
        text-align: center;
        height:23px;
      }
    }
   
    }
  
}
</style>
