<template>
	<view class="spot-check-wrap">
		<view class="screen-wrap">
      <view class="input-wrap">
        <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
            <view v-if="date" class="uni-input">{{date}}</view>
            <view class="pla uni-input">请选择预定检查日期</view>
        </picker>
        <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
            <view v-if="date" class="uni-input">{{date}}</view>
            <view class="pla uni-input">请选择预定检查日期</view>
        </picker>
        <input type="text" class="uni-input" placeholder-style="color:#999" placeholder="请输入内容" />
        <input type="text" class="uni-input" placeholder-style="color:#999" placeholder="请输入内容" />
      </view>
      <view class="btn">查询</view>
    </view>
    <view class="creat-duty-btn btn" @click="createTaek">生成任务</view>
    <view class="task-wrap">
      <view class="item">
        <view class="line">
          <text class="tit">序号：</text>
          <text class="val">1</text>
        </view>
        <view class="line">
          <text class="tit">单位名称：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">单位地址：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">预定日期：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">截至日期：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">检查日期：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">状态：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">承办人：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">操作：</text>
          <text class="val btn-wrap">
            <view class="btn gary-btn">删除</view>
            <view class="btn primary-btn">分工</view>
          </text>
        </view>
      </view>
      <view class="item">
        <view class="line">
          <text class="tit">序号：</text>
          <text class="val">1</text>
        </view>
        <view class="line">
          <text class="tit">单位名称：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">单位地址：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">预定日期：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">截至日期：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">检查日期：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">状态：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">承办人：</text>
          <text class="val">案发时阿松大</text>
        </view>
        <view class="line">
          <text class="tit">操作：</text>
          <text class="val btn-wrap">
            <view class="btn gary-btn">删除</view>
            <view class="btn primary-btn">分工</view>
          </text>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
    methods:{
      createTaek(){
        uni.navigateTo({
          url:'/pages/work/inspection/newTask/index'
        })
      },
      bindDateChange(e){
        console.log(e.target.value)
      }
    }
	}
</script>

<style lang="scss" scoped>
  .spot-check-wrap{
     padding:32rpx;
    .screen-wrap{
      width: 100%;
      display: flex;
      .input-wrap{
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .uni-input{
          font-size: 24rpx;
          width: 240rpx;
          height: 64rpx;
          line-height: 64rpx;
          padding-left: 10rpx;
          border: 1px solid #e6e6e6;
          border-radius: 6rpx;
          margin-bottom: 10rpx;
          &.pla{
            color: #999;
          }
        }
      }
      .btn{
        width: 160rpx;
        line-height: 138rpx;
        text-align: center;
        height: 138rpx;
        background: #A4ADB3;
        color: #fff;
        margin-left: 20rpx;
      }
    }
    .creat-duty-btn{
      width: 100%;
      height: 86rpx;
      line-height: 86rpx;
      text-align: center;
      color: #fff;
      background: #1F65B0;
      margin: 32rpx 0;
    }
    .task-wrap{
      border-top: 1px solid #e6e6e6;
      .item{
        padding: 30rpx 0;
        border-bottom: 1px dashed #e6e6e6;
        &:last-child{
          border-bottom:none;
        }
      }
      .line{
        display: flex;
      }
      .tit,.val{
        line-height: 60rpx;
        font-size: 24rpx;
      }
      .tit{
        color: #999;
      }
      .val{
        color: #101010;
      }
      .btn{
        display: inline-block;
        padding:0 30rpx;
        margin-left: 12rpx;
        line-height: 42rpx;
      }
      .btn-wrap{
        display: flex;
      }
      .gary-btn{
        color: #1F65B0;
        background: #fff;
        border: 1px solid #1F65B0;
      }
      .primary-btn{
        background: #1F65B0;
        color: #fff;
      }
    }
  }
</style>
