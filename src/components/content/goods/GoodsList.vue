<template>
  <div class="goods-list">
    <good-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item">
    </good-list-item>
  </div>

</template>

<script>
import GoodListItem from './GoodListItem.vue'
export default {
  name: 'GoodList',
  props: {
    goods:{
      type: Array,
      default() {
        return [];
        }
    }
  },
  components: { 
    GoodListItem 
    },
}
</script>

<style scoped>
  .goods-list {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     width: 100%;
  }
</style>