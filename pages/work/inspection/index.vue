<template>
	<view class="inspection-wrap">
    <uni-list>
      <uni-list-item
        v-for="(item, index) in linkList"
        @click="goDet(item)"
        :key="index"
        :title="item.txt"
      ></uni-list-item>
    </uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        linkList:[
          {txt:'消防监督抽查', pageUrl:'/pages/tabbar/work/inspection/spotCheck/index'},
          {txt:'举报投诉核查'},
          {txt:'大型活动安全检查任务'},
          {txt:'责令限期改正复查'},
          {txt:'申请恢复使用、生产、经营的检查'},
          {txt:'申请解除临时查封的检查'},
          {txt:'居民住宅区的物业服务企业检查'},
         {txt:'其他检查'}
        ]
			};
		},
    methods:{
      goDet(item){
        uni.navigateTo({
          url:item.pageUrl
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
  .inspection-wrap{
    padding: 0 32rpx;
  }
</style>
<style lang="scss">
  .inspection-wrap{
    /deep/ .uni-list-item{
      padding-left: 0;
    }
    /deep/ .uni-list-item__container{
      padding: 28rpx 0;
    }
  }

</style>
