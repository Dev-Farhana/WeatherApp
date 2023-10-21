
// function getWeatherData(cityName) {
// const apiKey = 'YOUR_API_KEY'; // replace with your actual API key
// const units = 'metric'; // you can change this to 'imperial' for Fahrenheit

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//         const temperature = data.main.temp;
//         const weatherDescription = data.weather[0].description;
//         const weatherIcon = data.weather[0].icon;

//         displayWeatherData(cityName, temperature, weatherDescription, weatherIcon);
//     })
//     .catch(error => {
//         console.error('Error fetching weather data:', error);
//     });
// }

const apikey = "46f80a02ecae410460d59960ded6e1c6";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault(); 
    const city = document.querySelector('#city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Now, update the weather data in the DOM
        document.querySelector('.temperature').textContent = data.main.temp;
        document.querySelector('.description').textContent = data.weather[0].description;

        // Additional weather data details
        document.querySelector('.details').innerHTML = `
            <div> Feels Like: ${data.main.feels_like}°C </div>
            <div> Humidity: ${data.main.humidity}% </div>
            <div> Wind speed: ${data.wind.speed} m/s </div>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
});
