const actions = {
  // 设置登录状态
  setLogin({ commit }, isLogin) {
    commit("SET_LOGIN", isLogin);
  },
  // 设置登录类型
  setPubSec({ commit }, isPubSec) {
    commit("SET_PUBSEC", isPubSec);
  },
  // 设置登录信息
  setLoginInfo({ commit }, loginInfo) {
    commit("SET_LOGININFO", loginInfo);
  },
  // 设置用户openId
  setOpenId({ commit }, openId) {
    commit("SET_OPENID", openId);
  },
  // 设置用户userId
  setUserId({ commit }, userId) {
    commit("SET_USERID", userId);
  },
  // 设置商城Id
  setShopId({ commit }, shopId) {
    commit("SET_SHOPID", shopId);
  },
  // 设置订单确认商品
  setConfirmGoods({ commit }, confirmGoods) {
    commit("SET_CONFIRMGOODS", confirmGoods);
  },
  // 设置用户所在城市行政区号
  setAdcode({ commit }, adcode) {
    commit("SET_ADCODE", adcode);
  },
  // 设置用户手机号
  setPhone({ commit }, phone) {
    commit("SET_PHONE", phone);
  },
  // 设置微信获取的用户信息
  setWXUserInfo({ commit }, userInfo) {
    commit("SET_WXUSERINFO", userInfo);
  },
  // 设置是否切换城市
  setChangeCity({ commit }, isChangeCity) {
    commit("SET_CHANGECITY", isChangeCity);
  },
  // 设置城市信息
  setCityInfo({ commit }, cityInfo) {
    commit("SET_CITYINFO", cityInfo);
  },
  // 设置小程序跳转次数
  setgoxcxnum({ commit }, goxcxnum) {
    commit("SET_GOXCXNUM", goxcxnum);
  },
  // 设置用户信息
  setUserInfo({ commit }, loginInfo) {
    commit("SET_USERINFO", loginInfo);
  },
};
export default actions;
