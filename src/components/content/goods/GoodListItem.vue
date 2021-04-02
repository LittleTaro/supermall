<template>
  <div class="goods-item" @click="itemClick">
      <img :src="goodsItem.show.img" alt="" @load="imageLoad"> 
      <div class="goods-info">     
          <p>{{goodsItem.title}}</p>     
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>

  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodsItem:{
      type: Object,
      default() {
       return {};
      }
    },
  },
  methods: {
    imageLoad(){
    this.$bus.$emit('imageItemLoad');
   },
   itemClick() {
     this.$router.push('/detail' + this.goodsItem.iid);
   }
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/base.less";
  .goods-item {
   
    width: 48%;
    /* padding-bottom: 40px; */
   
  }
  .goods-item .goods-info {
 
    font-size: 12px;
   
    text-align: center;
    margin-bottom: 5px;
  }
  .goods-info p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-info .price{
    margin-right: 20px;
    color: @color-high-text;
  }
  .goods-item  img {
    width: 100%;
    border-radius: 5px;
    margin: 5px 0;
  }
  .goods-item .collect {
    position: relative;
  }
  .goods-item .collect::before{
    content: '';
    position: absolute;
    background: url("~assets/img/common/collect.svg") 0/14px;
    width: 14px;
    height: 14px;
    left: -14px;
    top: 0px;
  }
</style>