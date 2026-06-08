const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementsByClassName("weatherCard");

searchBtn.addEventListener("click", async function(){
    try {
    const response = await fetch(`https://open-meteo.com{lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`);
    
    if (!response.ok) throw new Error('Network response failed');
    
    const data = await response.json();
    console.log('Data fetched on click:', data);
    
    // You can update your webpage UI here with the data
  } catch (error) {
    console.error('Error during click event fetch:', error);
  }
})