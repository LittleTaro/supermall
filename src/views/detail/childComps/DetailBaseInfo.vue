<template>
  <div class="base-info">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount" :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="(item, index) in goods.columns" :key="index">
        {{item}}
      </span>
    </div>
    <div class="services">
      <div class="service-item" v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt="" v-if="item.icon"> 
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import url("~assets/css/base.less");

  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;  
  }

  .title {
    color: #222;
  }

  .price{
    margin-top: 10px;
  }

  .new-price {
    font-size: 23px;
    color: @color-high-text;
  }

  .old-price {
    text-decoration: line-through;
    font-size: 15px;
    margin-left: 5px;
  }

  .discount {
    border-radius: 8px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    margin-left: 5px;
    position: relative;
    top: -8px;
  }

  .columns {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    line-height: 60px;
  }

  .services img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px
  }

  .services span {
    font-size: 13px;
    color: #333;
  }

</style>