"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const transition_1 = require("../mixins/transition");
component_1.VantComponent({
  classes: [
    "enter-class",
    "enter-active-class",
    "enter-to-class",
    "leave-class",
    "leave-active-class",
    "leave-to-class",
  ],
  mixins: [transition_1.transition(true)],
});
