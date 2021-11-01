"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCurrentPage() {
  const pages = getCurrentPages();
  return pages[pages.length - 1] || {};
}
function onPageScroll(event) {
  const _a = getCurrentPage().vanPageScroller;
  const vanPageScroller = _a === void 0 ? [] : _a;
  vanPageScroller.forEach(function (scroller) {
    if (typeof scroller === "function") {
      scroller(event);
    }
  });
}
exports.pageScrollMixin = function (scroller) {
  return Behavior({
    attached: function () {
      const page = getCurrentPage();
      if (Array.isArray(page.vanPageScroller)) {
        page.vanPageScroller.push(scroller.bind(this));
      } else {
        page.vanPageScroller = [page.onPageScroll, scroller.bind(this)];
      }
      page.onPageScroll = onPageScroll;
    },
    detached: function () {
      const page = getCurrentPage();
      page.vanPageScroller = (page.vanPageScroller || []).filter(function (
        item
      ) {
        return item !== scroller;
      });
    },
  });
};
