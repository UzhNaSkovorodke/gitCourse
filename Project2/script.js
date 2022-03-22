function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector("");
var project = document.querySelector("");

button.addEventListener("click", () => {
  console.log("КЛИК");
});
