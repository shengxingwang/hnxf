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
      <text class="add-new" @click="addUnit">新增单位</text></view>
      <view class="tab">
        <view class="tab-head">
          <view class="th">单位名称</view>
          <view class="th">建筑管理</view>
          <view class="th">选择</view>
        </view>
        <view class="tab-body">
          <view class="tr">
            <view class="td">汨罗市三德酒店管理有限公司</view>
            <view class="td">1家</view>
            <view class="td"><van-checkbox v-model="checked"></van-checkbox></view>
          </view>
        </view>
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
				showMore:false,
        checked:false
			}
		},
		methods: {
			addUnit(){
				uni.navigateTo({
				  url:'/pages/work/inspection/newTask/newUnit'
				})
			}
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
      .tab{
        width: 100%;
        margin: 32rpx 0;
        .tab-head{
          width: 100%;
          display: flex;
          .th{
             text-align: center;
            font-size: 28rpx;
            font-weight: 600;
            line-height: 72rpx;
            border-top: 1px solid #e6e6e6;
            border-left: 1px solid #e6e6e6;
            width: 20%;
            &:first-child{
              flex: 1;
            }
            &:last-child{
              border-right: 1px solid #e6e6e6;
            }
          }
        }
        .tab-body{
          width: 100%;
        }
        .tr{
          display: flex;
          .td{
            text-align: center;
            font-size: 28rpx;
            line-height: 72rpx;
            border-top: 1px solid #e6e6e6;
            border-left: 1px solid #e6e6e6;
            width: 20%;
            &:first-child{
              flex: 1;
            }
            &:last-child{
              display: flex;
              justify-content: center;
              align-items: center;
              border-right: 1px solid #e6e6e6;
            }
          }
          &:last-child{
            .td{
              border-bottom: 1px solid #e6e6e6;
            }
          }
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
        margin-left: 20rpx;
      }
    }
  }
</style>
