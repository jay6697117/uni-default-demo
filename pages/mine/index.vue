<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
    <view>
      <!-- toast dom -->
      <cc-toast ref="cToast"></cc-toast>
      <view>
        <view class="title">基础语法</view>
        <view class="item">
          <cc-button @click="open({ title: '吃鲸鱼的人', type: 'success', callback })" type="primary">吃鲸鱼的人</cc-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '嘻嘻, 我是个人中心'
      }
    },
    onLoad() {

    },
    methods: {
      callback() {
        console.log('callback 999～～～')
      },
      open(options) {
        this.$refs.cToast.show({
          // toast类型
          title: options.title,
          type: options.type || 'info',
          // 是否显示图标
          icon: options.icon,
          // 自定义图标
          customIcon: options.customIcon || '',
          // 是否加载状态
          loading: options.loading,
          // 出现位置
          position: options.position || 'center',
          // 持续时间
          duration: options.duration || 2000,
          // 结束跳转url
          url: options.url || '',
          // 跳转传参
          query: options.query || null,
          // toast结束回调
          callback: options.callback || null,
          // 结束后是否返回上一级 优先级高于url
          back: options.back || false
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      margin: #{topx(10)};
    }

    .item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      view {
        margin: 20rpx;
      }
    }
  }
</style>
