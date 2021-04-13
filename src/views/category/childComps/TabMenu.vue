<template>
  <div class="tab-menu">
    <scroll class="content">
      <div class="menu-item" :class="{'active':index === currentIndex}"
    v-for="(item, index) in titles" 
    :key="index"  @click="menuItemClick(index)">
      {{item}}
    </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';

export default {
  components: { Scroll },
  name: 'TabMenu',
  data() {
    return {
      isActive: false,
      currentIndex: 0,
    }
  },
  props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      },
   },
   methods: {
     menuItemClick(index) {
       this.currentIndex = index;
       this.$emit('menuItemClick', index);
     }
   }
}
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";

   .content {
     height: calc(100vh - 44px - 49px);
   }
   
  .tab-menu {
    width: 100px;
    background-color: rgb(247,245,247);
  }

  .menu-item {
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  
  .menu-item.active {
    background-color: #fff;
    color: @color-high-text;
    font-weight: 700;
    border-left: 3px solid @color-high-text;
  }
</style>