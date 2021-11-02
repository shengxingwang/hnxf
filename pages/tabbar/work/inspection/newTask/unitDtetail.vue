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
          {txt:'单位基本信息'},
          {txt:'消防安全管理制度及职责'},
          {txt:'防火巡查检查'},
          {txt:'隐患管理'},
          {txt:'自主评估风险'},
          {txt:'公开承诺'},
          {txt:'消防工作记录'},
          {txt:'消控室管理'},
          {txt:'微型消防站'},
          {txt:'累积计分统计'},
          {txt:'好差评管理'},
          {txt:'数据中心'},
          {txt:'文书管理'}
        ]
			};
		}
	}
</script>

<style lang="scss" scoped>
  .inspection-wrap{
    padding:32rpx;
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
