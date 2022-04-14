const filterBox = document.querySelectorAll(".box");
document.querySelector("nav").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];

  filterBox.forEach((elem) => {
    elem.classList.remove("hide");
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("hide");
    }
  });
});

document.querySelectorAll("a.yakor").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);

    const topOffset = 1;
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});
