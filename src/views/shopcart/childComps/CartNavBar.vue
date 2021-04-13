<template>
  <div>
     <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{length}})</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CartNavBar',
  components: {
     NavBar
  },
  computed: {
    ...mapGetters({
      list: 'cartList',
      length: 'cartLength'
    })
  }
}
</script>

<style lang='less' scoped>
@import url(~assets/css/base.less);

.nav-bar {
  background-color: @color-tint;
  color: #fff;
}
</style>