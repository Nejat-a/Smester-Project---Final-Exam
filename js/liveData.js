window.onload = function fireJs(){
const mainUrl = `http://api.open-notify.org/`;
const spinner = document.querySelectorAll(".spinner");
const apiKey = `W1ADz5KWEGzuIxvmiaF8O7AZxXPwgAgdwEF1RLsw`;
const nasaApiUrl = `https: //api.nasa.gov/insight_weather/?api_key=${apiKey}`;

//ISS current location
function getLocation() {
  const ISSCurrentLocation = document.querySelector("#ISSCurrentLocation");
  const ISSCurrentLocationUrl = `${mainUrl}iss-now.json`;
  fetch(ISSCurrentLocationUrl)
    .then((response) => response.json())
    .then((data) => {
      ISSCurrentLocation.innerHTML = `
    <b>Latitude:</b> "${data.iss_position.latitude}"<br>
    <b>Longitude:</b> "${data.iss_position.longitude}"<br>
    <b>Timestamp:<b> "${data.timestamp}"`;
      spinner[0].style.display = "none";
    })
    .catch((error) => (document.location.href = "error.html"));
  setTimeout(getLocation, 3000);
}
getLocation();

//get users location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLatitude = position.coords.latitude;
      const userLongitude = position.coords.longitude;
      const ISSPassTimes = document.querySelector("#ISSPassTimes");
      const proxyUrl = `https://cors-anywhere.herokuapp.com/`;
      const ISSPassTimesUrl = `${mainUrl}iss-pass.json?lat=${userLatitude}&lon=${userLongitude}`;
      console.log(userLatitude + " " + userLongitude);
      fetch(proxyUrl + ISSPassTimesUrl)
        .then((response) => response.json())
        .then((data) => {
          ISSPassTimes.innerHTML = `There is <b>5</b> passes relevant to your location(We need your position data for this to work)`;
          spinner[1].style.display = "none";
        })
        .catch((error) =>{
          ISSPassTimes.innerHTML = 'Sorry, something went wrong. Please refresh the page '//Cors Proxy dosent allow to many requests, resulting error
        });
    });
  } else {
    ISSPassTimes.innerHTML =
      "Can not read your location, allow location request! This is needed so we can show related data";//user dosent allow position request
  }
}

getUserLocation();

//How many people in space
function showAstronauts() {
  const PeopleInSpace = document.querySelector("#PeopleInSpace");
  const PeopleInSpaceUrl = `${mainUrl}astros.json`;
  fetch(PeopleInSpaceUrl)
    .then((response) => response.json())
    .then((data) => {
      const listOfAstronauts = data.people;
      let newContent = "";
      listOfAstronauts.forEach((people) => {
        newContent += `
    <li>${people.name}</li>`;
      });
      PeopleInSpace.innerHTML = `There are currently ${data.number} astronaut in space:<br> ${newContent}`;
      spinner[2].style.display = "none";
    })
    .catch((error) => (document.location.href = "error.html"));
  setTimeout(getLocation, 3000);
}

showAstronauts();

//Picture of the day from NASA

function showPicture() {
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const ImageContainer = document.querySelector(".image-container");
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      ImageContainer.innerHTML = `<img src="${data.url}" alt="${data.title}">`;
      if(data.media_type === "video"){
        console.log('media type is a video');
        ImageContainer.innerHTML = `<iframe class="live-media" src="${data.url}" alt="${data.title}"></iframe>`;
        const iframe = document.querySelector('.live-media');
      
      }
      spinner[3].style.display = "none";
    })
    .catch((error) => (document.location.href = "error.html"));
}

showPicture();

}