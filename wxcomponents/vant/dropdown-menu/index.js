"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const utils_1 = require("../common/utils");
let ARRAY = [];
component_1.VantComponent({
  field: true,
  relation: {
    name: "dropdown-item",
    type: "descendant",
    current: "dropdown-menu",
    linked: function () {
      this.updateItemListData();
    },
    unlinked: function () {
      this.updateItemListData();
    },
  },
  props: {
    activeColor: {
      type: String,
      observer: "updateChildrenData",
    },
    overlay: {
      type: Boolean,
      value: true,
      observer: "updateChildrenData",
    },
    zIndex: {
      type: Number,
      value: 10,
    },
    duration: {
      type: Number,
      value: 200,
      observer: "updateChildrenData",
    },
    direction: {
      type: String,
      value: "down",
      observer: "updateChildrenData",
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true,
      observer: "updateChildrenData",
    },
    closeOnClickOutside: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    itemListData: [],
  },
  beforeCreate: function () {
    const windowHeight = wx.getSystemInfoSync().windowHeight;
    this.windowHeight = windowHeight;
    ARRAY.push(this);
  },
  destroyed: function () {
    const _this = this;
    ARRAY = ARRAY.filter(function (item) {
      return item !== _this;
    });
  },
  methods: {
    updateItemListData: function () {
      this.setData({
        itemListData: this.children.map(function (child) {
          return child.data;
        }),
      });
    },
    updateChildrenData: function () {
      this.children.forEach(function (child) {
        child.updateDataFromParent();
      });
    },
    toggleItem: function (active) {
      this.children.forEach(function (item, index) {
        const showPopup = item.data.showPopup;
        if (index === active) {
          item.toggle();
        } else if (showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    },
    close: function () {
      this.children.forEach(function (child) {
        child.toggle(false, { immediate: true });
      });
    },
    getChildWrapperStyle: function () {
      const _this = this;
      const _a = this.data;
      const zIndex = _a.zIndex;
      const direction = _a.direction;
      return this.getRect(".van-dropdown-menu").then(function (rect) {
        const _a = rect.top;
        const top = _a === void 0 ? 0 : _a;
        const _b = rect.bottom;
        const bottom = _b === void 0 ? 0 : _b;
        const offset = direction === "down" ? bottom : _this.windowHeight - top;
        let wrapperStyle = "z-index: " + zIndex + ";";
        if (direction === "down") {
          wrapperStyle += "top: " + utils_1.addUnit(offset) + ";";
        } else {
          wrapperStyle += "bottom: " + utils_1.addUnit(offset) + ";";
        }
        return wrapperStyle;
      });
    },
    onTitleTap: function (event) {
      const _this = this;
      const index = event.currentTarget.dataset.index;
      const child = this.children[index];
      if (!child.data.disabled) {
        ARRAY.forEach(function (menuItem) {
          if (
            menuItem &&
            menuItem.data.closeOnClickOutside &&
            menuItem !== _this
          ) {
            menuItem.close();
          }
        });
        this.toggleItem(index);
      }
    },
  },
});
