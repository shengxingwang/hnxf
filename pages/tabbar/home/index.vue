<template>
	<view class="home-wrap">
    <view class="top-wrap">
      <view class="top-seacrch">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          input-align="center"
        />
        <image class="s-code" src="../../../static/img/qa.png"></image>
      </view>
      <view class="top-nav">
        <view class="nav-list">
          <view v-for="(item,index) in topNavList" class="nav-item">
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
          <view>我的待办(6)</view>
          <view class="opera"><image src="../../../static/img/tabbar/addactive.png"></image></view>
        </view>
        <view class="todo-list">
          <view class="item">
            <view class="do-date">剩1日</view>
            <view class="do-txt">剩1日剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩剩剩剩剩剩</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image src="../../../static/img/tabbar/news.png"></image>
            </view>
          </view>
          <view class="item">
            <view class="do-date">剩1日</view>
            <view class="do-txt">剩1日剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩剩剩剩剩剩</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image src="../../../static/img/tabbar/news.png"></image>
            </view>
          </view>
          <view class="item">
            <view class="do-date">剩1日</view>
            <view class="do-txt">剩1日剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩剩剩剩剩剩</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image src="../../../static/img/tabbar/news.png"></image>
            </view>
          </view>
        </view>
     </view>
     <view class="todo-content">
        <view class="todo-tit">
          <view>我的待办(6)</view>
          <view class="opera"><image src="../../../static/img/tabbar/addactive.png"></image></view>
        </view>
        <view class="todo-list">
          <view class="item">
            <view class="do-date">剩1日</view>
            <view class="do-txt">剩1日剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩剩剩剩剩剩</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image src="../../../static/img/tabbar/news.png"></image>
            </view>
          </view>
          <view class="item">
            <view class="do-date">剩1日</view>
            <view class="do-txt">剩1日剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩剩剩剩剩剩</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image src="../../../static/img/tabbar/news.png"></image>
            </view>
          </view>
          <view class="item">
            <view class="do-date">剩1日</view>
            <view class="do-txt">剩1日剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩日剩剩剩剩剩剩剩剩剩剩剩剩剩剩剩</view>
            <view class="do-btn">检查</view>
            <view class="do-opera">
              <image src="../../../static/img/tabbar/news.png"></image>
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
      ]
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
  .home-wrap{
    .top-wrap{
      padding: 0 32rpx;
      .top-seacrch{
        display: flex;
        .s-code{
          width: 64rpx;
          height: 64rpx;
          margin-top: 22rpx;
        }
      }
      .nav-list{
        padding: 24rpx 0;
        .nav-item{
          float: left;
          width: 110rpx;
          margin-left: 30rpx;
          text-align: center;
          .nav-icon{
            width:60rpx;
            height: 60rpx;
          }
          .nav-tit{
            text-align: center;
            line-height: 44rpx;
            color: #666;
            font-size: 24rpx;
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
        &:last-child{
          margin-top: 30rpx;
        }
      }
      .todo-tit{
        color: #333;
        font-weight: 600;
        padding: 20rpx 0 0;
        display: flex;
        line-height: 68rpx;
        justify-content: space-between;
        .opera{
          height: 68rpx;
          width: 30rpx;
          image{
            width: 100%;
            height: 100%;
          }
        }
      }
      .todo-list{
        .item{
          display: flex;
          padding: 12rpx 0;
          line-height: 68rpx;
          border-bottom: 1px solid #e4e4e4;
          .do-date{
            color: #07C160;
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
            color: #1989FA;
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

    }
  }
</style>

<style lang="scss">
  .home-wrap{
    /deep/ .vant-search-index{
      flex: 1;
    }
    /deep/ .van-notice-bar--withicon{
      padding: 24rpx 32rpx;
      color:#666 !important;
      background: #fff !important;
      border-bottom: 1px solid #e4e4e4;
    }
    /deep/{.van-notice-bar__right-icon{
      position: static;
        width: 60rpx;
        background: #fff;
      }
    }
  }

</style>
