<template>
	<view class="step-wrap">
    <view class="step-status">
      <uni-steps active-color="#fff" :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="stepIndex"></uni-steps>
    </view>
    <view v-if="stepIndex===0" class="step-content">
      <view class="cream-img unit-img">
        <view class="icon-wrap">
          <view class="icon">
            <image src="../../../../static/img/qa.png"></image>
          </view>
          <view class="txt">单位门头照片</view>
        </view>
      </view>
      <view class="cream-img log-img">
        <view class="icon-wrap">
          <view class="icon">
            <image src="../../../../static/img/qa.png"></image>
          </view>
          <view class="txt">佩戴执法记录仪照片</view>
        </view>
      </view>
    </view>
    <view v-if="stepIndex===1" class="step-content">
      <view class="eviden-info">
        <view class="tit">执法取证信息：</view>
        <view class="eviden-img unit-img">
          <view class="img-item">
            <view class="icon">
              <image src="../../../../static/img/qa.png"></image>
            </view>
          </view>
          <view class="img-item">
            <view class="icon">
              <image src="../../../../static/img/qa.png"></image>
            </view>
          </view>
        </view>
        <view class="tit">备注：</view>
        <textarea class="remark" placeholder-style="color:#999" placeholder="请输入"/>
      </view>
    </view>
    <view v-if="stepIndex===2" class="step-content result-wrap">
      <view class="check-result">
        <view class="tit">是否合格</view>
        <view class="pick">
          <picker @change="bindPickerChange" :value="checkReultIndex" :range="checkReultOption">
              <view :class="checkReultIndex?'uni-input':'uni-input pla'">{{checkReultOption[checkReultIndex]}}</view>
              <!-- <view class="pla"  v-else>请选择</view> -->
          </picker>
        </view>
      </view>
      <view class="check-look">
        <view class="look-btn has-icon-btn">
          <image src="../../../../static/img/qa.png"></image>
          <view class="txt">检查结果查看</view>
        </view>
      </view>
      <view class="sign-confirm">
        <view class="sign-wrap">
          <view class="sign-btn has-icon-btn">
            <image src="../../../../static/img/qa.png"></image>
            <view class="txt">主办人签字</view>
          </view>
          <view class="sign-btn has-icon-btn">
            <image src="../../../../static/img/qa.png"></image>
            <view class="txt">协办人签字</view>
          </view>
        </view>
        <view class="sign-big-btn has-icon-btn">
          <image src="../../../../static/img/qa.png"></image>
          <view class="txt">被检查单位随同检查人员（签名）</view>
        </view>
      </view>
      <view class="chek-book">
        <view class="line">
          <view class="checkbox"><van-checkbox v-model="checked"></van-checkbox></view>
          <view class="tit">责令整改</view>
          <view class="pick">
            <picker @change="bindPickerChange" :value="checkReultIndex" :range="checkReultOption">
                <view :class="checkReultIndex?'uni-input':'uni-input pla'">{{checkReultOption[checkReultIndex]}}</view>
                <!-- <view class="pla"  v-else>请选择</view> -->
            </picker>
          </view>
        </view>
        <view class="line">
          <view class="checkbox"><van-checkbox v-model="checked"></van-checkbox></view>
          <view class="tit">当场处罚</view>
          <view class="pick">
            <picker @change="bindPickerChange" :value="checkReultIndex" :range="checkReultOption">
                <view :class="checkReultIndex?'uni-input':'uni-input pla'">{{checkReultOption[checkReultIndex]}}</view>
                <!-- <view class="pla"  v-else>请选择</view> -->
            </picker>
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
        stepIndex:2,
        checkReultIndex:0,
        checkReultOption: ['请选择','检查合格', '检查不合格'],
			};
		},
    methods:{
      bindPickerChange: function(e) {
          console.log('picker发送选择改变，携带值为', e.target.value)
          this.checkReultIndex = e.target.value
      }
    }
	}
</script>

<style lang="scss" scoped>
  .step-wrap{
    padding-bottom: 100rpx;
    .step-status{
      background: #1F65B0;
      padding:32rpx;
    }
    .step-content{
      width: 100%;
      padding:50rpx;
      .cream-img{
        width: 620rpx;
        height:360rpx;
        background: #e6e6e6;
        border-radius: 10rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:last-child{
          margin-top: 50rpx;
        }
        .icon-wrap{
          text-align: center;
          width: 100%;
          .icon{
            width: 96rpx;
            height: 96rpx;
            margin: 0 auto;
          }
          .txt{
            font-size: 24rpx;
            line-height: 60rpx;
            color:#1F65B0;
          }
        }
      }
      .eviden-info{
        .eviden-img{
          display: flex;
          justify-content: space-between;
          .img-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 314rpx;
            height: 182rpx;
            background: #e6e6e6;
            border-radius: 10rpx;
            .icon{
              width: 78rpx;
              height: 78rpx;
              margin: 0 auto;
            }
          }
        }
        .tit{
          line-height: 76rpx;
        }
        .remark{
          width: 100%;
          height: 200rpx;
          border-radius: 10rpx;
          border: 1px solid #e6e6e6;
          padding-left: 10rpx;
        }
      }
    }
    .result-wrap{
      width: 100%;
      .check-result{
        display: flex;
        padding: 30rpx 0;
        border-bottom: 1px dashed #e6e6e6;
        line-height: 68rpx;
        .pick{
          flex: 1;
        }
        .tit{
          margin-right: 30rpx;
        }
      }
      .check-look{
        width: 100%;
        padding: 30rpx 0;
        border-bottom: 1px dashed #e6e6e6;
      }
      .sign-confirm{
        padding: 30rpx 0;
        border-bottom: 1px dashed #e6e6e6;
        .sign-wrap{
          display: flex;
          justify-content: space-between;
          .sign-btn{
            width: 284rpx;
          }
        }
        .sign-big-btn{
          margin-top: 30rpx;
        }
      }
      .chek-book{
        width: 100%;
        padding: 30rpx 0;
        // border-bottom: 1px dashed #e6e6e6;
        .line{
          display: flex;
          justify-content: space-between;
          height: 68rpx;
          margin-top: 30rpx;
          align-items: center;
          &:first-child{
            margin-top:0;
          }
          .checkbox{
            width: 60rpx;
          }
          .tit{
            line-height: 68rpx;
            margin-right: 20rpx;
          }
          .pick{
            line-height: 68rpx;
            flex: 1;
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
        background: #599ADF;
        margin-left: 20rpx;
      }
    }
    .has-icon-btn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      height: 200rpx;
      background: #e6e6e6;
      border-radius: 12rpx;
      image{
        width: 60rpx;
        height: 60rpx;
        margin: 0 auto;
      }
      .txt{
        line-height: 44rpx;
        font-size: 24rpx;
        color: #1F65B0;
      }
    }
  }
  .uni-input{
    width: 100%;
    line-height: 68rpx;
    height: 68rpx;
    padding-left: 10rpx;
    border: 1px solid #e6e6e6;
    border-radius:12rpx;
    &.pla{
      color: #999;
    }
  }
</style>
<style lang="scss">
</style>
