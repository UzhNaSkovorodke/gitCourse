const filterBox = document.querySelectorAll(".box");
document.querySelector("nav").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];

  filterBox.forEach((elem) => {
    if (!elem.classList.contains(filterClass)) {
      elem.classList.add("hide");
    }
  });
});
