

const apiKey = "555bb10fd3d3daed71c1ea46770b01aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search_btn");
const recentSearch = document.getElementById("recentSearches");

let recent = [];

searchButton.addEventListener("click",()=>{
  const city = searchInput.value;
  if(city){
    checkWeather(city);
    updateCitySearch(city);
  }
})

function updateCitySearch(city){
  if(!recent.includes(city)){
    recent.push(city);
    renderCity();
  }
}

function renderCity(){
  recentSearches.innerHTML = "";
  recent.forEach((city)=>{
  const citySearch = document.createElement("span");
  citySearch.textContent = city;
  citySearch.addEventListener("click",()=>{
  searchInput.value = city;
  checkWeather(city);
  });
  recentSearches.appendChild(citySearch)
  });
}


async function checkWeather(city){
  
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  document.getElementById("cityname").innerHTML = data.name;
  document.getElementById("speed").innerHTML = data.wind.speed + "Km/Hr"+"<br>"+"Wind Speed";
  document.getElementById("humidity").innerHTML = data.main.humidity +"<br>"+"Humidity";
  document.getElementById("feels_cel").innerHTML ="Feels Like " + data.main.feels_like + " C";
  document.getElementById("cel").innerHTML = Math.round(data.main.temp) + " C";
}

