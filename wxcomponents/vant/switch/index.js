"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const color_1 = require("../common/color");
component_1.VantComponent({
  field: true,
  classes: ["node-class"],
  props: {
    checked: {
      type: null,
      observer: function (value) {
        const loadingColor = this.getLoadingColor(value);
        this.setData({ value: value, loadingColor: loadingColor });
      },
    },
    loading: Boolean,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    size: {
      type: String,
      value: "30px",
    },
    activeValue: {
      type: null,
      value: true,
    },
    inactiveValue: {
      type: null,
      value: false,
    },
  },
  created: function () {
    const value = this.data.checked;
    const loadingColor = this.getLoadingColor(value);
    this.setData({ value: value, loadingColor: loadingColor });
  },
  methods: {
    getLoadingColor: function (checked) {
      const _a = this.data;
      const activeColor = _a.activeColor;
      const inactiveColor = _a.inactiveColor;
      return checked
        ? activeColor || color_1.BLUE
        : inactiveColor || color_1.GRAY_DARK;
    },
    onClick: function () {
      const _a = this.data;
      const activeValue = _a.activeValue;
      const inactiveValue = _a.inactiveValue;
      if (!this.data.disabled && !this.data.loading) {
        const checked = this.data.checked === activeValue;
        const value = checked ? inactiveValue : activeValue;
        this.$emit("input", value);
        this.$emit("change", value);
      }
    },
  },
});
