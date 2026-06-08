const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const description = document.getElementById("desc");
const icon = document.getElementById("icon");

searchBtn.addEventListener("click", async function () {
  console.log(cityInput.value);
  const city = cityInput.value.trim();

  if (city == "") {
    alert("city nhi dala");
    return;
  }
  const API_KEY = "9910f9f8d9973528281b889421602b19";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("city not found");
    }
     const data = await response.json();
      console.log(data);

      cityName.textContent = data.name;
      temp.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      wind.textContent = ` Wind Speed: ${data.wind.speed} m/s`;
      description.textContent = `Description: ${data.weather[0].description}`;
      const iconCode = data.weather[0].icon;
      icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
  } catch (error) {
    console.error("Error:", error);
  }
});
