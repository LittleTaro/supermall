<template>
  <div class="category">
    <nav-bar class="category-nav">
      <template v-slot:center>商品分类</template>
    </nav-bar>
    <tab-menu :titles="tabMenuTitle" @menuItemClick="menuItemClick"></tab-menu>
    <scroll class="content" ref="scroll" :probeType="2" @scroll="contentScroll">
      <tab-content
        ref="tabContent"
        :subcategory="subcategory"
        :currentIndex="currentIndex"
        :subDetail="subDetail[currentIndex]"
        class="tab-content"
      ></tab-content>
    </scroll>
    <back-top v-if="isShowBackTop" @click.native="topClick" ></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getCategory, getSubcategory, getSubDetail } from "network/category.js";
import TabMenu from "./childComps/TabMenu.vue";
import TabContent from "./childComps/TabContent.vue";
import Scroll from "components/common/scroll/Scroll.vue";

import {backTopMixin} from "common/mixin.js"


export default {
  name: "Category",
  mixins: [backTopMixin],
  components: {
    NavBar,
    TabMenu,
    TabContent,
    Scroll,
   
  },
  data() {
    return {
      category: [],
      tabMenuTitle: [],
      subcategory: [],
      currentIndex: 0,
      detailTypes: ['pop', 'sell', 'new'], 
      subDetail: [],
    };
  },
  methods: {
    getCategory() {
      getCategory().then((res) => {
        this.category = res.data.category.list;
        for (let i in this.category) {
          this.tabMenuTitle.push(this.category[i].title);
        }
        this.getSubcategory(0);
        this.getSubDetail(0);
      });
    },
    getSubcategory(index) {
      this.currentIndex = index;
      getSubcategory(this.category[index].maitKey).then((res) => {
        this.$set(this.subcategory, index, res.data.list);
      });
    },
    menuItemClick(index) {
      this.getSubcategory(index);
      this.getSubDetail(index);
      this.$refs.scroll.scrollTo(0, 0);
      this.$refs.tabContent.resetDetailIndex();
    },
    getSubDetail(index) {
      let subDetail = {
            pop: [],
            sell: [],
            new: []
          }
      for(let n of this.detailTypes) {
        getSubDetail(this.category[index].miniWallkey,n).then(res => {
          subDetail[n] = res;
        })
      }
      this.$set(this.subDetail, index, subDetail);
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;
    },
  
  },
  created() {
    this.getCategory(); 
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";

.content {
  left: 100px;
  right: 0;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}

.category {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.category-nav {
  background-color: @color-tint;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 999;
}



</style>