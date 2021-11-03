<template>
	<view class="content">
    <view class="icon hnxffont">&#xe708;</view>

        <button type="default" @click="toHome">首页</button>
    <navigator url="/pages/work/inspection/reportCheck/reportCheck" hover-class="navigator-hover">
        <button type="default">举报投书核查、处理</button>
        </navigator>
		<navigator url="/pages/user/login" hover-class="navigator-hover">
        <button type="default">登录</button>
    </navigator>
    <navigator url="/pages/user/findPwd" hover-class="navigator-hover">
        <button type="default">找回密码</button>
    </navigator>
    <navigator url="/pages/user/editPwd" hover-class="navigator-hover">
        <button type="default">修改密码</button>
    </navigator>
    <navigator url="/pages/work/inspection/index" hover-class="navigator-hover">
        <button type="default">监督检查</button>
    </navigator>
    <navigator url="/pages/work/inspection/spotCheck/index" hover-class="navigator-hover">
        <button type="default">监督抽查</button>
    </navigator>
    <navigator url="/pages/work/inspection/newTask/index" hover-class="navigator-hover">
        <button type="default">生成任务1</button>
    </navigator>
    <navigator url="/pages/work/inspection/newTask/newUnit" hover-class="navigator-hover">
        <button type="default">单位信息</button>
    </navigator>
    <navigator url="/pages/work/inspection/newTask/taskDetail" hover-class="navigator-hover">
        <button type="default">任务详情</button>
    </navigator>
    <navigator url="/pages/work/inspection/newTask/unitDtetail" hover-class="navigator-hover">
        <button type="default">被检查单位详情</button>
    </navigator>
    <navigator url="/pages/work/inspection/newTask/taskStep" hover-class="navigator-hover">
        <button type="default">任务步骤</button>
    </navigator>


	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
    toHome(){
      uni.switchTab({
          url: '/pages/tabbar/home/index'
      });
    }
  }
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
