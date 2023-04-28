export async function fetchWeatherData(setStoreData) {
    const weatherData = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=33e89e9f5985c4a59d8060e8f122b223&units=metric", {
      method: "GET"
    });
    const weatherInfo = await weatherData.json();
    setStoreData(weatherInfo);
}