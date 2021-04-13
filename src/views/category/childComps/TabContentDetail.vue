<template>
  <div class="tab-content-detail">
    <tab-control ref="tabControl" :titles="detailTitles" @tabClick="tabClick"></tab-control>
    <goods-list :goods="itemList"></goods-list>
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

export default {
  components: {
    TabControl,
    GoodsList,
  },
  name: "TabContentDetail",
  data() {
    return {
      detailTitles: ["综合", "销量", "最新"],
      currentDetailIndex: 0,
    };
  },
  props: {
    itemList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    tabControlOffsetTop() {
      return this.$refs.tabControl.$el.offsetTop;
    }
  },
  methods: {
    // tabControl的index
    tabClick(index) {
      this.$emit("tabClick", index);
      this.currentDetailIndex = index;
    },
    resetDetailIndex() {
      this.currentDetailIndex = 0;
      this.$refs.tabControl.currentIndex = this.currentDetailIndex;
    }
  },
};
</script>

<style scoped>
</style>