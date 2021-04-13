<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: {
    // 列数
    cols: {
      type: Number,
      default: 2,
    },
    // 父元素水平内边距
    hMargin: {
      type: Number,
      default: 8,
    },
    // 父元素垂直内边距
    vMargin: {
      type: Number,
      default: 8,
    },
    // 子元素水平间距
    itemSpace: {
      type: Number,
      default: 8,
    },
    // 子元素垂直间距
    lineSpace: {
      type: Number,
      default: 8,
    },
  },
  methods: {
    // 自动布局
    _autoLayout() {
      // 获取grid和其子元素
      let gridEl = this.$refs.gridView;
      let children = gridEl.children;
      // 设置gridEl的内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;
      // 计算item的宽度
      let itemWidth =
        (gridEl.clientWidth -
          2 * this.hMargin -
          (this.cols - 1) * this.itemSpace) /
        this.cols;
      for (let i = 0; i < children.length; i++) {
        let item = children[i];
        item.style.width = itemWidth + "px";
        // 除了每一列最后一个元素 都加上右外边距
        if ((i + 1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + "px";
        }
        // 第二行开始给item加上上外边距
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + "px";
        }
      }
    },
  },
  mounted() {
    setTimeout(this._autoLayout, 20);
  },
  updated() {
    this._autoLayout();
  }
};
</script>

<style scoped>
  .grid-view {
    display: flex;
    flex-wrap: wrap;
  }
</style>