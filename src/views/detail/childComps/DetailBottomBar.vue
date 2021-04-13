<template>
  <div class="detailBottomBar">
    <!-- <div class="leftItems"> -->
      <div>
        <img src="~assets/img/detail/service.svg" alt="" />
        <span>客服</span>
      </div>
      <div>
        <img src="~assets/img/detail/shop.svg" alt="" />
        <span>店铺</span>
      </div>
      <div>
        <img src="~assets/img/detail/count.svg" alt="" />
        <span>收藏</span>
      </div>
    <!-- </div> -->
    <div class="addToCart" @click="addToCart">
      加入购物车
      </div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart');
    }
  }
};
</script>

<style scoped>
  .detailBottomBar {
    background-color: #fff;
    height: 49px;
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: space-around;
    text-align: center;
  }

  .detailBottomBar div {
    flex: auto;
    padding: 4px 0;
  }

  .detailBottomBar img {
    width: 20px;
    height: 20px;
  }

  .detailBottomBar div span {
    display: block;
  }

  .addToCart, .buy {
    line-height: 41px;
  }

  .addToCart {
    background-color: rgb(255,222,16);
    color: rgb(48, 46, 41);
  }

  .buy {
    background-color: rgb(255,120,154);
    color: #fff;
  }
</style>