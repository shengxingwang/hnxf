<template>
	<view class="work-wrap">
		<view class="worker">
			<view class="face-img">
				<image src="../../../static/img/qa.png"></image>
			</view>
      <view class="worker-info">
        <view class="worker-name">展大侠</view>
        <view class="worker-address">湖南省 长沙市 岳麓区 消防支队</view>
        <view class="worker-tag">
          <view class="tag-item">标签</view>
          <view class="tag-item">标签</view>
        </view>
      </view>
		</view>
    <view class="work-manage guid-wrap">
      <view class="title">工作管理</view>
      <view class="guid-list">
        <view class="item" v-for="(item,index) in workManageList" :key="index">
          <view class="btn-img">
            <image :src="item.iconPath"></image>
          </view>
          <view class="btn-txt">{{item.btnTxt}}</view>
        </view>
      </view>
    </view>
    <view class="work-manage guid-wrap">
      <view class="title">工作管理</view>
      <view class="guid-list">
        <view class="item" v-for="(item,index) in workManageList" :key="index">
          <view class="btn-img">
            <image :src="item.iconPath"></image>
          </view>
          <view class="btn-txt">{{item.btnTxt}}</view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
         workManageList:[
           {btnTxt:'消防监督检查', iconPath:'./../../../static/img/video.png'},
           {btnTxt:'双随机', iconPath:'./../../../static/img/video.png'},
           {btnTxt:'开业前消防安全检查', iconPath:'./../../../static/img/video.png'},
           {btnTxt:'专项整治', iconPath:'./../../../static/img/video.png'},
           {btnTxt:'部门联合检查', iconPath:'./../../../static/img/video.png'},
           {btnTxt:'督办核查', iconPath:'./../../../static/img/video.png'},
           {btnTxt:'逐级复核', iconPath:'./../../../static/img/video.png'}
         ]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.work-wrap{
    width: 100%;
    .worker{
      width: 100%;
      padding: 28rpx 32rpx;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      .face-img{
        width: 146rpx;
        height: 146rpx;
        border-radius: 50%;
        overflow: hidden;
      }
      .worker-info{
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 44rpx;
        .worker-name{
          font-size: 32rpx;
          color: #333;
          font-weight: 600;
        }
        .worker-address{
          font-size: 24rpx;
          color: #999;
        }
        .worker-tag{
          .tag-item{
            font-size: 24rpx;
            display: inline-block;
            padding: 6rpx 12rpx;
            background: rgba(31, 101, 176, 0.14);
            color:#1F65B0;
            margin-right: 12rpx;
            &:last-child{
              margin-right:0;
            }
          }
        }
      }
    }
    .guid-wrap{
      padding: 30rpx 32rpx;
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
      &:last-child{
        border-bottom:none;
      }
      .title{
        font-size: 32rpx;
        line-height: 50rpx;
        margin-bottom: 30rpx;
      }
      .guid-list{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item{
          width: 144rpx;
          text-align: center;
          margin-bottom: 32rpx;
          .btn-img{
            width: 60rpx;
            height: 60rpx;
            margin: 0 auto;
          }
          .btn-txt{
            margin-top: 14rpx;
            font-size: 28rpx;
            color: #101010;
            line-height: 40rpx;
            text-align: center;
          }
        }
        &::after {
            content: '';
            flex: auto;    /* 或者flex: 1 */
        }
      }
    }
  }
</style>
