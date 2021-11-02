<template>
	<view class="new-task">
		<view class="retrieve">
      <input class="input-item" type="text" placeholder="请输入单位名称" />
      <view v-if="showMore" class="search-more">
        <input class="input-item" type="text" placeholder="单位地址" />
        <input class="input-item" type="text" placeholder="单位类型" />
        <input class="input-item" type="text" placeholder="消防管辖" />
        <input class="input-item" type="text" placeholder="所管辖单位" />
        <input class="input-item" type="text" placeholder="入驻情况" />
      </view>
      <view class="collapse-wrap">
        <view v-if="!showMore" class="coll-btn" @click="showMore=!showMore">
          <view class="line"></view>
          <view class="txt">高级检索</view>
          <view class="line"></view>
        </view>
        <view v-else class="coll-btn" @click="showMore=!showMore">
          <view class="line"></view>
          <view class="txt">收起检索</view>
          <view class="line"></view>
        </view>
        <view class="collapse-icon"></view>
      </view>
      <view class="retrieve-btn btn">检索</view>
    </view>
    <view class="retrieve-content">
      <view class="tip">
        <text class="txt">未检索到被检查单位请使用高级检索或</text>
      <text class="add-new">新增单位</text></view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMore:false
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
  .new-task{
    width: 100%;
    padding:32rpx;
    .input-item{
      width: 100%;
      line-height: 72rpx;
      height: 72rpx;
      border: 1px solid #e6e6e6;
      border-radius: 6rpx;
      margin-bottom: 20rpx;
    }
    .collapse-wrap{
      position: relative;
      width: 100%;
      display: flex;
      height: 80rpx;
      .coll-btn{
        width: 100%;
        display: flex;
        line-height: 80rpx;
        font-size: 28rpx;
        .txt{
          margin: 0 20rpx;
        }
        .line{
          content: "";
          flex: 1;
          height:40rpx;
          border-bottom: 1px solid #bbb;
        }
      }
    }
    .retrieve-btn{
      width: 100%;
      height: 86rpx;
      line-height: 86rpx;
      text-align: center;
      color: #fff;
      background: #1F65B0;
      margin: 32rpx 0;
    }
    .retrieve-content{
      .tip{
        font-size: 28rpx;
        .txt{
          color: #E01919;
        }
        .add-new{
          color: #1F65B0;
        }
      }
    }
  }
</style>
