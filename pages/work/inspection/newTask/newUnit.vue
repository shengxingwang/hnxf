<template>
	<view class="new-unit">
        <van-field
            v-model="unitForm.unitName"
            name="unitName"
            label="单位名称"
             required
            placeholder="请输入单位名称"
            :rules="[{ required: true, message: '请输入单位名称' }]"
        />
        <van-field
            v-model="unitForm.address"
            rows="2"
            autosize
             required
            label="单位地址"
            type="textarea"
            maxlength="50"
            placeholder="请输入地址"
            show-word-limit
        />
        <van-field
            readonly
            clickable
             required
            name="datetimePicker"
            :value="unitForm.date"
            label="预定日期"
            placeholder="选择预定日期"
            @click="showPicker = true"
        />
         <van-field
            readonly
            clickable
             required
            name="datetimePicker"
            :value="unitForm.date"
            label="截至日期"
            placeholder="选择截至日期"
            @click="showPicker = true"
        />
        <van-field
            v-model="unitForm.unitName"
            name="unitName"
            label="主办人"
             required
            placeholder="请输入"
            :rules="[{ required: true, message: '请输入主办人' }]"
        />
        <van-field
            v-model="unitForm.unitName"
            name="unitName"
            label="协办人"
             required
            placeholder="请输入"
            :rules="[{ required: true, message: '请输入协办人' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">保存</van-button>
        </div>
        <van-popup v-model="showPicker" position="bottom">
            <van-datetime-picker
                v-model="unitForm.currentDate"
                type="datetime"
                title="选择完整时间"
                @confirm="onConfirm"
                @cancel="showPicker = false"
            />
        </van-popup>
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
                    currentDate:new Date()
                },
				showMore:false,
                checked:false
			}
		},
		methods: {
            onConfirm(time) {
                this.unitForm.date = time;
                this.showPicker = false;
            }
		}
	}
</script>

<style lang="scss" scoped>
  .new-unit{
  }
</style>
