let text_area = document.querySelector(".text_area");
text_area.addEventListener("copy", eventcopy);
text_area.addEventListener("cut", eventcut);
text_area.addEventListener("paste", eventpaste);
function eventcopy(event) {
  event.preventDefault();
  console.log("copy");
}
function eventcut(event) {
  event.preventDefault();
  console.log("cut");
}
function eventpaste(event) {
  event.preventDefault();
  console.log("paste");
}
