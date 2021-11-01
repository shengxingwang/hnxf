"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const link_1 = require("../mixins/link");
const button_1 = require("../mixins/button");
const open_type_1 = require("../mixins/open-type");
component_1.VantComponent({
  classes: ["icon-class", "text-class"],
  mixins: [link_1.link, button_1.button, open_type_1.openType],
  props: {
    text: String,
    dot: Boolean,
    info: String,
    icon: String,
    disabled: Boolean,
    loading: Boolean,
  },
  methods: {
    onClick: function (event) {
      this.$emit("click", event.detail);
      this.jumpLink();
    },
  },
});
