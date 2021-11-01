"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }
  let str = num + "";
  while (str.length < targetLength) {
    str = "0" + str;
  }
  return str;
}
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
function parseTimeData(time) {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);
  const milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}
exports.parseTimeData = parseTimeData;
function parseFormat(format, timeData) {
  const days = timeData.days;
  let hours = timeData.hours;
  let minutes = timeData.minutes;
  let seconds = timeData.seconds;
  let milliseconds = timeData.milliseconds;
  if (format.indexOf("DD") === -1) {
    hours += days * 24;
  } else {
    format = format.replace("DD", padZero(days));
  }
  if (format.indexOf("HH") === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace("HH", padZero(hours));
  }
  if (format.indexOf("mm") === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace("mm", padZero(minutes));
  }
  if (format.indexOf("ss") === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace("ss", padZero(seconds));
  }
  return format.replace("SSS", padZero(milliseconds, 3));
}
exports.parseFormat = parseFormat;
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
exports.isSameSecond = isSameSecond;
