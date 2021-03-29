<template>
<div id="home">
  <nav-bar class="home-nav"> 
    <template v-slot:center>
      <div>购物街</div>
    </template>
  </nav-bar>
  <home-swiper :banner="banners"></home-swiper>
  <h2>首页</h2>
</div>

</template>

<script>
import {getHomeMultidata} from "network/home.js";
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childComps/HomeSwiper.vue';

export default {
  name:'Home',
  components: { 
    NavBarHomeSwiper,
    NavBar,
    HomeSwiper,
     },
  data(){
    return {
      banner: [],
      recommend: []
    }
  },
  created(){
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      })
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/base.less';

  .home-nav {
    text-align: center;
    background-color: @color-tint;
    color: #fff;
  }
</style>