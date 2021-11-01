"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROW_HEIGHT = 64;
function formatMonthTitle(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return date.getFullYear() + "\u5E74" + (date.getMonth() + 1) + "\u6708";
}
exports.formatMonthTitle = formatMonthTitle;
function compareMonth(date1, date2) {
  if (!(date1 instanceof Date)) {
    date1 = new Date(date1);
  }
  if (!(date2 instanceof Date)) {
    date2 = new Date(date2);
  }
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }
  return year1 > year2 ? 1 : -1;
}
exports.compareMonth = compareMonth;
function compareDay(day1, day2) {
  if (!(day1 instanceof Date)) {
    day1 = new Date(day1);
  }
  if (!(day2 instanceof Date)) {
    day2 = new Date(day2);
  }
  const compareMonthResult = compareMonth(day1, day2);
  if (compareMonthResult === 0) {
    const date1 = day1.getDate();
    const date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }
  return compareMonthResult;
}
exports.compareDay = compareDay;
function getDayByOffset(date, offset) {
  date = new Date(date);
  date.setDate(date.getDate() + offset);
  return date;
}
exports.getDayByOffset = getDayByOffset;
function getPrevDay(date) {
  return getDayByOffset(date, -1);
}
exports.getPrevDay = getPrevDay;
function getNextDay(date) {
  return getDayByOffset(date, 1);
}
exports.getNextDay = getNextDay;
function calcDateNum(date) {
  const day1 = new Date(date[0]).getTime();
  const day2 = new Date(date[1]).getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}
exports.calcDateNum = calcDateNum;
function copyDates(dates) {
  if (Array.isArray(dates)) {
    return dates.map(function (date) {
      if (date === null) {
        return date;
      }
      return new Date(date);
    });
  }
  return new Date(dates);
}
exports.copyDates = copyDates;
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
exports.getMonthEndDay = getMonthEndDay;
function getMonths(minDate, maxDate) {
  const months = [];
  const cursor = new Date(minDate);
  cursor.setDate(1);
  do {
    months.push(cursor.getTime());
    cursor.setMonth(cursor.getMonth() + 1);
  } while (compareMonth(cursor, maxDate) !== 1);
  return months;
}
exports.getMonths = getMonths;
