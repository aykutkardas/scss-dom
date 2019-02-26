"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function scssDom() {
  var scssElems = document.querySelectorAll("[class*='&']");
  scssElems.forEach(function(elem) {
    var className = elem.parentElement.classList[0] || "";
    var newClassName = elem.getAttribute("class").replace(/&/g, className);
    elem.setAttribute("class", newClassName);
  });
}

var _default = scssDom;
exports.default = _default;
