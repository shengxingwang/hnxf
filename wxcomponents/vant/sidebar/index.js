"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
component_1.VantComponent({
  relation: {
    name: "sidebar-item",
    type: "descendant",
    current: "sidebar",
    linked: function () {
      this.setActive(this.data.activeKey);
    },
    unlinked: function () {
      this.setActive(this.data.activeKey);
    },
  },
  props: {
    activeKey: {
      type: Number,
      value: 0,
      observer: "setActive",
    },
  },
  beforeCreate: function () {
    this.currentActive = -1;
  },
  methods: {
    setActive: function (activeKey) {
      const _a = this;
      const children = _a.children;
      const currentActive = _a.currentActive;
      if (!children.length) {
        return Promise.resolve();
      }
      this.currentActive = activeKey;
      const stack = [];
      if (currentActive !== activeKey && children[currentActive]) {
        stack.push(children[currentActive].setActive(false));
      }
      if (children[activeKey]) {
        stack.push(children[activeKey].setActive(true));
      }
      return Promise.all(stack);
    },
  },
});
