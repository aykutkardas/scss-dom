"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function scssDom() {
  var replacer = function replacer(elements) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!Array.isArray(elements)) {
      return false;
    }

    elements.forEach(function (element) {
      if (!className) {
        className = element.classList[0];
      } else {
        var elementClassName = element.getAttribute("class");

        if (elementClassName) {
          element.setAttribute("class", elementClassName.replace(/&/gim, className));
        }
      }

      replacer(_toConsumableArray(element.children), element.classList[0]);
    });
  };

  var scssElements = document.querySelectorAll("[scss]");
  replacer(_toConsumableArray(scssElements));
}

var _default = scssDom;
exports.default = _default;