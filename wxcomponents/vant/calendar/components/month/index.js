"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../../../common/component");
const utils_1 = require("../../utils");
component_1.VantComponent({
  props: {
    date: {
      type: null,
      observer: "setDays",
    },
    type: {
      type: String,
      observer: "setDays",
    },
    color: String,
    minDate: {
      type: null,
      observer: "setDays",
    },
    maxDate: {
      type: null,
      observer: "setDays",
    },
    showMark: Boolean,
    rowHeight: [Number, String],
    formatter: {
      type: null,
      observer: "setDays",
    },
    currentDate: {
      type: [null, Array],
      observer: "setDays",
    },
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
  },
  data: {
    visible: true,
    days: [],
  },
  methods: {
    onClick: function (event) {
      const index = event.currentTarget.dataset.index;
      const item = this.data.days[index];
      if (item.type !== "disabled") {
        this.$emit("click", item);
      }
    },
    setDays: function () {
      const days = [];
      const startDate = new Date(this.data.date);
      const year = startDate.getFullYear();
      const month = startDate.getMonth();
      const totalDay = utils_1.getMonthEndDay(
        startDate.getFullYear(),
        startDate.getMonth() + 1
      );
      for (let day = 1; day <= totalDay; day++) {
        const date = new Date(year, month, day);
        const type = this.getDayType(date);
        let config = {
          date: date,
          type: type,
          text: day,
          bottomInfo: this.getBottomInfo(type),
        };
        if (this.data.formatter) {
          config = this.data.formatter(config);
        }
        days.push(config);
      }
      this.setData({ days: days });
    },
    getMultipleDayType: function (day) {
      const currentDate = this.data.currentDate;
      if (!Array.isArray(currentDate)) {
        return "";
      }
      const isSelected = function (date) {
        return currentDate.some(function (item) {
          return utils_1.compareDay(item, date) === 0;
        });
      };
      if (isSelected(day)) {
        const prevDay = utils_1.getPrevDay(day);
        const nextDay = utils_1.getNextDay(day);
        const prevSelected = isSelected(prevDay);
        const nextSelected = isSelected(nextDay);
        if (prevSelected && nextSelected) {
          return "multiple-middle";
        }
        if (prevSelected) {
          return "end";
        }
        return nextSelected ? "start" : "multiple-selected";
      }
      return "";
    },
    getRangeDayType: function (day) {
      const _a = this.data;
      const currentDate = _a.currentDate;
      const allowSameDay = _a.allowSameDay;
      if (!Array.isArray(currentDate)) {
        return;
      }
      const startDay = currentDate[0];
      const endDay = currentDate[1];
      if (!startDay) {
        return;
      }
      const compareToStart = utils_1.compareDay(day, startDay);
      if (!endDay) {
        return compareToStart === 0 ? "start" : "";
      }
      const compareToEnd = utils_1.compareDay(day, endDay);
      if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
        return "start-end";
      }
      if (compareToStart === 0) {
        return "start";
      }
      if (compareToEnd === 0) {
        return "end";
      }
      if (compareToStart > 0 && compareToEnd < 0) {
        return "middle";
      }
    },
    getDayType: function (day) {
      const _a = this.data;
      const type = _a.type;
      const minDate = _a.minDate;
      const maxDate = _a.maxDate;
      const currentDate = _a.currentDate;
      if (
        utils_1.compareDay(day, minDate) < 0 ||
        utils_1.compareDay(day, maxDate) > 0
      ) {
        return "disabled";
      }
      if (type === "single") {
        return utils_1.compareDay(day, currentDate) === 0 ? "selected" : "";
      }
      if (type === "multiple") {
        return this.getMultipleDayType(day);
      }
      /* istanbul ignore else */
      if (type === "range") {
        return this.getRangeDayType(day);
      }
    },
    getBottomInfo: function (type) {
      if (this.data.type === "range") {
        if (type === "start") {
          return "开始";
        }
        if (type === "end") {
          return "结束";
        }
        if (type === "start-end") {
          return "开始/结束";
        }
      }
    },
  },
});
