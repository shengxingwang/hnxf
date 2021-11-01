"use strict";
const __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (let a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const utils_1 = require("./utils");
const toast_1 = __importDefault(require("../toast/toast"));
component_1.VantComponent({
  props: {
    title: {
      type: String,
      value: "日期选择",
    },
    color: String,
    show: {
      type: Boolean,
      observer: function (val) {
        if (val) {
          this.initRect();
          this.scrollIntoView();
        }
      },
    },
    formatter: null,
    confirmText: {
      type: String,
      value: "确定",
    },
    rangePrompt: String,
    defaultDate: {
      type: [Number, Array],
      observer: function (val) {
        this.setData({ currentDate: val });
        this.scrollIntoView();
      },
    },
    allowSameDay: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      value: "single",
      observer: "reset",
    },
    minDate: {
      type: null,
      value: Date.now(),
    },
    maxDate: {
      type: null,
      value: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 6,
        new Date().getDate()
      ).getTime(),
    },
    position: {
      type: String,
      value: "bottom",
    },
    rowHeight: {
      type: [Number, String],
      value: utils_1.ROW_HEIGHT,
    },
    round: {
      type: Boolean,
      value: true,
    },
    poppable: {
      type: Boolean,
      value: true,
    },
    showMark: {
      type: Boolean,
      value: true,
    },
    showTitle: {
      type: Boolean,
      value: true,
    },
    showConfirm: {
      type: Boolean,
      value: true,
    },
    showSubtitle: {
      type: Boolean,
      value: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true,
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true,
    },
    maxRange: {
      type: [Number, String],
      value: null,
    },
  },
  data: {
    subtitle: "",
    currentDate: null,
    scrollIntoView: "",
  },
  created: function () {
    this.setData({
      currentDate: this.getInitialDate(),
    });
  },
  mounted: function () {
    if (this.data.show || !this.data.poppable) {
      this.initRect();
      this.scrollIntoView();
    }
  },
  methods: {
    reset: function () {
      this.setData({ currentDate: this.getInitialDate() });
      this.scrollIntoView();
    },
    initRect: function () {
      const _this = this;
      if (this.contentObserver != null) {
        this.contentObserver.disconnect();
      }
      const contentObserver = this.createIntersectionObserver({
        thresholds: [0, 0.1, 0.9, 1],
        observeAll: true,
      });
      this.contentObserver = contentObserver;
      contentObserver.relativeTo(".van-calendar__body");
      contentObserver.observe(".month", function (res) {
        if (res.boundingClientRect.top <= res.relativeRect.top) {
          // @ts-ignore
          _this.setData({
            subtitle: utils_1.formatMonthTitle(res.dataset.date),
          });
        }
      });
    },
    getInitialDate: function () {
      const _a = this.data;
      const type = _a.type;
      const defaultDate = _a.defaultDate;
      const minDate = _a.minDate;
      if (type === "range") {
        const _b = defaultDate || [];
        const startDay = _b[0];
        const endDay = _b[1];
        return [
          startDay || minDate,
          endDay || utils_1.getNextDay(new Date(minDate)).getTime(),
        ];
      }
      if (type === "multiple") {
        return [defaultDate || minDate];
      }
      return defaultDate || minDate;
    },
    scrollIntoView: function () {
      const _this = this;
      setTimeout(function () {
        const _a = _this.data;
        const currentDate = _a.currentDate;
        const type = _a.type;
        const show = _a.show;
        const poppable = _a.poppable;
        const minDate = _a.minDate;
        const maxDate = _a.maxDate;
        const targetDate = type === "single" ? currentDate : currentDate[0];
        const displayed = show || !poppable;
        if (!targetDate || !displayed) {
          return;
        }
        const months = utils_1.getMonths(minDate, maxDate);
        months.some(function (month, index) {
          if (utils_1.compareMonth(month, targetDate) === 0) {
            _this.setData({ scrollIntoView: "month" + index });
            return true;
          }
          return false;
        });
      }, 100);
    },
    onOpen: function () {
      this.$emit("open");
    },
    onOpened: function () {
      this.$emit("opened");
    },
    onClose: function () {
      this.$emit("close");
    },
    onClosed: function () {
      this.$emit("closed");
    },
    onClickDay: function (event) {
      const date = event.detail.date;
      const _a = this.data;
      const type = _a.type;
      const currentDate = _a.currentDate;
      const allowSameDay = _a.allowSameDay;
      if (type === "range") {
        const startDay = currentDate[0];
        const endDay = currentDate[1];
        if (startDay && !endDay) {
          const compareToStart = utils_1.compareDay(date, startDay);
          if (compareToStart === 1) {
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (allowSameDay) {
            this.select([date, date]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === "multiple") {
        let selectedIndex_1;
        const selected = currentDate.some(function (dateItem, index) {
          const equal = utils_1.compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex_1 = index;
          }
          return equal;
        });
        if (selected) {
          const cancelDate = currentDate.splice(selectedIndex_1, 1);
          this.setData({ currentDate: currentDate });
          this.unselect(cancelDate);
        } else {
          this.select(__spreadArrays(currentDate, [date]));
        }
      } else {
        this.select(date, true);
      }
    },
    unselect: function (dateArray) {
      const date = dateArray[0];
      if (date) {
        this.$emit("unselect", utils_1.copyDates(date));
      }
    },
    select: function (date, complete) {
      if (complete && this.data.type === "range") {
        const valid = this.checkRange(date);
        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.data.showConfirm) {
            this.emit([
              date[0],
              utils_1.getDayByOffset(date[0], this.data.maxRange - 1),
            ]);
          } else {
            this.emit(date);
          }
          return;
        }
      }
      this.emit(date);
      if (complete && !this.data.showConfirm) {
        this.onConfirm();
      }
    },
    emit: function (date) {
      const getTime = function (date) {
        return date instanceof Date ? date.getTime() : date;
      };
      this.setData({
        currentDate: Array.isArray(date) ? date.map(getTime) : getTime(date),
      });
      this.$emit("select", utils_1.copyDates(date));
    },
    checkRange: function (date) {
      const _a = this.data;
      const maxRange = _a.maxRange;
      const rangePrompt = _a.rangePrompt;
      if (maxRange && utils_1.calcDateNum(date) > maxRange) {
        toast_1.default({
          context: this,
          message:
            rangePrompt ||
            "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 " +
              maxRange +
              " \u5929",
        });
        return false;
      }
      return true;
    },
    onConfirm: function () {
      const _this = this;
      if (this.data.type === "range" && !this.checkRange()) {
        return;
      }
      wx.nextTick(function () {
        _this.$emit("confirm", utils_1.copyDates(_this.data.currentDate));
      });
    },
  },
});
