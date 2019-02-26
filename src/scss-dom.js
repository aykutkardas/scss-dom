function scssDom() {
  const scssElems = document.querySelectorAll("[class*='&']");
  scssElems.forEach(elem => {
    const className = elem.parentElement.classList[0] || "";
    const newClassName = elem.getAttribute("class").replace(/&/g, className);
    elem.setAttribute("class", newClassName);
  });
}
