"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const color_1 = require("../common/color");
const page_scroll_1 = require("../mixins/page-scroll");
const indexList = function () {
  const indexList = [];
  const charCodeOfA = "A".charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList;
};
component_1.VantComponent({
  relation: {
    name: "index-anchor",
    type: "descendant",
    current: "index-bar",
    linked: function () {
      this.updateData();
    },
    unlinked: function () {
      this.updateData();
    },
  },
  props: {
    sticky: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 1,
    },
    highlightColor: {
      type: String,
      value: color_1.GREEN,
    },
    stickyOffsetTop: {
      type: Number,
      value: 0,
    },
    indexList: {
      type: Array,
      value: indexList(),
    },
  },
  mixins: [
    page_scroll_1.pageScrollMixin(function (event) {
      this.scrollTop = event.scrollTop || 0;
      this.onScroll();
    }),
  ],
  data: {
    activeAnchorIndex: null,
    showSidebar: false,
  },
  created: function () {
    this.scrollTop = 0;
  },
  methods: {
    updateData: function () {
      const _this = this;
      wx.nextTick(function () {
        if (_this.timer != null) {
          clearTimeout(_this.timer);
        }
        _this.timer = setTimeout(function () {
          _this.setData({
            showSidebar: !!_this.children.length,
          });
          _this.setRect().then(function () {
            _this.onScroll();
          });
        }, 0);
      });
    },
    setRect: function () {
      return Promise.all([
        this.setAnchorsRect(),
        this.setListRect(),
        this.setSiderbarRect(),
      ]);
    },
    setAnchorsRect: function () {
      const _this = this;
      return Promise.all(
        this.children.map(function (anchor) {
          return anchor
            .getRect(".van-index-anchor-wrapper")
            .then(function (rect) {
              Object.assign(anchor, {
                height: rect.height,
                top: rect.top + _this.scrollTop,
              });
            });
        })
      );
    },
    setListRect: function () {
      const _this = this;
      return this.getRect(".van-index-bar").then(function (rect) {
        Object.assign(_this, {
          height: rect.height,
          top: rect.top + _this.scrollTop,
        });
      });
    },
    setSiderbarRect: function () {
      const _this = this;
      return this.getRect(".van-index-bar__sidebar").then(function (res) {
        _this.sidebar = {
          height: res.height,
          top: res.top,
        };
      });
    },
    setDiffData: function (_a) {
      const target = _a.target;
      const data = _a.data;
      const diffData = {};
      Object.keys(data).forEach(function (key) {
        if (target.data[key] !== data[key]) {
          diffData[key] = data[key];
        }
      });
      if (Object.keys(diffData).length) {
        target.setData(diffData);
      }
    },
    getAnchorRect: function (anchor) {
      return anchor.getRect(".van-index-anchor-wrapper").then(function (rect) {
        return {
          height: rect.height,
          top: rect.top,
        };
      });
    },
    getActiveAnchorIndex: function () {
      const _a = this;
      const children = _a.children;
      const scrollTop = _a.scrollTop;
      const _b = this.data;
      const sticky = _b.sticky;
      const stickyOffsetTop = _b.stickyOffsetTop;
      for (let i = this.children.length - 1; i >= 0; i--) {
        const preAnchorHeight = i > 0 ? children[i - 1].height : 0;
        const reachTop = sticky ? preAnchorHeight + stickyOffsetTop : 0;
        if (reachTop + scrollTop >= children[i].top) {
          return i;
        }
      }
      return -1;
    },
    onScroll: function () {
      const _this = this;
      const _a = this;
      const _b = _a.children;
      const children = _b === void 0 ? [] : _b;
      const scrollTop = _a.scrollTop;
      if (!children.length) {
        return;
      }
      const _c = this.data;
      const sticky = _c.sticky;
      const stickyOffsetTop = _c.stickyOffsetTop;
      const zIndex = _c.zIndex;
      const highlightColor = _c.highlightColor;
      const active = this.getActiveAnchorIndex();
      this.setDiffData({
        target: this,
        data: {
          activeAnchorIndex: active,
        },
      });
      if (sticky) {
        let isActiveAnchorSticky_1 = false;
        if (active !== -1) {
          isActiveAnchorSticky_1 =
            children[active].top <= stickyOffsetTop + scrollTop;
        }
        children.forEach(function (item, index) {
          if (index === active) {
            let wrapperStyle = "";
            var anchorStyle =
              "\n              color: " + highlightColor + ";\n            ";
            if (isActiveAnchorSticky_1) {
              wrapperStyle =
                "\n                height: " +
                children[index].height +
                "px;\n              ";
              anchorStyle =
                "\n                position: fixed;\n                top: " +
                stickyOffsetTop +
                "px;\n                z-index: " +
                zIndex +
                ";\n                color: " +
                highlightColor +
                ";\n              ";
            }
            _this.setDiffData({
              target: item,
              data: {
                active: true,
                anchorStyle: anchorStyle,
                wrapperStyle: wrapperStyle,
              },
            });
          } else if (index === active - 1) {
            const currentAnchor = children[index];
            const currentOffsetTop = currentAnchor.top;
            const targetOffsetTop =
              index === children.length - 1
                ? _this.top
                : children[index + 1].top;
            const parentOffsetHeight = targetOffsetTop - currentOffsetTop;
            const translateY = parentOffsetHeight - currentAnchor.height;
            var anchorStyle =
              "\n              position: relative;\n              transform: translate3d(0, " +
              translateY +
              "px, 0);\n              z-index: " +
              zIndex +
              ";\n              color: " +
              highlightColor +
              ";\n            ";
            _this.setDiffData({
              target: item,
              data: {
                active: true,
                anchorStyle: anchorStyle,
              },
            });
          } else {
            _this.setDiffData({
              target: item,
              data: {
                active: false,
                anchorStyle: "",
                wrapperStyle: "",
              },
            });
          }
        });
      }
    },
    onClick: function (event) {
      this.scrollToAnchor(event.target.dataset.index);
    },
    onTouchMove: function (event) {
      const sidebarLength = this.children.length;
      const touch = event.touches[0];
      const itemHeight = this.sidebar.height / sidebarLength;
      let index = Math.floor((touch.clientY - this.sidebar.top) / itemHeight);
      if (index < 0) {
        index = 0;
      } else if (index > sidebarLength - 1) {
        index = sidebarLength - 1;
      }
      this.scrollToAnchor(index);
    },
    onTouchStop: function () {
      this.scrollToAnchorIndex = null;
    },
    scrollToAnchor: function (index) {
      const _this = this;
      if (typeof index !== "number" || this.scrollToAnchorIndex === index) {
        return;
      }
      this.scrollToAnchorIndex = index;
      const anchor = this.children.find(function (item) {
        return item.data.index === _this.data.indexList[index];
      });
      if (anchor) {
        anchor.scrollIntoView(this.scrollTop);
        this.$emit("select", anchor.data.index);
      }
    },
  },
});
