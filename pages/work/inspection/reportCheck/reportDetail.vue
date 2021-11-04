<template>
    <view class="handle-wrap">
      <view class="info-wrap">
        <view class="line">
          <view class="tit">序号：</view>
          <view class="val">223</view>
        </view>
        <view class="line">
          <view class="tit">标题：</view>
          <view class="val">新峰房地产公司无消防水源违法搭建</view>
        </view>
        <view class="line">
          <view class="tit">地区：</view>
          <view class="val">长沙市 雨花区 雨花区 云梦北路16#</view>
        </view>
        <view class="line">
          <view class="tit">来源：</view>
          <view class="val">APP/微信</view>
        </view>
        <view class="line">
          <view class="tit">投书时间：</view>
          <view class="val">2021-07-08 11:12:33</view>
        </view>
        <view class="line">
          <view class="tit">处理时间：</view>
          <view class="val">2021-07-08 11:12:33</view>
        </view>
        <view class="line">
          <view class="tit">处理期限：</view>
          <view class="val">2021-07-08</view>
        </view>
        <view class="line">
          <view class="tit">处理单位：</view>
          <view class="val">岳阳市消防救援支队</view>
        </view>
        <view class="line">
          <view class="tit">投诉内容：</view>
          <view class="val">转办则显示受理单位为巴陵尚都小区消防通道被物业锁闭一事，我致电岳阳96119。接报后，第二天即有负责的消防干警到现场察看，并立即要求物业改正错误。现物业已将被锁闭的西侧通道打开（东侧依然被锁闭）。瑾致此信，表示感谢。</view>
        </view>
        <view class="line">
          <view class="tit">图片附件：</view>
          <view class="val img-list">
            <image src="../../../../static/img/release.png"></image>
            <image src="../../../../static/img/release.png"></image>
            <image src="../../../../static/img/release.png"></image>
          </view>
        </view>
        <view class="line">
          <view class="tit">投诉人：</view>
          <view class="val">张三</view>
        </view>
        <view class="line">
          <view class="tit">联系电话：</view>
          <view class="val">18655224455</view>
        </view>
        <view class="line">
          <view class="tit">身份证：</view>
          <view class="val">430426156945256255</view>
        </view>
      </view>
      <view class="repeat-wrap">
        <view class="tit">直接答复：</view>
        <textarea class="repeat" placeholder-style="color:#999" placeholder="请输入"/>
        <view class="rig-btn-wrap">
          <view class="btn btn-primary">直接答复</view>
        </view>
      </view>
      <view class="opera-btn-wrap">
        <view class="btn btn-orange">转办</view>
        <view class="btn btn-green">提取</view>
        <view class="btn btn-grey">作废</view>
      </view>
    </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .handle-wrap{
    width: 100%;
    padding: 40rpx 32rpx 100rpx;
    .info-wrap{
      padding: 10rpx 0 40rpx;
      border-bottom: 1px dashed #e6e6e6;
      .line{
        font-size:28rpx;
        display: flex;
        line-height: 64rpx;
        .tit{
          width: 140rpx;
          color: #999;
        }
        .val{
          color: #101010;
          margin-left: 10rpx;
          flex: 1;
          &.img-list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            image{
              width: 240rpx;
              height: 150rpx;
              background: #e6e6e6;
              margin-bottom: 20rpx;
            }
          }
        }
      }
    }
    .repeat-wrap{
      width: 100%;
      padding:30rpx 0;
      border-bottom: 1px solid #e6e6e6;
      .tit{
        line-height: 76rpx;
      }
      .repeat{
        width: 100%;
        height: 200rpx;
        border-radius: 10rpx;
        border: 1px solid #e6e6e6;
        padding-left: 10rpx;
      }
      .rig-btn-wrap{
        text-align: right;
        width: 100%;
        .btn-primary{
          display: inline-block;
          font-size: 28rpx;
          line-height: 88rpx;
          width: 198rpx;
          margin-top: 30rpx;
        }
      }
    }
    .opera-btn-wrap{
      width: 100%;
      display: flex;
      margin-top: 30rpx;
      justify-content: space-between;
      .btn{
        line-height: 84rpx;
        width: 198rpx;
      }
    }
  }
</style>
