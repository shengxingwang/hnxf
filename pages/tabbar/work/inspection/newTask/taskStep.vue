<template>
	<view class="step-wrap">
    <view class="step-status">
      <uni-steps active-color="#fff" :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="stepIndex"></uni-steps>
    </view>
    <view v-if="stepIndex===1" class="step-content">
      <view class="cream-img unit-img">
        <view class="icon-wrap">
          <view class="icon">
            <image src="../../../../../static/img/qa.png"></image>
          </view>
          <view class="txt">单位门头照片</view>
        </view>
      </view>
      <view class="cream-img log-img">
        <view class="icon-wrap">
          <view class="icon">
            <image src="../../../../../static/img/qa.png"></image>
          </view>
          <view class="txt">佩戴执法记录仪照片</view>
        </view>
      </view>
    </view>
    <view v-if="stepIndex===2" class="step-content">
      <view class="eviden-info">
        <view class="tit">执法取证信息：</view>
        <view class="eviden-img unit-img">
          <view class="img-item">
            <view class="icon">
              <image src="../../../../../static/img/qa.png"></image>
            </view>
          </view>
          <view class="img-item">
            <view class="icon">
              <image src="../../../../../static/img/qa.png"></image>
            </view>
          </view>
        </view>
        <view class="tit">备注：</view>
        <textarea class="remark" placeholder-style="color:#999" placeholder="请输入"/>
      </view>
    </view>
    <view v-if="stepIndex===3" class="step-content">
      <view class="eviden-info">
        <view class="tit">执法取证信息：</view>
        <view class="eviden-img unit-img">
          <view class="img-item">
            <view class="icon">
              <image src="../../../../../static/img/qa.png"></image>
            </view>
          </view>
          <view class="img-item">
            <view class="icon">
              <image src="../../../../../static/img/qa.png"></image>
            </view>
          </view>
        </view>
        <view class="tit">备注：</view>
        <textarea class="remark" placeholder-style="color:#999" placeholder="请输入"/>
      </view>
    </view>
    <view class="btn-wrap">
      <view class="next-btn radius-btn">下一步</view>
      <view class="save-btn radius-btn">保存</view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        stepIndex:3
			};
		}
	}
</script>

<style lang="scss" scoped>
  .step-wrap{
    .step-status{
      background: #1F65B0;
      padding:32rpx;
    }
    .step-content{
      width: 100%;
      padding:50rpx;
      .cream-img{
        width: 620rpx;
        height:360rpx;
        background: #e6e6e6;
        border-radius: 10rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:last-child{
          margin-top: 50rpx;
        }
        .icon-wrap{
          text-align: center;
          width: 100%;
          .icon{
            width: 96rpx;
            height: 96rpx;
            margin: 0 auto;
          }
          .txt{
            font-size: 24rpx;
            line-height: 60rpx;
            color:#1F65B0;
          }
        }
      }
      .eviden-info{
        .eviden-img{
          display: flex;
          justify-content: space-between;
          .img-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 314rpx;
            height: 182rpx;
            background: #e6e6e6;
            border-radius: 10rpx;
            .icon{
              width: 78rpx;
              height: 78rpx;
              margin: 0 auto;
            }
          }
        }
        .tit{
          line-height: 76rpx;
        }
        .remark{
          width: 100%;
          height: 200rpx;
          border-radius: 10rpx;
          border: 1px solid #e6e6e6;
          padding-left: 10rpx;
        }
      }
    }
    .btn-wrap{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 100rpx;
      .radius-btn{
        color: #fff;
        width: 280rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        background: #1F65B0;
        border-radius: 80rpx;
      }
      .save-btn{
        background: #599ADF;
        margin-left: 20rpx;
      }
    }
  }
</style>
<style lang="scss">
</style>
