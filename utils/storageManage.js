/**
 * 这个文件管理storage，时间有限，目前只测试了使用和获取功能
 * 存在问题：1.获取Storage太过分散，注释分散，获取逻辑不统一，代码冗余。2.Storage的key命名不规范，容易引起误解。3.一旦修改，改动量过大，容易出现bug。
 * 为解决这些问题，新建文件对Storage统一管理
 * 2021/05/18
 */

// storage中的key,type可以控制缓存的数据类型
const Keys = {
  userInfo: { type: 'object' }, // 用户信息
  token: { type: 'string' }, // 登录态，当前登录身份的登录态
  human: { type: 'string' }, // 登录态，自然人登录身份的登录态
  corp: { type: 'string' }, // 登录态，法人登录身份的登录态
  level: { type: 'string' }, // 用户登录等级，取自用户信息中的level
  serviceObject: { type: 'string' } // 用户当前的身份，human--自然人  corp--法人
}

class StorageManage {
  // 1.数据响应化
  constructor(options) {
    // 处理传入Keys
    this.$data = {...Keys}

    // 响应化
    this.observe(this.$data)
  }

  observe(value) {
    // 遍历
    Object.keys(value).forEach(key => {
      // 真正的响应化处理在defineReactive中
      this.defineReactive(value, key, value[key])

      // 代理data中的属性到storage实例上
      this.proxyData(key)
    })
  }

  defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        const { type } = val
        let result = uni.getStorageSync(key)
        if (key === 'token') {
					const serviceObject = uni.getStorageSync('serviceObject');
					if (serviceObject) {
						return uni.getStorageSync(serviceObject)
					}
          return undefined;
        }
        if (type === 'object' && result) {
					try{
						result = typeof result === 'object' ? result : JSON.parse(result)
					}catch(e){
						return undefined;
					}
        }
        return result
      },
      set(newVal) {
        if (newVal === uni.getStorageSync(key)) {
          return
        }
        uni.setStorageSync(key, newVal)
      }
    })
  }

  proxyData(key) {
    // 需要给storage实例定义属性
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }
}

module.exports = {
  StorageManage
}
