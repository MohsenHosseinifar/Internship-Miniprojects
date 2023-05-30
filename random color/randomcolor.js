let redcolor, bluecolor, greencolor;

setInterval(function () {
  let valuered = Math.floor(Math.random() * 255);
  let valueblue = Math.floor(Math.random() * 255);
  let valuegreen = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor =
    "rgb(" + valuered + "," + valueblue + "," + valuegreen + ")";
}, 1000);
