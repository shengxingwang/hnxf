<template>
	<view class="sign-in">
    <view class="tit">找回密码</view>
		<div class="sign_form">
      <van-field
        v-model="sms"
        clearable
        placeholder="请输入手机号码"
      >
        <template #button>
          <van-button size="small" type="info">发送验证码</van-button>
        </template>
      </van-field>
      <van-field v-model="form.password" left-icon="../../static/img/release.png" placeholder="请输入短信验证码" />
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
  .tit{
    color: #4994df;
    line-height: 200rpx;
    font-size: 60rpx;
    text-align: center;
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
    /deep/ .van-button--normal{
      width: 230rpx;
      height: 74rpx;
    }
    /deep/ .van-button--small{
      width: 200rpx;
      height: 68rpx;
    }
  }

</style>
