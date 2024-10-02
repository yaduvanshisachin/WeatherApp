const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weather_box = document.querySelector(".weather-box");
const weather_details = document.querySelector(".weather-details");
const inputBox = document.querySelector(".inputBox");
const temperature = document.querySelector('.temperature');
const wind_speed = document.querySelector('.text .info-wind span');
const humidity = document.querySelector('.info-humidity span');


async function checkWeather(city){
    const APIkey = '775cfa31bc5bdfe9141cdd74bb925e0d';
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    const weather_data = await fetch(url).then(response => response.json());
    console.log(weather_data);
    // console.log(weather_data.main['temp']);
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerText = `${weather_data.wind['speed']} Km/h`;
}

search.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})