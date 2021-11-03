<template>
	<view class="task-detail">
        <view class="task-no">项目编号：321451323128976</view>
        <view class="main-wrap">
          <view class="task-info">
              <view class="name">岳阳市岳阳楼区自由天空网吧</view>
              <view class="address">地址：岳阳市岳阳楼区金鹗中路金虹广场2层 </view>
              <view class="tag">
                  <view class="tag-tit">标签</view>
                  <view class="tag-val">
                      <text>人员密集场所</text>
                      <text>其他公共娱乐场所</text>
                  </view>
                  <view class="tag-edit">修改</view>
              </view>
          </view>
          <view class="unit-info">
              <view class="info-line">单位类别：重点单位</view>
              <view class="info-line">项目类别：消防监督抽查 </view>
              <view class="info-line">消防安全责任人：罗灿明  [电话：180 7571 5678] </view>
              <view class="info-line">消防安全管理人：姚    红  [电话：134 6926 3726]</view>
              <view class="info-line">检查完成时间：   2021-4-29</view>
              <view class="info-line">承 办 人：杨XXX(主)、周XXX </view>
              <view class="info-line">联合检查部门：/</view>
              <view class="info-line">消防管辖：岳阳市消防救援支队 /</view>
          </view>
          <view class="select-wrap">
              <view class="tit">请选择相适应的检查指引</view>
              <view class="select-item">
                  <picker @change="bindPickerChange" :value="index" :range="array">
                      <view v-if="index" class="uni-input">{{array[index]}}</view>
                      <view class="pla" v-else>请选择</view>
                  </picker>
              </view>
              <view class="select-item">
                  <picker @change="bindPickerChange" :value="index" :range="array">
                      <view v-if="index" class="uni-input">{{array[index]}}</view>
                      <view class="pla"  v-else>请选择</view>
                  </picker>
              </view>
          </view>
          <view class="task-status">检查状况：<text class="status">处理中</text></view>
          <view class="unit-link">被检查单位详情</view>
        </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showMore:false,
                checked:false,
                index:'',
                array: ['请选择','中国', '美国', '巴西', '日本'],
			}
		},
		methods: {
            bindPickerChange: function(e) {
                console.log('picker发送选择改变，携带值为', e.target.value)
                this.index = e.target.value
            }
		}
	}
</script>

<style lang="scss" scoped>
  .task-detail{
      .task-no{
          padding: 24rpx 32rpx;
          color: #1F65B0;
          width: 100%;
          border-bottom: 1px solid #e6e6e6;
      }
      .main-wrap{
        padding: 0 32rpx;
        .task-info{
          padding: 28rpx 0;
          border-bottom: 1px solid #e6e6e6;
           line-height: 44rpx;
          .name{
            font-size: 32rpx;
            font-weight: 600;

          }
          .address{
            font-size: 24rpx;
            color: #1F65B0;
          }
          .tag{
            display: flex;
            .tag-tit{
              text-align: center;
              font-size: 24rpx;
              width: 72rpx;
              line-height: 44rpx;
              color: #1F65B0;
              background: rgba(31, 101, 176, 0.14);
            }
            .tag-val{
              font-size: 24rpx;
              text{
                margin: 0 14rpx;
              }
            }
            .tag-edit{
              font-size: 28rpx;
              color: #1F65B0;
              border-bottom: 1px solid #1F65B0;
            }
          }
        }
        .unit-info{
          width: 100%;
          padding: 28rpx 0;
          border-bottom: 1px solid #e6e6e6;
          .info-line{
            line-height: 60rpx;
            font-size: 28rpx;
          }
        }
        .select-wrap{
          width: 100%;
          padding: 28rpx 0;
          border-bottom: 1px solid #e6e6e6;
          .tit{
            font-size: 32rpx;
            font-weight: 600;
          }
          .select-item{
            border: 1px solid #e6e6e6;
             margin-top: 28rpx;
             .pla{
               padding-left: 10rpx;
               color: #999;
             }
          }
          .uni-input{
            padding-left: 10rpx;
          }
          .uni-input,.select-item{
            width: 100%;
            height: 68rpx;
            line-height: 68rpx;
            border-radius: 6rpx;
          }
        }
        .task-status,.unit-link{
          padding: 28rpx 0;
          border-bottom: 1px solid #e6e6e6;
          line-height: 44rpx;
        }
        .status{
          color: #FF0000;
        }
        .unit-link{

        }
      }
  }
</style>
