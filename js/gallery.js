const apiKey = `W1ADz5KWEGzuIxvmiaF8O7AZxXPwgAgdwEF1RLsw`;
const galleryUrl = `https://images-api.nasa.gov/search?q={nasa}`;

const thubmnail = document.querySelectorAll(".thumbnail");
const imgPreview = document.querySelector(".big-img");
const imgText = document.querySelector(".img-text");
const galleryContainer = document.querySelector(".gallery-container-inner");

for (let i = 0; i < thubmnail.length; i++) {
  thubmnail[i].addEventListener("click", () => {
    scrollWindow();
    imgPreview.src = thubmnail[i].src;
    imgText.innerHTML = thubmnail[i].alt;
    return;
  });
}

function scrollWindow() {
  scrollWindow = function () {};
  window.scrollBy(0, 200);
}
