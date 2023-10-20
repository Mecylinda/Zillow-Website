const apiKey = "288b341ce53c7d45ca4812f2015dc6c1";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});
async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("Network Response was not Ok");
    }
    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels Like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ];
    weatherDataEl.querySelector(".icon").innerHTML=`<img src="https://openweathermap.org/img/wn/${icon}.png"alt="Weather Icon">`;
     weatherDataEl.querySelector(".temperature").textContent=`${temperature}°C`;
      weatherDataEl.querySelector(".description").textContent=`${description}`;

       weatherDataEl.querySelector(".details").innerHTML= details.map((details)=>`<div>${details}</div>`).join("");
  } catch (error) {weatherDataEl.querySelector(
    ".icon"
  ).innerHTML = "";
  weatherDataEl.querySelector(".temperature").textContent = "";
  weatherDataEl.querySelector(".description").textContent = "An error happened, please try again later";

  weatherDataEl.querySelector(".details").innerHTML = "";}
}
