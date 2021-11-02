<template>
	<view class="my-wrap">
    <view class="header-image">
      <image src="../../../static/img/release.png"></image>
    </view>
    <view class="info-opera area-wrap">
      <uni-list>
        <uni-list-item
          v-for="(item, index) in infoList"
          @click="goDet(item)"
          :key="index"
          :title="item.txt"
        ></uni-list-item>
      </uni-list>
    </view>
    <view class="service-opera area-wrap">
      <uni-list>
        <uni-list-item
          v-for="(item, index) in operaList"
          @click="goDet(item)"
          :key="index"
          :title="item.txt"
        ></uni-list-item>
      </uni-list>
    </view>
    <view class="update-opera area-wrap">
      <uni-list>
        <uni-list-item
          v-for="(item, index) in update"
          @click="goDet(item)"
          :key="index"
          :title="item.txt"
        ></uni-list-item>
      </uni-list>
    </view>
    <view class="logout-btn">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        infoList:[
          {txt:'账号信息'},
          {txt:'清除本地缓存'},
        ],
        operaList:[
          {txt:'功能介绍'},
          {txt:'法律声明'},
          {txt:'用户服务协议'},
        ],
        update:[
          {txt:'检查更新'}
        ]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
  page{
    background: #F7F8FF;
  }
  .my-wrap{
    /deep/ .uni-list-item{
      padding: 0 30rpx;
    }
  }
</style>
<style lang="scss" scoped>
	.my-wrap {
    padding:32rpx;
    .header-image{
      width: 100%;
      display: flex;
      align-items: center;
      image{
        width: 120rpx;
        height: 120rpx;
        border-radius: 12rpx;
        margin: 0 auto;
      }
    }
    .area-wrap{
      width: 100%;
      background: #fff;
      border-radius: 12rpx;
      overflow: hidden;
      box-shadow: 0px 1px 6px 1px #e6e6e6;
      margin-top: 32rpx;
      &:first-child{
        margin-top: 0;
      }
    }
    .logout-btn{
      width: 100%;
      line-height: 80rpx;
      text-align: center;
      color: #0379FF;
      border-radius: 80rpx;
      box-shadow: 0px 1px 6px 1px #ddd;
      margin-top: 100rpx;
    }
	}
</style>
