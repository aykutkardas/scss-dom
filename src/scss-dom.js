function scssDom() {
  const replacer = (elements, className = false) => {
    if (!Array.isArray(elements)) {
      return false;
    }

    elements.forEach(element => {
      if (!className) {
        className = element.classList[0];
      } else {
        const elementClassName = element.getAttribute("class");

        if (elementClassName) {
          element.setAttribute(
            "class",
            elementClassName.replace(/&/gim, className)
          );
        }
      }

      replacer([...element.children], element.classList[0]);
    });
  };

  const scssElements = document.querySelectorAll("[scss]");

  replacer([...scssElements]);
}
