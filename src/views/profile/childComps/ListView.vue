<template>
  <div class="list-view">
    <div v-for="(item, index) in itemList" :key="index" class="item">
      <img :src="item.icon" alt="" class="icon">
      <div class="info">
        {{item.info}}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ListView",
  props: {
    itemList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>


<style scoped>
  .list-view {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  .list-view .item {
    position: relative;
    height: 44px;
    line-height: 44px;
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item .icon {
    position: absolute;
    left: 16px;
    top: 3px;
    margin-top: 10px;
    height: 18px;
    width: 18px;
  }


  .item:last-of-type .info {
    border-bottom: none;
  } 
</style>