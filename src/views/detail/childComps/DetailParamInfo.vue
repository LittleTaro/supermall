<template>
  <div class="paramInfo" v-if="Object.keys(paramInfo.length !== 0)">
    <table class="size" v-for="(table, index) in paramInfo.sizes"
     :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="(tr, index) in paramInfo.infos"
        :key="index">
          <td class="key">{{tr.key}}</td>
          <td class="value">{{tr.value}}</td>
        </tr>
    </table>
    <img v-if="paramInfo.image" :src="paramInfo.image" alt="">
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~assets/css/base.less");
  .paramInfo {
    padding: 20px 20px;
    background-color: rgb(255, 255, 255);
    color: rgb(117, 116, 116);
    border-bottom: 5px solid #f2f5f8;  
  }

  .size, .info {
    width: 100%;
    border-collapse: collapse;
  }

  .size tr, .info tr{
    border-bottom: 1px solid rgb(231, 231, 231);
    
  }

  .size td, .info td {
    padding: 12px 0;
  }

  .size {
    border-bottom: 3px solid rgb(231, 231, 231);
  }

  .info td.key {
    width: 100px;
    text-align: left;
  }

  .info td.value {
    color: @color-high-text;
  }
</style>