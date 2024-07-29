const apiKey = "555bb10fd3d3daed71c1ea46770b01aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search_btn");
const recentSearches = document.getElementById("recentSearch");
let recent = [];

searchBtn.addEventListener("click",func);

function func(){
    let cityValue = searchInput.value;
    checkWeather(cityValue);
    updateRecentSearch(cityValue);
}

function updateRecentSearch(city){
    recent.push(city);
    renderRecentSearch(city);
}

function renderRecentSearch(city){
    recentSearches.innerHTML="";
    recent.forEach((city)=>{

        const cityName = document.createElement("span");
        cityName.textContent = city;
        cityName.addEventListener("click",()=>{
            searchInput.value = city;
            checkWeather(city);
        })
    recentSearches.appendChild(cityName)
    })
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