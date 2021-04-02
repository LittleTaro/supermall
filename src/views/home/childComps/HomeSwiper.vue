<template>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name:"HomeSwiper",
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      isOnceLoad: false,
    }
  },
  components: {
    Swiper,
    SwiperItem
  
  },
  methods: {
    imageLoad(){
      if (!this.isOnceLoad) {
        // 第一张图片加载完成即可发射事件
      this.$emit('swiperImageLoad');
      this.isOnceLoad = true;
      }
    }  
  }
}
</script>

<style scoped>

</style>