export async function fetchWeatherData(setStoreData, state) {
    const weatherData = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + state + "&appid=33e89e9f5985c4a59d8060e8f122b223&units=metric", {
      method: "GET"
    });
    const weatherInfo = await weatherData.json();
    setStoreData(weatherInfo);
}