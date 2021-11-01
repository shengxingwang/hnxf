"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const FONT_COLOR = "#ed6a0c";
const BG_COLOR = "#fffbe8";
component_1.VantComponent({
  props: {
    text: {
      type: String,
      value: "",
      observer: function () {
        const _this = this;
        wx.nextTick(function () {
          _this.init();
        });
      },
    },
    mode: {
      type: String,
      value: "",
    },
    url: {
      type: String,
      value: "",
    },
    openType: {
      type: String,
      value: "navigate",
    },
    delay: {
      type: Number,
      value: 1,
    },
    speed: {
      type: Number,
      value: 50,
      observer: function () {
        const _this = this;
        wx.nextTick(function () {
          _this.init();
        });
      },
    },
    scrollable: {
      type: Boolean,
      value: true,
    },
    leftIcon: {
      type: String,
      value: "",
    },
    color: {
      type: String,
      value: FONT_COLOR,
    },
    backgroundColor: {
      type: String,
      value: BG_COLOR,
    },
    wrapable: Boolean,
  },
  data: {
    show: true,
  },
  created: function () {
    this.resetAnimation = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
    });
  },
  destroyed: function () {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    init: function () {
      const _this = this;
      Promise.all([
        this.getRect(".van-notice-bar__content"),
        this.getRect(".van-notice-bar__wrap"),
      ]).then(function (rects) {
        const contentRect = rects[0];
        const wrapRect = rects[1];
        if (
          contentRect == null ||
          wrapRect == null ||
          !contentRect.width ||
          !wrapRect.width
        ) {
          return;
        }
        const _a = _this.data;
        const speed = _a.speed;
        const scrollable = _a.scrollable;
        const delay = _a.delay;
        if (scrollable && wrapRect.width < contentRect.width) {
          const duration = (contentRect.width / speed) * 1000;
          _this.wrapWidth = wrapRect.width;
          _this.contentWidth = contentRect.width;
          _this.duration = duration;
          _this.animation = wx.createAnimation({
            duration: duration,
            timingFunction: "linear",
            delay: delay,
          });
          _this.scroll();
        }
      });
    },
    scroll: function () {
      const _this = this;
      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.setData({
        animationData: this.resetAnimation
          .translateX(this.wrapWidth)
          .step()
          .export(),
      });
      setTimeout(function () {
        _this.setData({
          animationData: _this.animation
            .translateX(-_this.contentWidth)
            .step()
            .export(),
        });
      }, 20);
      this.timer = setTimeout(function () {
        _this.scroll();
      }, this.duration);
    },
    onClickIcon: function () {
      this.timer && clearTimeout(this.timer);
      this.timer = null;
      this.setData({ show: false });
    },
    onClick: function (event) {
      this.$emit("click", event);
    },
  },
});
