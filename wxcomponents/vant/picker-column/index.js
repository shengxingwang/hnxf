"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const utils_1 = require("../common/utils");
const DEFAULT_DURATION = 200;
component_1.VantComponent({
  classes: ["active-class"],
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      value: [],
    },
    defaultIndex: {
      type: Number,
      value: 0,
      observer: function (value) {
        this.setIndex(value);
      },
    },
  },
  data: {
    startY: 0,
    offset: 0,
    duration: 0,
    startOffset: 0,
    options: [],
    currentIndex: 0,
  },
  created: function () {
    const _this = this;
    const _a = this.data;
    const defaultIndex = _a.defaultIndex;
    const initialOptions = _a.initialOptions;
    this.set({
      currentIndex: defaultIndex,
      options: initialOptions,
    }).then(function () {
      _this.setIndex(defaultIndex);
    });
  },
  methods: {
    getCount: function () {
      return this.data.options.length;
    },
    onTouchStart: function (event) {
      this.setData({
        startY: event.touches[0].clientY,
        startOffset: this.data.offset,
        duration: 0,
      });
    },
    onTouchMove: function (event) {
      const data = this.data;
      const deltaY = event.touches[0].clientY - data.startY;
      this.setData({
        offset: utils_1.range(
          data.startOffset + deltaY,
          -(this.getCount() * data.itemHeight),
          data.itemHeight
        ),
      });
    },
    onTouchEnd: function () {
      const data = this.data;
      if (data.offset !== data.startOffset) {
        this.setData({ duration: DEFAULT_DURATION });
        const index = utils_1.range(
          Math.round(-data.offset / data.itemHeight),
          0,
          this.getCount() - 1
        );
        this.setIndex(index, true);
      }
    },
    onClickItem: function (event) {
      const index = event.currentTarget.dataset.index;
      this.setIndex(index, true);
    },
    adjustIndex: function (index) {
      const data = this.data;
      const count = this.getCount();
      index = utils_1.range(index, 0, count);
      for (var i = index; i < count; i++) {
        if (!this.isDisabled(data.options[i])) return i;
      }
      for (var i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(data.options[i])) return i;
      }
    },
    isDisabled: function (option) {
      return utils_1.isObj(option) && option.disabled;
    },
    getOptionText: function (option) {
      const data = this.data;
      return utils_1.isObj(option) && data.valueKey in option
        ? option[data.valueKey]
        : option;
    },
    setIndex: function (index, userAction) {
      const _this = this;
      const data = this.data;
      index = this.adjustIndex(index) || 0;
      const offset = -index * data.itemHeight;
      if (index !== data.currentIndex) {
        return this.set({ offset: offset, currentIndex: index }).then(
          function () {
            userAction && _this.$emit("change", index);
          }
        );
      }
      return this.set({ offset: offset });
    },
    setValue: function (value) {
      const options = this.data.options;
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
      return Promise.resolve();
    },
    getValue: function () {
      const data = this.data;
      return data.options[data.currentIndex];
    },
  },
});
