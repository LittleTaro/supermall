<template>
  <div id="swiper-wrapper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <!-- 放轮播的图片/链接 -->
      <slot></slot>
    </div>
    <!-- 小圆点 -->
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          class="indi-item"
          v-for="(item, index) in slideCount"
          :key="index"
          :class="{ active: index === currentIndex - 1 }"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    // 间隔时间
    interval: {
      type: Number,
      default: 3000,
    },
    // 动画花费的时间
    animDuration: {
      type: Number,
      default: 300,
    },
    // 滑动换图的比例
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    // 是否显示小圆点
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideCount: 0, //元素个数
      totalWidth: 0, //Swiper的宽度
      swiperStyle: {}, //swiper的样式
      currentIndex: 1, //当前的index
      scrolling: false, //是否正在滚动
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom(); //操作DOM 在前后添加swiper-item
      this.startTimer(); //开启定时器
    }, 3000);
  },
  methods: {
    // 在<swiper>里的头尾添加swiper-item
    handleDom() {
      let swiperEl = document.querySelector(".swiper"); //swiper
      let slideEls = swiperEl.getElementsByClassName("slide"); //swiper-item
      this.slideCount = slideEls.length; //保存个数，由获取的数据决定
      if (this.slideCount > 1) {
        let cloneFirst = slideEls[0].cloneNode(true);
        let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slideEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      this.setTransform(-this.totalWidth); //显示第一个swiper-item（实际上是刚刚添加的最后一个元素）
    },

    // 定时器操作
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    // 元素滚动
    scrollContent(currentPosition) {
      this.scrolling = true; //状态设为滚动
      this.swiperStyle.transition = "transform " + this.animDuration + "ms"; //设置过渡属性
      this.setTransform(currentPosition); //设置变形(滚动)
      this.checkPosition(); //判断滚动到的位置
      this.scrolling = false; //滚动完成
    },

    // 设置滚动的位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      // 兼容Safari 和 Chrome
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px, 0, 0)`;
      // 兼容IE9
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px, 0, 0)`;
    },

    // 校验正确的位置
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        //？
        // this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },

    // 拖动事件的处理(会通过touch事件触发)
    touchStart(event) {
      if (this.scrolling) return; //如果正在滚动 不可拖动
      this.stopTimer(); //停止定时器
      this.startX = event.touches[0].pageX; //触点相对于HTML文档左边缘的X坐标
    },

    touchMove(event) {
      // 一个 TouchList，其会列出所有当前在与触摸表面接触的  Touch 对象
      this.currentX = event.touches[0].pageX; //触点相对于HTML文档左边缘的X坐标
      this.distance = this.currentX - this.startX; //计算用户拖动距离
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      this.setTransform(moveDistance); //设置当前位置
    },

    touchEnd() {
      let currentMove = Math.abs(this.distance); //移动的距离
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        //右移超过比例
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        //左移超过比例
        this.currentIndex++;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth); //移动到正确的位置
      this.startTimer(); //移动完后重启定时器
    },

    // 控制上一个 下一个
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    },
    changeItem(num) {
      this.stopTimer; //移除定时器
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth); //修改index和位置
      this.startTimer();
    },
  },
};
</script>
 
<style>
#swiper-wrapper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>