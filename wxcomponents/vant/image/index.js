"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../common/utils");
const component_1 = require("../common/component");
const button_1 = require("../mixins/button");
const open_type_1 = require("../mixins/open-type");
const FIT_MODE_MAP = {
  none: "center",
  fill: "scaleToFill",
  cover: "aspectFill",
  contain: "aspectFit",
  widthFix: "widthFix",
  heightFix: "heightFix",
};
component_1.VantComponent({
  mixins: [button_1.button, open_type_1.openType],
  classes: ["custom-class", "loading-class", "error-class", "image-class"],
  props: {
    src: {
      type: String,
      observer: function () {
        this.setData({
          error: false,
          loading: true,
        });
      },
    },
    round: Boolean,
    width: {
      type: null,
      observer: "setStyle",
    },
    height: {
      type: null,
      observer: "setStyle",
    },
    radius: null,
    lazyLoad: Boolean,
    useErrorSlot: Boolean,
    useLoadingSlot: Boolean,
    showMenuByLongpress: Boolean,
    fit: {
      type: String,
      value: "fill",
      observer: "setMode",
    },
    showError: {
      type: Boolean,
      value: true,
    },
    showLoading: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    error: false,
    loading: true,
    viewStyle: "",
  },
  mounted: function () {
    this.setMode();
    this.setStyle();
  },
  methods: {
    setMode: function () {
      this.setData({
        mode: FIT_MODE_MAP[this.data.fit],
      });
    },
    setStyle: function () {
      const _a = this.data;
      const width = _a.width;
      const height = _a.height;
      const radius = _a.radius;
      let style = "";
      if (utils_1.isDef(width)) {
        style += "width: " + utils_1.addUnit(width) + ";";
      }
      if (utils_1.isDef(height)) {
        style += "height: " + utils_1.addUnit(height) + ";";
      }
      if (utils_1.isDef(radius)) {
        style += "overflow: hidden;";
        style += "border-radius: " + utils_1.addUnit(radius) + ";";
      }
      this.setData({ viewStyle: style });
    },
    onLoad: function (event) {
      this.setData({
        loading: false,
      });
      this.$emit("load", event.detail);
    },
    onError: function (event) {
      this.setData({
        loading: false,
        error: true,
      });
      this.$emit("error", event.detail);
    },
    onClick: function (event) {
      this.$emit("click", event.detail);
    },
  },
});
