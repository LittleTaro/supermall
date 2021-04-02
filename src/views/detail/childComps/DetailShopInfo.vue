<template>
  <div class="shopInfo">
    <div class="shopDes">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="middle">
      <table class="shopCount">
        <tr>
          <td>{{shopInfo.sells | sellCountFilter}}</td>
          <td>{{shopInfo.goodsCount}}</td>
        </tr>
        <tr>
          <td>总销量</td>
          <td>全部宝贝</td>
        </tr>
      </table>
      <table class="shopScore">
        <tr v-for="(item,index) in shopInfo.score" 
        :key="index"  :class="{better:item.isBetter}">
          <td>{{item.name}}</td>
          <td class="score">{{item.score}}</td>
          <td class="judge" v-if="item.isBetter" 
          style="backgroundColor:rgb(124,151,92)">高</td>
          <td class="judge" v-else style="backgroundColor:rgb(238,85,68)">低</td>
        </tr>
      </table>
      <div class="intoBtn">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  filters: {
    sellCountFilter(sells) {
      if (sells > 10000) {
        return (sells/10000).toFixed(1) + '万'
      }
      return sells;
    }
  }
}
</script>

<style scoped>
.shopInfo {
  padding: 20px 15px; 
  border-bottom: 5px solid #f2f5f8;  
}
  .shopDes {
    height: 80px;
    position: relative;
  }
  .shopDes img {
    height: 80px;
    width: 80px;
    border-radius: 40px;
  }

  .shopDes span {
    font-size: 18px;
    display: inline-block;
    position: absolute;
    top: 31px;
    margin-left: 13px;
  }

  .middle {
    padding-top: 10px;
    text-align: center;
    font-size: 15px;
    color: rgb(66, 66, 66);
  }

  .shopScore {
    display: inline-block;
    margin-left: 10px;
   
  }

  .shopCount {
    display: inline-block; 
    border-right: 3px solid rgba(100, 100 ,100, .1);  
    margin-right: 8px;
    padding-right: 8px;
    position: relative;
    top: -12px;
  }

  .shopCount td {
    padding: 3px 10px
  }

  .shopScore td{
    padding: 3px 3px;
  }



  td.score {
    color: rgb(238,85,68);
    padding-right: 7px;
  }

  .better .score {
    color: rgb(124,151,92);
  }

  td.judge {
    color: #fff;
    border-radius: 5px;

  }

  .intoBtn {
    background-color: rgb(247,245,250);
    width: 40%;
    padding: 4px 0;
    border-radius: 8px;
    margin: 20px  auto 10px;
     color: rgb(87, 86, 86);
  }
</style>