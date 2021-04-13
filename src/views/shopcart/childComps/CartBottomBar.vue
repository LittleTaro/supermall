<template>
  <div class="cart-bottom-bar">
    <div class="select-all">
      <div
        class="select-btn"
        :class="{ isAllSelected: allSelected }"
        @click="selectAll"
      ></div>
      <span>全选</span>
    </div>
    <div class="total">合计:￥{{ totalPrice }}</div>
    <div class="cal" @click="calClick">去结算({{ length }})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList",
    }),
    totalPrice() {
      let totalPrice = this.list.reduce((total, currentValue) => {
        return total + currentValue.count * currentValue.price;
      }, 0);
      return totalPrice.toFixed(2);
    },
    allSelected() {
      // 购物车为空 默认无全选
      if (!this.list.length) {
        return false;
      } else {
        // 有没被选中的商品 则无全选
        return (
          this.list.filter((item) => {
            return !item.isSelected;
          }).length === 0
        );
      }
    },
  },
  methods: {
    selectAll() {
      // 都被选中 都设为未选
      if (this.allSelected) {
        this.list.forEach((item) => {
          item.isSelected = false;
        });
      } else {
        // 有没被选中的商品 都设为选中
        this.list.forEach((item) => {
          item.isSelected = true;
        });
      }
    },
    calClick() {
      if (!this.length) {
        this.$toast.show('购物车为空',1200);
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import "~assets/css/base.less";

.cart-bottom-bar {
  height: 33px;
  background-color: rgb(237, 236, 238);
  display: flex;
  line-height: 33px;
}

.select-all {
  flex: 2;
  text-align: center;
}

.total {
  flex: 5;
}

.cal {
  flex: 2.5;
  color: rgb(255, 237, 210);
  text-align: center;
  background-color: rgb(255, 82, 1);
}

.select-btn {
  box-sizing: content-box;
  width: 15px;
  height: 15px;
  margin-right: 3px;
  border-radius: 50%;
  border: solid rgb(218, 217, 218) 2px;
  display: inline-block;
  vertical-align: middle;
}

.select-btn.isAllSelected {
  box-sizing: content-box;
  width: 15px;
  height: 15px;
  background-color: @color-tint;
  border-radius: 50%;
  background-image: url("~assets/img/shopcart/select.svg");
  background-size: 15px 15px;
  border: solid @color-tint 2px;
  display: inline-block;
  vertical-align: middle;
}
</style>