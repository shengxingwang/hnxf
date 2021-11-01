"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
function emit(target, value) {
  target.$emit("input", value);
  target.$emit("change", value);
}
component_1.VantComponent({
  field: true,
  relation: {
    name: "checkbox-group",
    type: "ancestor",
    current: "checkbox",
  },
  classes: ["icon-class", "label-class"],
  props: {
    value: Boolean,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      value: "round",
    },
    iconSize: {
      type: null,
      value: 20,
    },
  },
  data: {
    parentDisabled: false,
  },
  methods: {
    emitChange: function (value) {
      if (this.parent) {
        this.setParentValue(this.parent, value);
      } else {
        emit(this, value);
      }
    },
    toggle: function () {
      const _a = this.data;
      const parentDisabled = _a.parentDisabled;
      const disabled = _a.disabled;
      const value = _a.value;
      if (!disabled && !parentDisabled) {
        this.emitChange(!value);
      }
    },
    onClickLabel: function () {
      const _a = this.data;
      const labelDisabled = _a.labelDisabled;
      const parentDisabled = _a.parentDisabled;
      const disabled = _a.disabled;
      const value = _a.value;
      if (!disabled && !labelDisabled && !parentDisabled) {
        this.emitChange(!value);
      }
    },
    setParentValue: function (parent, value) {
      const parentValue = parent.data.value.slice();
      const name = this.data.name;
      const max = parent.data.max;
      if (value) {
        if (max && parentValue.length >= max) {
          return;
        }
        if (parentValue.indexOf(name) === -1) {
          parentValue.push(name);
          emit(parent, parentValue);
        }
      } else {
        const index = parentValue.indexOf(name);
        if (index !== -1) {
          parentValue.splice(index, 1);
          emit(parent, parentValue);
        }
      }
    },
  },
});
