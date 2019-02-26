function scssDom() {
  var scssElems = document.querySelectorAll("[class*='&']");
  scssElems.forEach(function(elem) {
    var className = elem.parentElement.classList[0] || "";
    var newClassName = elem.getAttribute("class").replace(/&/g, className);
    elem.setAttribute("class", newClassName);
  });
}
