<template>
  <div class="shopCart">
    <cart-nav-bar></cart-nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from "../../components/common/scroll/Scroll.vue";
import CartBottomBar from './childComps/CartBottomBar.vue';
import CartList from "./childComps/CartList.vue";
import CartNavBar from "./childComps/CartNavBar";

export default {
  name: "ShopCart",
  components: {
    CartNavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>
     

<style scoped>
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

.shopCart {
  height: 100vh;
  position: relative;
}

.bottom-bar {
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>