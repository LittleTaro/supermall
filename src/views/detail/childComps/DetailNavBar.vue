<template>
  <div class="DetailNavBar">
    <nav-bar>
      <template v-slot:left >
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.png" alt="" >
        </div>
      </template>
      <template v-slot:center>
        <ul class="title">
          <li class="titleItem"  @click="titleClick(index)"
          :class="{active:currentIndex === index}"
          v-for="(item, index) in title" :key="index">
            {{item}}
          </li>
        </ul>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  name: 'DetailNavBar',
  components: { 
    NavBar,
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        title: ["商品", "参数" ,"评论", "推荐"],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
      },
      backClick() {
        this.$router.back();
      }
    }
}
</script>

<style lang="less" scoped>
@import url("~assets/css/base.less");

.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.title {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

.active {
  color: @color-high-text;
}

.back img {
  height: 20px;
  width: 20px;
  margin-top: 12px;
}
</style>