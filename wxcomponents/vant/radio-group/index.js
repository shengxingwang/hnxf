"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
component_1.VantComponent({
  field: true,
  relation: {
    name: "radio",
    type: "descendant",
    current: "radio-group",
    linked: function (target) {
      this.updateChild(target);
    },
  },
  props: {
    value: {
      type: null,
      observer: "updateChildren",
    },
    disabled: {
      type: Boolean,
      observer: "updateChildren",
    },
  },
  methods: {
    updateChildren: function () {
      const _this = this;
      (this.children || []).forEach(function (child) {
        return _this.updateChild(child);
      });
    },
    updateChild: function (child) {
      const _a = this.data;
      const value = _a.value;
      const disabled = _a.disabled;
      child.setData({
        value: value,
        disabled: disabled || child.data.disabled,
      });
    },
  },
});
