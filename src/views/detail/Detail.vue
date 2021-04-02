<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shopInfo="shop"></detail-shop-info>
      <detail-info :detailInfo="detailInfo"></detail-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
    </scroll>
      
    
    
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailInfo from './childComps/DetailInfo.vue';

import Scroll from 'components/common/scroll/Scroll';



export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    Scroll,
    DetailInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // 根据id请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      // 获取商品轮播图
      this.topImages = data.itemInfo.topImages;
      // 创建商品的对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺的对象
      this.shop = new Shop(data.shopInfo);
      // 取出详情的信息
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
    });
  },
};
</script>

<style scoped>
.content {
  background-color: #fff;
  height: calc(100% - 44px);
  /* position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0; */
}
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
</style>