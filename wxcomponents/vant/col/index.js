"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
component_1.VantComponent({
  relation: {
    name: "row",
    type: "ancestor",
    current: "col",
  },
  props: {
    span: Number,
    offset: Number,
  },
  data: {
    viewStyle: "",
  },
  methods: {
    setGutter: function (gutter) {
      const padding = gutter / 2 + "px";
      const viewStyle = gutter
        ? "padding-left: " + padding + "; padding-right: " + padding + ";"
        : "";
      if (viewStyle !== this.data.viewStyle) {
        this.setData({ viewStyle: viewStyle });
      }
    },
  },
});
