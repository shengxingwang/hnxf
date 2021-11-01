"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
component_1.VantComponent({
  relation: {
    name: "col",
    type: "descendant",
    current: "row",
    linked: function (target) {
      if (this.data.gutter) {
        target.setGutter(this.data.gutter);
      }
    },
  },
  props: {
    gutter: {
      type: Number,
      observer: "setGutter",
    },
  },
  data: {
    viewStyle: "",
  },
  mounted: function () {
    if (this.data.gutter) {
      this.setGutter();
    }
  },
  methods: {
    setGutter: function () {
      const _this = this;
      const gutter = this.data.gutter;
      const margin = "-" + Number(gutter) / 2 + "px";
      const viewStyle = gutter
        ? "margin-right: " + margin + "; margin-left: " + margin + ";"
        : "";
      this.setData({ viewStyle: viewStyle });
      this.getRelationNodes("../col/index").forEach(function (col) {
        col.setGutter(_this.data.gutter);
      });
    },
  },
});
