"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const nextTick = function () {
  return new Promise(function (resolve) {
    return setTimeout(resolve, 20);
  });
};
component_1.VantComponent({
  classes: ["title-class", "content-class"],
  relation: {
    name: "collapse",
    type: "ancestor",
    current: "collapse-item",
  },
  props: {
    name: null,
    title: null,
    value: null,
    icon: String,
    label: String,
    disabled: Boolean,
    clickable: Boolean,
    border: {
      type: Boolean,
      value: true,
    },
    isLink: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    contentHeight: 0,
    expanded: false,
    transition: false,
  },
  mounted: function () {
    const _this = this;
    this.updateExpanded()
      .then(nextTick)
      .then(function () {
        const data = { transition: true };
        if (_this.data.expanded) {
          data.contentHeight = "auto";
        }
        _this.setData(data);
      });
  },
  methods: {
    updateExpanded: function () {
      if (!this.parent) {
        return Promise.resolve();
      }
      const _a = this.parent.data;
      const value = _a.value;
      const accordion = _a.accordion;
      const _b = this.parent.children;
      const children = _b === void 0 ? [] : _b;
      const name = this.data.name;
      const index = children.indexOf(this);
      const currentName = name == null ? index : name;
      const expanded = accordion
        ? value === currentName
        : (value || []).some(function (name) {
            return name === currentName;
          });
      const stack = [];
      if (expanded !== this.data.expanded) {
        stack.push(this.updateStyle(expanded));
      }
      stack.push(this.set({ index: index, expanded: expanded }));
      return Promise.all(stack);
    },
    updateStyle: function (expanded) {
      const _this = this;
      return this.getRect(".van-collapse-item__content")
        .then(function (rect) {
          return rect.height;
        })
        .then(function (height) {
          if (expanded) {
            return _this.set({
              contentHeight: height ? height + "px" : "auto",
            });
          }
          return _this
            .set({ contentHeight: height + "px" })
            .then(nextTick)
            .then(function () {
              return _this.set({ contentHeight: 0 });
            });
        });
    },
    onClick: function () {
      if (this.data.disabled) {
        return;
      }
      const _a = this.data;
      const name = _a.name;
      const expanded = _a.expanded;
      const index = this.parent.children.indexOf(this);
      const currentName = name == null ? index : name;
      this.parent.switch(currentName, !expanded);
    },
    onTransitionEnd: function () {
      if (this.data.expanded) {
        this.setData({
          contentHeight: "auto",
        });
      }
    },
  },
});
