<template>
	<view class="new-unit">
      <uni-forms :modelValue="unitForm">
        <uni-forms-item label="单位名称" name="unitName">
            <uni-easyinput type="text" v-model="unitForm.unitName" placeholder="请输入单位名称" />
        </uni-forms-item>
        <uni-forms-item label="预定日期" name="date">
           <uni-datetime-picker
               type="datetime"
               v-model="unitForm.date"
               @change="changeLog"
           />
        </uni-forms-item>
        <uni-forms-item label="截至日期" name="date">
           <uni-datetime-picker
               type="datetime"
               v-model="unitForm.date"
               @change="changeLog"
           />
        </uni-forms-item>
        <uni-forms-item label="单位地址" name="unitName">
            <uni-easyinput type="textarea" v-model="unitForm.unitName" placeholder="请输入单位地址" />
        </uni-forms-item>
        <uni-forms-item label="主办人" name="unitName">
            <uni-data-picker placeholder="请选择主办人" :localdata="xiePeople" popup-title="请选择主办人"
             @change="onMainchange">
            </uni-data-picker>
        </uni-forms-item>
        <uni-forms-item required name="hobby" label="协办人">
            <uni-data-checkbox multiple v-model="unitForm.hobby" :localdata="xiePeople"/>
        </uni-forms-item>
    </uni-forms>
      <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">保存</van-button>
      </div>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        currentTime: '12:00',
        showPicker:false,
        unitForm:{
            unitName:'',
            address:'',
            date:'',
            hobby:'',
            currentDate:new Date()
        },
        xiePeople:[{"value": 0,"text": "篮球"    },{"value": 1,"text": "足球"},{"value": 2,"text": "游泳"}],
        showMore:false,
        checked:false
			}
		},
		methods: {
        onMainchange(e){
          console.log(e)
        },
        onConfirm(time) {
            this.unitForm.date = time;
            this.showPicker = false;
        }
		}
	}
</script>

<style lang="scss" scoped>
  .new-unit{
    padding:32rpx;
  }
</style>
