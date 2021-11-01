import store from '@/store/index.js'

function request(
  url,
  method,
  data,
  header = { 'content-type': 'application/json' }
) {
  header.token =
    header.token || uni.getStorageSync(uni.getStorageSync('serviceObject'))
  // Object.assign(header, {
  //   'content-type': 'application/json'
  // })
  return new Promise((resolve, reject) => {
    // wx.showLoading({
    //   title: '加载中'
    // })
    uni.request({
      url: url,
      method: method,
      data: data,
      header: header,
      success: function (res) {
        resolve(res.data)
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 3000)
      },
      fail: function (res) {
        reject(res)
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 3000)
      },
      complete: function (res) {
        setTimeout(function () {
          // wx.hideLoading()
        })
      }
    })
  })
}

// 封装get方法
function get(obj) {
  return request(obj.url, 'GET', obj.data, obj.header)
}
// 封装post方法
function post(obj) {
  return request(obj.url, 'POST', obj.data, obj.header)
}
// 封装put方法
function put(obj) {
  return request(obj.url, 'PUT', obj.data, obj.header)
}
// 封装detele方法
function del(obj) {
  return request(obj.url, 'DELETE', obj.data, obj.header)
}
export default {
  get,
  post,
  del,
  put
}
