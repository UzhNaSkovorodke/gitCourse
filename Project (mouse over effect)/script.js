let container = document.querySelector(".container");
let layer0 = document.querySelector("#layer0");
let layer1 = document.querySelector("#layer1");

container.onmousemove = function (e) {
  let X = e.pageX;
  let Y = e.pageY;

  layer0.style.transform =
    "translate(" + (X / 100) * 3 + "px, " + (Y / 100) * 3 + "px)";
  layer1.style.transform = "translate(" + X / 100 + "px, " + Y / 100 + "px)";
};
