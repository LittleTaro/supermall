<template>
  <div class="tab-content-category">
    <grid-view v-if="subShow" :cols="3" :line-space="15" :v-margin="20" ref="grid">
      <template>
        <div
          class="subcategory-item"
          v-for="(item, index) in subShow"
          :key="index" >
          <img :src="item.image" alt="" />
          <div>{{ item.title }}</div>
        </div>
      </template>
    </grid-view>
  </div>
</template>

<script>
import GridView from "components/common/gridView/GridView.vue";

export default {
  name: "TabContentCategory",
  components: {
    GridView,
  },
  data() {
    return {
      imgLoadCount: 0
    }
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0,
    },
    subcategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    subShow() {
      return this.subcategory[this.currentIndex];
    },

  },
 
};
</script>

<style scoped>
.subcategory-item {
  text-align: center;
}

.subcategory-item img {
  width: 80%;
}

.subcategory-item div {
  font-size: 12px;
  margin-top: 15px;
}
</style>