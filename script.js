document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const weatherInfo = document.getElementById('weather-info');

    async function getWeather(city) {
        try {
            const protocol = window.location.protocol;
            const response = await fetch(`${protocol}//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            if (response.ok) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
            } else {
                weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Example: Get weather for a specific city (e.g., London)
    getWeather('London');
});
