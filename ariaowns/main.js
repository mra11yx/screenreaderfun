let theExpandables = [].slice.call(document.querySelectorAll("div.expandable"));
//doing slice.call so that we can use forEach in IE11

let actionables = [].slice.call(document.querySelectorAll("div.expandable a, div.expandable button"))

let expandBtns = [].slice.call(
  document.querySelectorAll("button[aria-expanded]")
);

expandBtns.forEach(function(elem) {
  elem.addEventListener("click", function(evt) {
    let curr = evt.target;
    let tgt = document.getElementById(evt.target.getAttribute("data-tgt"));
    if (
      curr.getAttribute("aria-expanded") === "false" &&
      tgt.classList.contains("hide")
    ) {
      curr.setAttribute("aria-expanded", "true");
      tgt.classList.remove("hide");
    } else if (
      curr.getAttribute("aria-expanded") === "true" &&
      !tgt.classList.contains("hide")
    ) {
      curr.setAttribute("aria-expanded", "false");
      tgt.classList.add("hide");
    }
  });
});

actionables.forEach(function(elem) {
  elem.addEventListener("click", function(evt) {

    alert("Clicked: "+evt.target.outerHTML);
  });
});