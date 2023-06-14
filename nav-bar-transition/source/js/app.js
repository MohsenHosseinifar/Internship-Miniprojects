let mainNav = document.getElementById("mainNav");
let logo = document.querySelector("img");
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    mainNav.classList.add("bg-black");
    mainNav.classList.add("txt-white");
    logo.style.height = "64px";
  }
  if (document.documentElement.scrollTop === 0) {
    mainNav.classList.remove("bg-black");
    mainNav.classList.remove("txt-white");
    logo.style.height = "84px";
  }
});
function btnscroll() {
  window.scrollTo(0, 0);
  document.style.transition = " 2s";
}
