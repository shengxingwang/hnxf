<template>
	<view class="report-check-wrap">
    <uni-list>
      <uni-list-item @click="goDet(0)" title="举报投诉处理"  rightText="（3条未处理）"></uni-list-item>
      <uni-list-item @click="goDet(1)" title="举报投诉核查"  rightText="（1条未处理）"></uni-list-item>
    </uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        linkList:['/pages/work/inspection/reportCheck/reportHandle','/pages/work/inspection/reportCheck/checkHandle']
			};
		},
    methods:{
      goDet(idx){
        uni.navigateTo({
          url:this.linkList[idx]
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
  .report-check-wrap{
    padding: 0 32rpx;
  }
</style>
<style lang="scss">
  .report-check-wrap{
    /deep/ .uni-list-item{
      padding-left: 0;
    }
    /deep/ .uni-list-item__container{
      padding: 28rpx 0;
    }
    /deep/ .uni-list-item__extra-text{
      color: #FF0000;
    }
  }
</style>
