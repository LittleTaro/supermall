<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>我的</div>
      </template>
    </nav-bar>
    <user-info></user-info>
    <div class="account">
      <div class="sum">
        <div class="number">
          <span >0.00</span>元
        </div>
        <div>我的余额</div>
      </div>
      <div class="discount">
        <div class="number">
        <span >0</span>个
        </div>
        <div>我的优惠</div>
      </div>
      <div class="points">
        <div class="number">
        <span >0</span>分
        </div>
        <div>我的积分</div>
      </div>
    </div>
    <list-view :itemList="orderList" class="orderList"></list-view>
    <list-view :itemList="serviceList" class="serviceList"></list-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import UserInfo from './childComps/UserInfo.vue';
import ListView from './childComps/ListView.vue'

export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    ListView
  },
  data() {
    return {
      orderList: 
        [
          {
            icon: require(`@/assets/img/profile/message.svg`),
            info: '我的消息',
          },
          {
            icon: require(`@/assets/img/profile/pointsShop.svg`),
            info: '积分商城',
          },
          {
            icon: require(`@/assets/img/profile/vip.svg`),
            info: '会员卡',
          }
        ]
      ,
      serviceList: 
         [
          {
            icon: require(`@/assets/img/profile/cart.svg`),
            info: '我的购物车',
          },
          {
            icon: require(`@/assets/img/profile/download.svg`),
            info: '下载购物APP',
          }
        ]
    }
  }
};
</script>

<style lang='less' scoped>
@import url(~assets/css/base.less);

.profile {
  background-color: rgb(242, 242, 242);
  color: #fff;
  height: 100vh;
}

.nav-bar {
  background-color: @color-tint;
  color: #fff;
}

.account {
 margin-bottom: 10px;
 background-color: rgb(242, 242, 242);
  color: rgb(102,102,102);
  display: flex;
  justify-content:space-between;
}

.account>div { 
  background-color: #fff;
  padding: 20px 30px;
  text-align: center;
}

.account>div .number {
  margin: 5px;
}

.account>div .number span{
  font-size: 19px;
  font-weight: 700;
  color: rgb(255,97,71);
}

.orderList {
  margin-bottom: 10px;
}
</style>