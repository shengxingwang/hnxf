"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
component_1.VantComponent({
  classes: ["active-class", "disabled-class"],
  relation: {
    type: "ancestor",
    name: "sidebar",
    current: "sidebar-item",
  },
  props: {
    dot: Boolean,
    info: null,
    title: String,
    disabled: Boolean,
  },
  methods: {
    onClick: function () {
      const _this = this;
      const parent = this.parent;
      if (!parent || this.data.disabled) {
        return;
      }
      const index = parent.children.indexOf(this);
      parent.setActive(index).then(function () {
        _this.$emit("click", index);
        parent.$emit("change", index);
      });
    },
    setActive: function (selected) {
      return this.setData({ selected: selected });
    },
  },
});
