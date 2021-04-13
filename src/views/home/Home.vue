<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"
      ></tab-control>
    <scroll class="content" ref="scroll" 
      :probe-type="3" :pullUpLoad="true"
      @scroll="contentScroll" @pullingUp="loadMore"> 
      <home-swiper :banners="banners" @swiperImageLoad='swiperImageLoad'></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick" ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="topClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import GoodsList from "components/content/goods/GoodsList.vue";
import {imgLoadMixin, backTopMixin} from "common/mixin.js"

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [imgLoadMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      TabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {  
  }, 
  activated() { 
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off('imageItemLoad', this.imgLoadListener());
  },
  
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {  
      // 判断返回顶部按钮是否显示
      this.isShowBackTop = position.y < -1000;
      // 决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.TabControlOffsetTop;
 
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad(){
      this.TabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  
    },
   
    // 从服务器获取数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].page++;
        // 利用数组的解构，把list数组里的对象一个一个push进去
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/base.less";

.home-nav {
  text-align: center;
  background-color: @color-tint;
  color: #fff;
}

#home {
  position: relative;
  height: 100vh;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}
</style>