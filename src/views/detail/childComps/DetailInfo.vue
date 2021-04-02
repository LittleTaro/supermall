<template>
  <div v-if="Object.keys(detailInfo).length !== 0" 
  class="detail-info">
    <div class="clearfix goods-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="detail-image"
     v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="key">
        {{item.key}}
      </div><img v-for="(item,index) in item.list" alt=""  :key="index" :src="item"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
  // data() {

  // }
}
</script>

<style>
  .detail-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-image img {
    width: 100%;
  }
  
  .goods-desc {
    padding: 0 15px;
    position: relative;
  }

  .goods-desc .start, .goods-desc .end {
    height: 1px;
    width: 90px;
    background-color: #a3a3a5;
    position: absolute;
  }

  .goods-desc .end {
    right: 15px;

  }

  .goods-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .goods-desc .start::before, .goods-desc .end::after{
    position: absolute;
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .goods-desc .end::after {
    right: 0;
  }

  .key {
    padding: 10px 15px;
    text-align: center;
  }

</style>