const apiKey = "8e77a4d19891bc565b33c5a2dea14339";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        alert("Invalid city name!");
    }else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".details").innerHTML = 
            `Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} km/h`;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});