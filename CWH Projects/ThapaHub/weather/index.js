let weatherLocation = document.querySelector(".weather-location");
let weatherDateAndTime = document.querySelector(".weather-date-and-time");
let weatherForecast = document.querySelector(".weather-forecast");
let weatherIcon = document.querySelector(".weather-icon");
let weatherTemperature = document.querySelector(".weather-temperature");
let minTemp = document.querySelector(".min-temp");
let maxTemp = document.querySelector(".max-temp");


let feelsLike = document.querySelector(".feels-deg");
let windSpeed = document.querySelector(".wind-speed");
let pressure = document.querySelector(".pressure");
let humidity = document.querySelector(".Humidity");
// 54d7ae534aea8a8f3061d9841e4d03b8

let citySearch = document.querySelector(".weather-search")




// to get the actual country name
const getCountryName = (code) => {
    return new Intl.DisplayNames([code], { type: "region" }).of(code);

    //.of karne se vo properly convert kar dega
};





let city = "Faridabad" // ye humne by default set kara hai ki first time open karne par yehi data dikhaega.


// search functionality
citySearch.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityName = document.querySelector(".city-name");
    console.log(cityName.value);

    city = cityName.value;

    // city update karke fir se fn call karna padega tabhi to update karega data ko
    getWeatherData();

    cityName.value = ""; // search hone ke bad input field ko empty kar dega
})



const getWeatherData = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54d7ae534aea8a8f3061d9841e4d03b8`

    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);

        const {main, name, weather, wind, sys} = data;
        weatherLocation.innerHTML = `${name}, ${getCountryName(sys.country)}`;

        const date = new Date(data.dt * 1000);
        weatherDateAndTime.innerHTML = date;
        // weatherDateAndTime.innerHTML = date.toLocaleString();
        
        weatherTemperature.innerHTML = `${main.temp}&#176`;

        minTemp.innerHTML = `Min: ${main.temp_min}&#176`;
        maxTemp.innerHTML = `Max: ${main.temp_max}&#176`;

        weatherForecast.innerHTML = weather[0].main;
        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/>`;

        feelsLike.innerHTML = `${main.feels_like}&#176`
        humidity.innerHTML = `${main.humidity} %`;
        windSpeed.innerHTML = `${wind.speed} m/s`;
        pressure.innerHTML = `${main.pressure} hpa`;
    } catch (error) {
        console.log(error);
    }
};
// feels_like
// humidity
// pressure

window.addEventListener('load', getWeatherData());