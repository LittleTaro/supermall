<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar" @tabClick="tabClick" ref="navbar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages" ref="goods"></detail-swiper>
      <detail-base-info :goods="goods" ></detail-base-info>
      <detail-shop-info :shop-info="shop" ></detail-shop-info>
      <detail-info :detail-info="detailInfo" @detailImgLoad='detailImgLoad'></detail-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comments"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
    <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail.js";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailInfo from './childComps/DetailInfo.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';


import {imgLoadMixin, backTopMixin} from "common/mixin.js"
import {debounce} from 'common/utils.js'
 
import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goods/GoodsList.vue';
import { mapActions } from 'vuex';


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
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [imgLoadMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      scrollYs: [],
      getThemeTopY: null,
      message: '',
      isShow: false,
    };
  },
  methods: {
    ...mapActions ({
      addCart:'addToCart'
      }),
    detailImgLoad() {
      this.newRefresh();
      // 获得图片加载好后各组件的offsetTop
      this.getThemeTopY();
    },
    tabClick(index) {
      this.$refs.scroll.scrollTo(0, this.scrollYs[index]);
    },
    contentScroll(position) {
      // 判断返回顶部按钮是否显示
      this.isShowBackTop = position.y < -1000;
      // 根据滚动位置判断当前所处的区域 改变index
      // let length = this.scrollYs.length;
      for(let i in this.scrollYs) {
        i = i*1;  //i为字符串类型 转换为数字类型
        if (position.y <= this.scrollYs[i] && position.y > this.scrollYs[i+1]) {
          this.$refs.navbar.currentIndex = i;
        }
      }
    },
    addToCart(){
        const product = {};
        // 简介 标题 价格 添加数量 封面图
        product.title = this.goods.title;
        product.desc = this.detailInfo.desc;
        product.price = this.goods.realPrice;
        product.img = this.topImages[0];
        product.iid = this.iid;
        this.addCart(product).then(res => {
          this.$toast.show(res,1300);
        });
    },
  },
  created() {
    // 保存传入的id
    this.iid = this.$route.params.iid;
    // 根据id请求详情数据
    getDetail(this.iid).then((res) => {
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
      // 获取商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论信息
      this.commentInfo = data.rate;
    });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    }),
    // 对getThemeTopY的操作进行防抖
    this.getThemeTopY = debounce(() => {
      this.scrollYs = [];
      this.scrollYs.push(-this.$refs.goods.$el.offsetTop + 44)
      this.scrollYs.push(-this.$refs.params.$el.offsetTop + 44);
      this.scrollYs.push(-this.$refs.comments.$el.offsetTop + 44);
      this.scrollYs.push(-this.$refs.recommends.$el.offsetTop + 44);
      this.scrollYs.push(-Number.MAX_VALUE);
    },100);
  },
  destroyed() {
     this.$bus.$off('imageItemLoad',this.imgLoadListener());
  }
};
</script>

<style scoped>
.content {
  background-color: #fff;
  height: calc(100% - 44px - 49px);
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
  padding-bottom: 10px;
  overflow: hidden;
}
</style>