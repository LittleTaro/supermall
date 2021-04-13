<template>
  <div class="user-info">
    <div class="avatar">
      <slot name="avatar">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </slot>
    </div>
    <div class="base-info">
      <div class="user-name">
        <slot name="nickname">
          <div>登录/注册</div>
        </slot>
      </div>
      <div class="phoneNumber">
        <img src="~assets/img/profile/phone.svg" alt="" />
        <slot name="phoneNumber">
          <span>暂无绑定手机号</span>
        </slot>
      </div>
    </div>
    <span class="array">
      <img src="~assets/img/profile/userinfo-more.svg" alt="" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
};
</script>


<style lang='less' scoped>
@import url(~assets/css/base.less);

.user-info {
  background-color: @color-tint;
  display: flex;
  padding: 5px;
  align-items: center;
}

.base-info {
  width: 265px;
}

.avatar img {
  width: 60px;
  margin: 7px;
}

.phoneNumber span {
  font-size: 14px;
}

.phoneNumber img {
  height: 18px;
  position: relative;
  top: 4px;
}

.array img {
  height: 15px;
}
</style>