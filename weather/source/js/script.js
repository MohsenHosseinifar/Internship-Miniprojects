CityData = {
  yazd: {
    city: "yazd",
    temp: "15c",
    weadder: "sunny",
    humidty: 23,
    windspeed: 32,
  },
  tehran: {
    city: "tehran",
    temp: "32c",
    weadder: "whindy",
    humidty: 12,
    windspeed: 64,
  },
};
let $ = document;
let searchbtn = $.getElementById("btn");
let searchbar = $.querySelector(".search-bar");
searchbtn.addEventListener("click", function () {
  let sidebarvalue = searchbar.value;
  let maincitydata = CityData[sidebarvalue];

  console.log(CityData);
  function MyMessage() {
    const randomIndex = Math.floor(Math.random() * images.length);

    document.body.style.backgroundImage =
      "url('/source" + images[randomIndex] + "')";
  }
  if (maincitydata) {
    $.querySelector(".city").innerHTML = "city:" + " " + maincitydata.city;
    $.querySelector(".temp").innerHTML = maincitydata.temp;
    $.querySelector(".description").innerHTML = maincitydata.weadder;
    $.querySelector(".humidity").innerHTML = maincitydata.humidty;
    $.querySelector(".wind").innerHTML = maincitydata.windspeed;
    $.querySelector(".weather").classList.remove("loading");
  } else {
    $.querySelector(".weather").classList.remove("loading");
    $.querySelector(".error").innerHTML = "شهر مورد نظر یافت نشد ";
  }
});

/*تکرار تصویر  */
const images = [
  "/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
  "/photo-1461696114087-397271a7aedc.avif",
  "/photo-1477346611705-65d1883cee1e.avif",
  "/photo-1505832018823-50331d70d237.avif",
  "/photo-1511300636408-a63a89df3482.avif",
  // ...
];

// تولید یک شماره تصادفی بین 0 تا تعداد تصاویر

function MyMessage() {
  const randomIndex = Math.floor(Math.random() * images.length);

  document.body.style.backgroundImage =
    "url('/source" + images[randomIndex] + "')";
}
