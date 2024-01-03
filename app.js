document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '6b2ec8a53c3d6dcb59464d174a67b8a0';
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
