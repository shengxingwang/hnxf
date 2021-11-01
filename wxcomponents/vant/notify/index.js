"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const color_1 = require("../common/color");
component_1.VantComponent({
  props: {
    message: String,
    background: String,
    type: {
      type: String,
      value: "danger",
    },
    color: {
      type: String,
      value: color_1.WHITE,
    },
    duration: {
      type: Number,
      value: 3000,
    },
    zIndex: {
      type: Number,
      value: 110,
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: false,
    },
    top: null,
  },
  data: {
    show: false,
  },
  created: function () {
    const statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
    this.setData({ statusBarHeight: statusBarHeight });
  },
  methods: {
    show: function () {
      const _this = this;
      const _a = this.data;
      const duration = _a.duration;
      const onOpened = _a.onOpened;
      clearTimeout(this.timer);
      this.setData({ show: true });
      wx.nextTick(onOpened);
      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(function () {
          _this.hide();
        }, duration);
      }
    },
    hide: function () {
      const onClose = this.data.onClose;
      clearTimeout(this.timer);
      this.setData({ show: false });
      wx.nextTick(onClose);
    },
    onTap: function (event) {
      const onClick = this.data.onClick;
      if (onClick) {
        onClick(event.detail);
      }
    },
  },
});
