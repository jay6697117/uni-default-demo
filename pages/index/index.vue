<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <view style="border: 1px solid #ccc; height: 100%"></view>
    <cc-button ref="ccBtn" @click="handleClick" type="error">测试组件引入</cc-button>
    <view style="word-break: break-all; word-wrap: break-word; padding: 0 20px">
      <text>{{ userInfo }}</text>
    </view>
    <button @tap="zjhClick">哈哈</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      title: 'Hello, 我是主页'
    };
  },
  computed: {
    userInfo() {
      return JSON.stringify(this.$store.state.home);
    }
  },
  methods: {
    handleClick() {
      this.$cc.toast('我是主页测试toast～～～');
    },
    zjhClick() {
      console.log('zjhClick run ～～～');
      console.log(`zjhClick this.$refs.ccBtn:`, this.$refs.ccBtn);
      this.count += 1;
      this.$store.dispatch('home/setUserInfo', {
        userName: '张金辉' + '--' + this.count,
        userAge: 34 + this.count + '岁',
        userHeight: 134 + this.count + 'cm'
      });
    }
  },
  onLoad() {
    console.log(`onLoad1 this.$refs.ccBtn:`, this.$refs.ccBtn);
    this.$nextTick(() => {
      console.log(`onLoad2 this.$refs.ccBtn:`, this.$refs.ccBtn);
    });
  },
  onShow() {
    console.log(`onShow1 this.$refs.ccBtn:`, this.$refs.ccBtn);
    this.$nextTick(() => {
      console.log(`onShow2 this.$refs.ccBtn:`, this.$refs.ccBtn);
    });
  },
  onReady() {
    console.log(`onReady this.$refs.ccBtn:`, this.$refs.ccBtn);
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
