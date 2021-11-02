<template>
	<view class="content">
        <button type="default" @click="toHome">首页</button>
		<navigator url="/pages/user/login" hover-class="navigator-hover">
        <button type="default">登录</button>
    </navigator>
    <navigator url="/pages/user/findPwd" hover-class="navigator-hover">
        <button type="default">找回密码</button>
    </navigator>
    <navigator url="/pages/user/editPwd" hover-class="navigator-hover">
        <button type="default">修改密码</button>
    </navigator>
    <navigator url="/pages/tabbar/work/inspection/index" hover-class="navigator-hover">
        <button type="default">监督检查</button>
    </navigator>
    <navigator url="/pages/tabbar/work/inspection/spotCheck/index" hover-class="navigator-hover">
        <button type="default">监督抽查</button>
    </navigator>
    <navigator url="/pages/tabbar/work/inspection/newTask/index" hover-class="navigator-hover">
        <button type="default">生成任务1</button>
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
