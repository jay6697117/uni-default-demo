<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view style="border: 1px solid #ccc;height:100%;"></view>
    <cc-button @click="handleClick" type="error">测试组件引入</cc-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello, 我是主页'
    };
  },
  onLoad() {
    console.log('--------------222------------');
    console.log(`this.$cc.time.timeFormat() 111:`, this.$cc.time.timeFormat());
    console.log(`uni.$cc.time.timeFormat() 111:`, uni.$cc.time.timeFormat(new Date(2009, 0, 18)));

  },
  methods: {
    handleClick(){
      this.$cc.toast('我是主页测试toast～～～')
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
