<template>
  <div class="shopCart">
    <cart-list-item v-for="(item, index) in list" 
    :key="index" :cartItemInfo=item>
    </cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  components: { 
    CartListItem 
  },
  computed: {
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  }
}
</script>

<style scoped>

</style>