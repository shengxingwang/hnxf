"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const page_scroll_1 = require("../mixins/page-scroll");
const ROOT_ELEMENT = ".van-sticky";
component_1.VantComponent({
  props: {
    zIndex: {
      type: Number,
      value: 99,
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: "onScroll",
    },
    disabled: {
      type: Boolean,
      observer: "onScroll",
    },
    container: {
      type: null,
      observer: "onScroll",
    },
  },
  mixins: [
    page_scroll_1.pageScrollMixin(function (event) {
      this.onScroll(event);
    }),
  ],
  data: {
    height: 0,
    fixed: false,
    transform: 0,
  },
  mounted: function () {
    this.onScroll();
  },
  methods: {
    onScroll: function (_a) {
      const _this = this;
      const scrollTop = (_a === void 0 ? {} : _a).scrollTop;
      const _b = this.data;
      const container = _b.container;
      const offsetTop = _b.offsetTop;
      const disabled = _b.disabled;
      if (disabled) {
        this.setDataAfterDiff({
          fixed: false,
          transform: 0,
        });
        return;
      }
      this.scrollTop = scrollTop || this.scrollTop;
      if (typeof container === "function") {
        Promise.all([this.getRect(ROOT_ELEMENT), this.getContainerRect()]).then(
          function (_a) {
            const root = _a[0];
            const container = _a[1];
            if (offsetTop + root.height > container.height + container.top) {
              _this.setDataAfterDiff({
                fixed: false,
                transform: container.height - root.height,
              });
            } else if (offsetTop >= root.top) {
              _this.setDataAfterDiff({
                fixed: true,
                height: root.height,
                transform: 0,
              });
            } else {
              _this.setDataAfterDiff({ fixed: false, transform: 0 });
            }
          }
        );
        return;
      }
      this.getRect(ROOT_ELEMENT).then(function (root) {
        if (offsetTop >= root.top) {
          _this.setDataAfterDiff({ fixed: true, height: root.height });
          _this.transform = 0;
        } else {
          _this.setDataAfterDiff({ fixed: false });
        }
      });
    },
    setDataAfterDiff: function (data) {
      const _this = this;
      wx.nextTick(function () {
        const diff = Object.keys(data).reduce(function (prev, key) {
          if (data[key] !== _this.data[key]) {
            prev[key] = data[key];
          }
          return prev;
        }, {});
        _this.setData(diff);
        _this.$emit("scroll", {
          scrollTop: _this.scrollTop,
          isFixed: data.fixed || _this.data.fixed,
        });
      });
    },
    getContainerRect: function () {
      const nodesRef = this.data.container();
      return new Promise(function (resolve) {
        return nodesRef.boundingClientRect(resolve).exec();
      });
    },
  },
});
