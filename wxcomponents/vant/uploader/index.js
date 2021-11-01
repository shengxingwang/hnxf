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
const utils_1 = require("./utils");
const shared_1 = require("./shared");
component_1.VantComponent({
  props: __assign(
    __assign(
      {
        disabled: Boolean,
        multiple: Boolean,
        uploadText: String,
        useBeforeRead: Boolean,
        afterRead: null,
        beforeRead: null,
        previewSize: {
          type: null,
          value: 90,
        },
        name: {
          type: [Number, String],
          value: "",
        },
        accept: {
          type: String,
          value: "image",
        },
        fileList: {
          type: Array,
          value: [],
          observer: "formatFileList",
        },
        maxSize: {
          type: Number,
          value: Number.MAX_VALUE,
        },
        maxCount: {
          type: Number,
          value: 100,
        },
        deletable: {
          type: Boolean,
          value: true,
        },
        showUpload: {
          type: Boolean,
          value: true,
        },
        previewImage: {
          type: Boolean,
          value: true,
        },
        previewFullImage: {
          type: Boolean,
          value: true,
        },
        imageFit: {
          type: String,
          value: "scaleToFill",
        },
        uploadIcon: {
          type: String,
          value: "photograph",
        },
      },
      shared_1.chooseImageProps
    ),
    shared_1.chooseVideoProps
  ),
  data: {
    lists: [],
    isInCount: true,
  },
  methods: {
    formatFileList: function () {
      const _a = this.data;
      const _b = _a.fileList;
      const fileList = _b === void 0 ? [] : _b;
      const maxCount = _a.maxCount;
      const lists = fileList.map(function (item) {
        return __assign(__assign({}, item), {
          isImage:
            typeof item.isImage === "undefined"
              ? utils_1.isImageFile(item)
              : item.isImage,
        });
      });
      this.setData({ lists: lists, isInCount: lists.length < maxCount });
    },
    getDetail: function (index) {
      return {
        name: this.data.name,
        index: index == null ? this.data.fileList.length : index,
      };
    },
    startUpload: function () {
      const _this = this;
      const _a = this.data;
      const maxCount = _a.maxCount;
      const multiple = _a.multiple;
      const accept = _a.accept;
      const lists = _a.lists;
      const disabled = _a.disabled;
      if (disabled) return;
      utils_1
        .chooseFile(
          __assign(__assign({}, this.data), {
            maxCount: maxCount - lists.length,
          })
        )
        .then(function (res) {
          let file = null;
          if (utils_1.isVideo(res, accept)) {
            file = __assign({ path: res.tempFilePath }, res);
          } else {
            file = multiple ? res.tempFiles : res.tempFiles[0];
          }
          _this.onBeforeRead(file);
        })
        .catch(function (error) {
          _this.$emit("error", error);
        });
    },
    onBeforeRead: function (file) {
      const _this = this;
      const _a = this.data;
      const beforeRead = _a.beforeRead;
      const useBeforeRead = _a.useBeforeRead;
      let res = true;
      if (typeof beforeRead === "function") {
        res = beforeRead(file, this.getDetail());
      }
      if (useBeforeRead) {
        res = new Promise(function (resolve, reject) {
          _this.$emit(
            "before-read",
            __assign(__assign({ file: file }, _this.getDetail()), {
              callback: function (ok) {
                ok ? resolve() : reject();
              },
            })
          );
        });
      }
      if (!res) {
        return;
      }
      if (utils_1.isPromise(res)) {
        res.then(function (data) {
          return _this.onAfterRead(data || file);
        });
      } else {
        this.onAfterRead(file);
      }
    },
    onAfterRead: function (file) {
      const maxSize = this.data.maxSize;
      const oversize = Array.isArray(file)
        ? file.some(function (item) {
            return item.size > maxSize;
          })
        : file.size > maxSize;
      if (oversize) {
        this.$emit("oversize", __assign({ file: file }, this.getDetail()));
        return;
      }
      if (typeof this.data.afterRead === "function") {
        this.data.afterRead(file, this.getDetail());
      }
      this.$emit("after-read", __assign({ file: file }, this.getDetail()));
    },
    deleteItem: function (event) {
      const index = event.currentTarget.dataset.index;
      this.$emit(
        "delete",
        __assign(__assign({}, this.getDetail(index)), {
          file: this.data.fileList[index],
        })
      );
    },
    onPreviewImage: function (event) {
      const index = event.currentTarget.dataset.index;
      const lists = this.data.lists;
      const item = lists[index];
      this.$emit(
        "click-preview",
        __assign({ url: item.url || item.path }, this.getDetail(index))
      );
      if (!this.data.previewFullImage) return;
      wx.previewImage({
        urls: lists
          .filter(function (item) {
            return item.isImage;
          })
          .map(function (item) {
            return item.url || item.path;
          }),
        current: item.url || item.path,
        fail: function () {
          wx.showToast({ title: "预览图片失败", icon: "none" });
        },
      });
    },
  },
});
