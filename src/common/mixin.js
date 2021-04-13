import {debounce} from 'common/utils.js'
import BackTop from 'components/content/backTop/BackTop.vue';

export const imgLoadMixin = {
  data() {
    return {
      imgLoadListener: null,
      newRefresh: null,
    }
  },
  mounted() {
     // 使用防抖函数
     this.newRefresh = debounce(this.$refs.scroll.refresh,100);
     this.imgLoadListener = () => {
       this.newRefresh();
     };
  
    // 监听goodsitem中图片加载完成
     this.$bus.$on('imageItemLoad',() => {
       this.imgLoadListener();
     });
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
  }
}