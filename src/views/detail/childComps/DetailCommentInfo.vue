<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="bar">
      <span>用户评价</span>
      <div class="more" v-if="commentInfo.cRate > 1">
        <span>更多</span>
        <img src="~assets/img/common/more.svg" alt="" />
      </div>
    </div>
    <div class="comment" v-if="commentInfo.cRate !== 0">
      <div class="user">
        <img :src="commentInfo.list[0].user.avatar" alt="" class="avatar" />
        <span>{{ commentInfo.list[0].user.uname }}</span>
      </div>
      <div class="content">
        <div class="comment-detail">
          {{ commentInfo.list[0].content }}
        </div>
        <div class="comment-about">
          <span class="time">{{ commentInfo.list[0].created | showDate }}</span>
          <span>{{ commentInfo.list[0].style }}</span>
          <div class="images">
            <img class="commentImg"
              :src="item"
              :key="index"
              v-for="(item, index) in commentInfo.list[0].images"
            />
          </div>
          <div v-if="commentInfo.list[0].explain" class="explain">
            {{ commentInfo.list[0].explain }}
          </div>
        </div>
      </div>
    </div>
    <div class="comment" v-if="commentInfo.cRate == 0">
      <div class="none">暂时无用户评价</div>
    </div>
  </div>
</template>

<script>

import { formatDate } from "common/utils.js";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer;
    },
    show() {
      this.$viewer.show();
    },
  },
  filters: {
    showDate(value) {
      // 将时间戳转为Date对象
      const date = new Date(value * 1000);
      // 将Date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 5px solid #f2f5f8;
}

.bar {
  padding: 15px 0;
  border-bottom: 2px solid #f2f5f8;
}

.bar .more {
  float: right;
  font-size: 14px;
  font-weight: bold;
}

.bar span {
  font-size: 16px;
}

.more img {
  height: 18px;
  width: 18px;
  position: relative;
  top: 3px;
}

.explain {
  padding: 15px;
  margin: 10px;
  background-color: rgb(240, 240, 240);
  font-size: 14px;
}

.user {
  padding: 15px 0;
  position: relative;
}

.user .avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.user span {
  font-size: 16px;
  margin-left: 10px;
  position: absolute;
  top: 27px;
  color: rgb(70, 69, 70);
}

.comment-detail {
  font-size: 14px;
  color: rgb(125, 124, 126);
}

.comment-about {
  padding: 10px 0;
}

.comment-about span {
  font-size: 14px;
  color: rgb(171, 171, 172);
}


.commentImg {
  width: 90px;
  height: 90px;
  margin: 8px;
}


.comment-about .time {
  margin-right: 10px;
}
.comment .none {
  font-size: 12px;
  text-align: center;
  padding: 20px 0;
  color: rgb(141, 138, 138);
}
</style>