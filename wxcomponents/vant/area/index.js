"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("../common/component");
const shared_1 = require("../picker/shared");
const COLUMNSPLACEHOLDERCODE = "000000";
component_1.VantComponent({
  classes: ["active-class", "toolbar-class", "column-class"],
  props: __assign(__assign({}, shared_1.pickerProps), {
    value: {
      type: String,
      observer: function (value) {
        this.code = value;
        this.setValues();
      },
    },
    areaList: {
      type: Object,
      value: {},
      observer: "setValues",
    },
    columnsNum: {
      type: null,
      value: 3,
      observer: function (value) {
        this.setData({
          displayColumns: this.data.columns.slice(0, +value),
        });
      },
    },
    columnsPlaceholder: {
      type: Array,
      observer: function (val) {
        this.setData({
          typeToColumnsPlaceholder: {
            province: val[0] || "",
            city: val[1] || "",
            county: val[2] || "",
          },
        });
      },
    },
  }),
  data: {
    columns: [{ values: [] }, { values: [] }, { values: [] }],
    displayColumns: [{ values: [] }, { values: [] }, { values: [] }],
    typeToColumnsPlaceholder: {},
  },
  mounted: function () {
    const _this = this;
    setTimeout(function () {
      _this.setValues();
    }, 0);
  },
  methods: {
    getPicker: function () {
      if (this.picker == null) {
        this.picker = this.selectComponent(".van-area__picker");
      }
      return this.picker;
    },
    onCancel: function (event) {
      this.emit("cancel", event.detail);
    },
    onConfirm: function (event) {
      const index = event.detail.index;
      let value = event.detail.value;
      value = this.parseOutputValues(value);
      this.emit("confirm", { value: value, index: index });
    },
    emit: function (type, detail) {
      detail.values = detail.value;
      delete detail.value;
      this.$emit(type, detail);
    },
    // parse output columns data
    parseOutputValues: function (values) {
      const columnsPlaceholder = this.data.columnsPlaceholder;
      return values.map(function (value, index) {
        // save undefined value
        if (!value) return value;
        value = JSON.parse(JSON.stringify(value));
        if (!value.code || value.name === columnsPlaceholder[index]) {
          value.code = "";
          value.name = "";
        }
        return value;
      });
    },
    onChange: function (event) {
      const _this = this;
      const _a = event.detail;
      const index = _a.index;
      const picker = _a.picker;
      const value = _a.value;
      this.code = value[index].code;
      this.setValues().then(function () {
        _this.$emit("change", {
          picker: picker,
          values: _this.parseOutputValues(picker.getValues()),
          index: index,
        });
      });
    },
    getConfig: function (type) {
      const areaList = this.data.areaList;
      return (areaList && areaList[type + "_list"]) || {};
    },
    getList: function (type, code) {
      const typeToColumnsPlaceholder = this.data.typeToColumnsPlaceholder;
      let result = [];
      if (type !== "province" && !code) {
        return result;
      }
      const list = this.getConfig(type);
      result = Object.keys(list).map(function (code) {
        return {
          code: code,
          name: list[code],
        };
      });
      if (code) {
        // oversea code
        if (code[0] === "9" && type === "city") {
          code = "9";
        }
        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }
      if (typeToColumnsPlaceholder[type] && result.length) {
        // set columns placeholder
        const codeFill =
          type === "province"
            ? ""
            : type === "city"
            ? COLUMNSPLACEHOLDERCODE.slice(2, 4)
            : COLUMNSPLACEHOLDERCODE.slice(4, 6);
        result.unshift({
          code: "" + code + codeFill,
          name: typeToColumnsPlaceholder[type],
        });
      }
      return result;
    },
    getIndex: function (type, code) {
      let compareNum = type === "province" ? 2 : type === "city" ? 4 : 6;
      const list = this.getList(type, code.slice(0, compareNum - 2));
      // oversea code
      if (code[0] === "9" && type === "province") {
        compareNum = 1;
      }
      code = code.slice(0, compareNum);
      for (let i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }
      return 0;
    },
    setValues: function () {
      const _this = this;
      const county = this.getConfig("county");
      let code = this.code;
      if (!code) {
        if (this.data.columnsPlaceholder.length) {
          code = COLUMNSPLACEHOLDERCODE;
        } else if (Object.keys(county)[0]) {
          code = Object.keys(county)[0];
        } else {
          code = "";
        }
      }
      const province = this.getList("province");
      const city = this.getList("city", code.slice(0, 2));
      const picker = this.getPicker();
      if (!picker) {
        return;
      }
      const stack = [];
      stack.push(picker.setColumnValues(0, province, false));
      stack.push(picker.setColumnValues(1, city, false));
      if (city.length && code.slice(2, 4) === "00") {
        code = city[0].code;
      }
      stack.push(
        picker.setColumnValues(
          2,
          this.getList("county", code.slice(0, 4)),
          false
        )
      );
      return Promise.all(stack)
        .catch(function () {})
        .then(function () {
          return picker.setIndexes([
            _this.getIndex("province", code),
            _this.getIndex("city", code),
            _this.getIndex("county", code),
          ]);
        })
        .catch(function () {});
    },
    getValues: function () {
      const picker = this.getPicker();
      return picker
        ? picker.getValues().filter(function (value) {
            return !!value;
          })
        : [];
    },
    getDetail: function () {
      const values = this.getValues();
      const area = {
        code: "",
        country: "",
        province: "",
        city: "",
        county: "",
      };
      if (!values.length) {
        return area;
      }
      const names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;
      if (area.code[0] === "9") {
        area.country = names[1] || "";
        area.province = names[2] || "";
      } else {
        area.province = names[0] || "";
        area.city = names[1] || "";
        area.county = names[2] || "";
      }
      return area;
    },
    reset: function (code) {
      this.code = code || "";
      return this.setValues();
    },
  },
});
