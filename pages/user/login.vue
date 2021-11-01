<template>
	<view class="sign-in">
    <view class="logo">
      <image mode="aspectFill" src="../../static/img/release.png"></image>
    </view>
		<div class="sign_form">
      <van-field v-model="form.userName" left-icon="../../static/img/release.png" placeholder="请输入用户名" />
      <van-field v-model="form.password" left-icon="../../static/img/release.png" placeholder="请输入密码" />
      <view class="flex-row">
          <van-field v-model="sms" left-icon="../../static/img/release.png" clearable placeholder="请输入验证码">
         </van-field>
         <image class="yzm" src="../../static/img/release.png"></image>
      </view>
      <view class="nav-wrap link-wrap">
        <view class="rember-btn"><van-radio icon-size="16px" name="1">记住密码</van-radio></view>
        <view class="search-pwd">忘记密码？<text class="txt">找回密码</text></view>
      </view>
      <view class="btn-wrap">
        <van-button type="info"  class="sub-btn" @click="getIosLogin">登录</van-button>
      </view>

		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        form:{

        }
			};
		}
	}
</script>

<style lang="scss" scoped>
.sign-in{
  .logo{
    margin: 100rpx auto;
    width: 120rpx;
    height: 120rpx;
    image{
      width: 100%;
      height: 100%;
    }
  }
  padding: 0  42rpx;
  .sign_form{
    text-align: center;
    .nav-wrap{
      padding: 0 32rpx;
      margin: 60rpx 0 100rpx;
    }
    .link-wrap{
      display: flex;
      .search-pwd{
        margin-left: 100rpx;
      }
      .txt{
        color: #1989fa;
      }
    }
  }
  .yzm{
    width: 240rpx;
    height:100rpx;
    margin-top: 10rpx;
  }
  .btn-wrap{
    margin: 60rpx 0 0;
  }
}
</style>
<style lang="scss">
  .sign-in{
    /deep/ .van-field__input{
      height: 72rpx;
      line-height:72rpx;
    }
    /deep/ .van-cell__left-icon{
      margin-top: 20rpx;
    }
    /deep/ .van-button{
      width: 230rpx;
      height: 74rpx;
    }
  }

</style>
