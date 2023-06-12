const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle("dark");
  if (document.body.className.includes("dark")) {
    localStorage.setItem("color", "dark");
  } else {
    localStorage.setItem("color", "light");
  }
});

window.onload = function () {
  let localstrogetheem = localStorage.getItem("color");
  if (localstrogetheem === "dark") {
    document.body.classList.add("dark");
  } else {
  }
};
