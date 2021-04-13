<template>
  <div class="cart-list-item">
    <div class="select-wrapper">
      <div class="select-btn" :class="{'selected':isSelected}" 
        @click="SelectClick"></div>
    </div>
    <div class="goods-img">
      <img :src="cartItemInfo.img" alt="" />
    </div>
    <div class="goods-info">
      <div class="info-top">
        <div class="title">
          {{ cartItemInfo.title }}
        </div>
        <div class="desc">
          {{ cartItemInfo.desc }}
        </div>
      </div>
      <div class="info-bottom">
        <span class="price">
          ￥{{ cartItemInfo.price }}
        </span>
        <span class="count">
          x{{ cartItemInfo.count }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: {
    cartItemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    isSelected() {
      return this.cartItemInfo.isSelected;
    }
  },
  methods: {
    SelectClick() {
      this.cartItemInfo.isSelected = !this.isSelected;
    }
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";

.cart-list-item {
  display: flex;
  width: 100%;
  height: 120px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(218,217,218);
}


.goods-img img {
  width: 78px;
  height: 100px;
  border-radius: 5px;
}

.goods-info {
  padding: 10px;
  width: 70%;
  flex: 1;
  position: relative;
}



.goods-info .title {
  font-size: 16px;
  color: rgb(27, 27, 27);
}

.goods-info .desc {
  font-size: 14px;
  margin-top: 10px;
  color: rgb(77, 75, 75);
}



.info-top div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-bottom {
  position: absolute;
  bottom: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
}

.info-bottom .price {
  color: rgb(245,120,70);
}

.info-bottom .count {
  float: right;
}

.select-wrapper {
  display: flex;
  align-items: center;
  padding: 0 5px;
}

.select-btn{
  box-sizing: content-box;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: solid rgb(218,217,218) 2px;
  display: inline-block;
  vertical-align: middle;
}

.select-btn.selected{
  box-sizing: content-box;
  width: 15px;
  height: 15px;
  background-color: @color-tint;
  border-radius: 50%;
  background-image: url("~assets/img/shopcart/select.svg");
  background-size: 15px 15px;
  border: solid @color-tint 2px;
  display: inline-block;
  vertical-align: middle;
}


</style>