<template>
	<view class="my-wrap">
    <view class="header-image">
      <image src="../../../static/img/release.png"></image>
    </view>
    <view class="info-opera area-wrap">
      <uni-list>
        <uni-list-item @click="goDet" title="账号信息"></uni-list-item>
        <uni-list-item @click="clearStorage" title="清除本地缓存"  :rightText="storageSize"></uni-list-item>
      </uni-list>
    </view>
    <view class="service-opera area-wrap">
      <uni-list>
        <uni-list-item @click="goDet" title="功能介绍"></uni-list-item>
        <uni-list-item @click="goDet" title="法律声明"></uni-list-item>
        <uni-list-item @click="goDet" title="用户服务协议"></uni-list-item>
      </uni-list>
    </view>
    <view class="update-opera area-wrap">
      <uni-list>
        <uni-list-item @click="goDet" title="检查更新"></uni-list-item>
      </uni-list>
    </view>
    <view class="logout-btn">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        storageSize:0,
				title: 'Hello',
        infoList:[]
			}
		},
		onLoad() {
      this.getStorageSize()
		},
		methods: {
      goDet(item){
        if(item.operaName){
          let handleName = item.operaName
          this[handleName]();
        }

      },
      getStorageSize:function(){//获取app缓存
        let that = this;
        uni.getStorageInfo({
          success(res) {
            let size = res.currentSize;
            if (size < 1024) {
              that.storageSize = size + ' B';
            } else if (size/1024>=1 && size/1024/1024<1) {
              that.storageSize = Math.floor(size/1024*100)/100 + ' KB';
            } else if (size/1024/1024>=1) {
              that.storageSize = Math.floor(size/1024/1024*100)/100 + ' M';
            }
          }
        })
      },
      clearStorage:function (){//清除获取app缓存
        let that = this;
        uni.showModal({
          title:'提示',
          content:'确定清除缓存吗?',
          confirmText:'立即清除',
          success(res) {
            if(res.confirm){
              uni.clearStorageSync();
              //重新获取并显示清除后的缓存大小
              that.getStorageSize();
              uni.showToast({
                title:'清除成功'
              })
            }
          }
        })
      }
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
