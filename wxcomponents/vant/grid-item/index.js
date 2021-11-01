"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("../mixins/link");
const component_1 = require("../common/component");
const utils_1 = require("../common/utils");
component_1.VantComponent({
  relation: {
    name: "grid",
    type: "ancestor",
    current: "grid-item",
  },
  classes: ["content-class", "icon-class", "text-class"],
  mixins: [link_1.link],
  props: {
    icon: String,
    dot: Boolean,
    info: null,
    text: String,
    useSlot: Boolean,
  },
  data: {
    viewStyle: "",
  },
  mounted: function () {
    this.updateStyle();
  },
  methods: {
    updateStyle: function () {
      if (!this.parent) {
        return;
      }
      const _a = this.parent;
      const data = _a.data;
      const children = _a.children;
      const columnNum = data.columnNum;
      const border = data.border;
      const square = data.square;
      const gutter = data.gutter;
      const clickable = data.clickable;
      const center = data.center;
      const width = 100 / columnNum + "%";
      const styleWrapper = [];
      styleWrapper.push("width: " + width);
      if (square) {
        styleWrapper.push("padding-top: " + width);
      }
      if (gutter) {
        var gutterValue = utils_1.addUnit(gutter);
        styleWrapper.push("padding-right: " + gutterValue);
        const index = children.indexOf(this);
        if (index >= columnNum) {
          styleWrapper.push("margin-top: " + gutterValue);
        }
      }
      let contentStyle = "";
      if (square && gutter) {
        var gutterValue = utils_1.addUnit(gutter);
        contentStyle =
          "\n          right: " +
          gutterValue +
          ";\n          bottom: " +
          gutterValue +
          ";\n          height: auto;\n        ";
      }
      this.setData({
        viewStyle: styleWrapper.join("; "),
        contentStyle: contentStyle,
        center: center,
        border: border,
        square: square,
        gutter: gutter,
        clickable: clickable,
      });
    },
    onClick: function () {
      this.$emit("click");
      this.jumpLink();
    },
  },
});
