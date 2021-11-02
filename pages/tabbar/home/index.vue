<template>
	<view class="home-wrap">
    <view class="top-wrap">
      <view class="top-seacrch">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          background="#1f65b0"
          input-align="center"
        />
        <image class="s-code" src="../../../static/img/qa.png"></image>
      </view>
      <view class="top-nav">
        <view class="nav-list">
          <view v-for="(item,index) in topNavList" :key="index" class="nav-item">
            <image class="nav-icon" :src="item.iconPath"></image>
            <view class="nav-tit">{{item.tit}}</view>
          </view>
        </view>
      </view>
    </view>
    <van-notice-bar
      :scrollable="false"
      left-icon="volume-o"
      mode="closeable"
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
    <view class="todo-wrap">
     <view class="todo-content">
        <view class="todo-tit">
          <view>我的待办<text class="num">(6)</text></view>
          <view class="opera"><image src="../../../static/img/tabbar/addactive.png"></image></view>
        </view>
        <view class="todo-list">
          <view v-for="(item,index) in todoList" :key="index" class="item">
            <view class="do-date">剩{{item.hasDay}}日</view>
            <view class="do-txt">{{item.txt}}</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image :src="item.iconPath"></image>
            </view>
          </view>
        </view>
     </view>
     <view class="todo-content">
        <view class="todo-tit">
          <view>待批事项<text class="num">(6)</text></view>
          <view class="opera"><image src="../../../static/img/tabbar/addactive.png"></image></view>
        </view>
        <view class="todo-list">
          <view v-for="(item,index) in todoList" :key="index" class="item">
            <view class="do-date">剩{{item.hasDay}}日</view>
            <view class="do-txt">{{item.txt}}</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image :src="item.iconPath"></image>
            </view>
          </view>
        </view>
     </view>
     <view class="todo-content">
        <view class="todo-tit">
          <view>本人主办未结任务<text class="num">(6)</text></view>
          <!-- <view class="opera"><image src="../../../static/img/tabbar/addactive.png"></image></view> -->
          <view class="sele-wrap">
            <picker @change="bindPickerChange" :value="pickIndex" :range="arrOpt">
                <view class="uni-input">{{arrOpt[pickIndex]}}</view>
            </picker>
          </view>
        </view>
        <view class="todo-list no-finally">
          <view v-for="(item,index) in todoList" :key="index" class="item">
            <view class="do-date">剩{{item.hasDay}}日</view>
            <view class="do-txt">{{item.txt}}</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image :src="item.iconPath"></image>
            </view>
          </view>
        </view>
     </view>
    </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
      topNavList:[
        {tit:'双随机',iconPath:'../../../static/img/qa.png'},
        {tit:'专项抽查',iconPath:'../../../static/img/qa.png'},
        {tit:'跨部门',iconPath:'../../../static/img/qa.png'},
        {tit:'复查任务',iconPath:'../../../static/img/qa.png'},
        {tit:'入口设置',iconPath:'../../../static/img/qa.png'}
      ],
      todoList:[
        {txt:'双随双随机双随机机',iconPath:'../../../static/img/qa.png', hasDay:1},
        {txt:'双随双随机双随机双随机机',iconPath:'../../../static/img/qa.png', hasDay:2},
        {txt:'双双随机双随机双随机随机',iconPath:'../../../static/img/qa.png', hasDay:3},
      ],
      arrOpt: ['全部任务', '待办任务', '待批任务'],
      pickIndex:0,
		};
	},
	onLoad() {},
	methods: {
    bindPickerChange(e){
      console.log(e.target.value)
      this.pickIndex = e.target.value
    }
  }
};
</script>

<style lang="scss" scoped>
  .home-wrap{
    .top-wrap{
      overflow: hidden;
      padding: 0 32rpx;
      background: #1f65b0;
      .top-seacrch{
        display: flex;
        .s-code{
          width: 64rpx;
          height: 64rpx;
          margin-top: 22rpx;
        }
      }
      .top-nav{
        overflow: hidden;
      }
      .nav-list{
        overflow: hidden;
        padding: 24rpx 0 40rpx;
        .nav-item{
          float: left;
          width: 112rpx;
          margin-left: 31rpx;
          text-align: center;
          .nav-icon{
            width:60rpx;
            height: 60rpx;
          }
          .nav-tit{
            text-align: center;
            line-height: 40rpx;
            color: #fff;
            font-size: 28rpx;
          }
          &:first-child{
            margin-left: 0rpx;
          }
        }
      }
    }
    .todo-wrap{
      padding: 0 32rpx;
      .todo-content{
        margin-bottom: 30rpx;
      }
      .todo-tit{
        color: #333;
        font-weight: 600;
        padding: 20rpx 0 0;
        display: flex;
        line-height: 68rpx;
        font-size: 32rpx;
        justify-content: space-between;
        .num{
          padding-left: 10rpx;
          color: #e01919;
        }
        .opera{
          height: 68rpx;
          width: 30rpx;
          image{
            width: 100%;
            height: 100%;
          }
        }
        .sele-wrap{
          width: 220rpx;
          .uni-input{
            font-size: 28rpx;
            font-weight: normal;
            text-align: center;
            width: 100%;
            color: #666;
            line-height: 60rpx;
            border:  1px solid #e4e4e4;
            border-radius: 6rpx;
          }
        }
      }
      .todo-list{
        .item{
          display: flex;
          padding: 12rpx 0;
          line-height: 68rpx;
          font-size: 28rpx;
          border-bottom: 1px solid #e4e4e4;
          .do-date{
            color: #22975f;
            margin-right: 12rpx;
          }
          .do-opera{
            height: 68rpx;
            width: 30rpx;
            image{
              width: 100%;
              height: 100%;
            }
          }
          .do-btn{
            color: #3291f8;
            margin: 0 12rpx;
          }
          .do-txt{
            flex: 1;
            text-overflow:ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
      .no-finally{
        .item{
          &:last-child{
            border-bottom:none;
          }
        }
      }

    }
  }
</style>

<style lang="scss">
  .home-wrap{
    /deep/ .vant-search-index{
      flex: 1;
    }
    /deep/ .van-notice-bar--withicon{
      padding: 20rpx 32rpx;
      color:#666 !important;
      background: #fff !important;
      border-bottom: 1px solid #e4e4e4;
    }
    /deep/ .van-notice-bar__right-icon{
      position: static;
        width: 60rpx;
        background: #fff;
      }
  }

</style>
