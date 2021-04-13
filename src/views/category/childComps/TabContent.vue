<template>
  <div class="tab-content"> 
      <tab-content-category
      ref="subcategory"
        :subcategory="subcategory"
        :currentIndex="currentIndex"
      ></tab-content-category>
      <tab-content-detail ref="detail"
      @tabClick="tabClick" :itemList="subDetail[currentType]"></tab-content-detail>
  </div>
</template>

<script>
import TabContentCategory from "./TabContentCategory.vue";
import TabContentDetail from "./TabContentDetail.vue";
export default {
  components: {
    TabContentCategory,
    TabContentDetail,
    
  },
  name: "TabContent",
  data() {
    return {
      currentDetailIndex: 0,
      detailTypes: ['pop', 'sell', 'new'], 
    };
  },
  computed: {
    currentType() {
      return this.detailTypes[this.currentDetailIndex];
    }
  },
  props: {
    subcategory: {
      type: Array,
      default() {
        return [];
      },
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
    subDetail: {
      type: Object,
      default() {
        return {}
      },
      
    }
  },
  methods: {
    tabClick(index) {
      this.currentDetailIndex = index;
    },
    resetDetailIndex() {
      this.currentDetailIndex = 0;
      this.$refs.detail.resetDetailIndex();
    },
  },
};
</script>

<style scoped>
</style>