document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '6b2ec8a53c3d6dcb59464d174a67b8a0';
    const weatherInfo = document.getElementById('weather-info');

    async function getWeather(city) {
        try {
            const protocol = window.location.protocol;
            const url = `${protocol}//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
            } else {
                const errorMessage = `Error: ${data.message || 'Unknown error'}`;
                weatherInfo.innerHTML = `<p>${errorMessage}</p>`;
            }
        } catch (error) {
            const errorMessage = `Error: ${error.message || 'Unknown error'}`;
            weatherInfo.innerHTML = `<p>${errorMessage}</p>`;
        }
    }

    // Example: Get weather for a specific city (e.g., London)
    getWeather('London');
});
