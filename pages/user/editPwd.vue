<template>
	<view class="edit-pwd-wrap">
    <view class="tit">修改密码</view>
		<div class="sign_form">
      <van-field v-model="form.userName" left-icon="../../static/img/release.png" placeholder="请输入用户名" />
      <van-field v-model="form.password" left-icon="../../static/img/release.png" placeholder="请输入密码" />
      <view class="tip">密码不低于8位，必须包含字母及符号</view>
      <view class="btn-wrap">
        <van-button type="info"  class="sub-btn" @click="getIosLogin">确认修改</van-button>
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
.edit-pwd-wrap{
  .tit{
    color: #1F65B0;
    line-height: 200rpx;
    font-size: 60rpx;
    text-align: center;
  }
  padding: 0  42rpx;
  .sign_form{
    text-align: center;
    .tip{
      text-align: left;
      padding: 30rpx;
      font-size: 24rpx;
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
  .edit-pwd-wrap{
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
