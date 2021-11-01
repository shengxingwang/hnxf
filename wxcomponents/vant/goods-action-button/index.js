"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const link_1 = require("../mixins/link");
const button_1 = require("../mixins/button");
const open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
  mixins: [link_1.link, button_1.button, open_type_1.openType],
  relation: {
    type: "ancestor",
    name: "goods-action",
    current: "goods-action-button",
  },
  props: {
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    type: {
      type: String,
      value: "danger",
    },
  },
  mounted: function () {
    this.updateStyle();
  },
  methods: {
    onClick: function (event) {
      this.$emit("click", event.detail);
      this.jumpLink();
    },
    updateStyle: function () {
      const _a = this.parent.children;
      const children = _a === void 0 ? [] : _a;
      const length = children.length;
      const index = children.indexOf(this);
      this.setData({
        isFirst: index === 0,
        isLast: index === length - 1,
      });
    },
  },
});
