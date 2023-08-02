<template>
    <div class="weather-container">
      <div class="weather-bg"></div>
      <div class="content">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else class="weather-info">
          <h2>{{ city }}</h2>
          <p class="description"><i :class="['fas', weatherIcon]"></i> {{ description }}</p>
          <p><i class="fas fa-thermometer-half"></i> Temperature: {{ temperature }} °C</p>
          <p><i class="fas fa-tint"></i> Humidity: {{ humidity }}%</p>
          <p><i class="fas fa-wind"></i> Wind Speed: {{ windSpeed }} m/s</p>
          <button @click="fetchWeatherData">Get Weather</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchWeather } from "@/services/api";
  
  export default {
    data() {
      return {
        loading: true,
        city: "Dhaka", // Default city
        description: "",
        temperature: 0,
        humidity: 0,
        windSpeed: 0,
      };
    },
    created() {
      this.fetchWeatherData();
    },
    computed: {
      weatherIcon() {
        // Replace with your own logic to map weather conditions to Font Awesome icons
        // For example, you can use a switch case or if-else statements.
        // In this example, we'll use 'sun' for clear weather and 'cloud' for other conditions.
        return this.description.includes("clear") ? "fa-sun" : "fa-cloud";
      },
    },
    methods: {
      fetchWeatherData() {
        fetchWeather(this.city)
          .then((response) => {
            const data = response.data;
            this.description = data.weather[0].description;
            this.temperature = data.main.temp;
            this.humidity = data.main.humidity;
            this.windSpeed = data.wind.speed;
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error fetching weather data:", error);
            this.loading = false;
          });
      },
    },
  };
  </script>

  
<style>
/* Add some basic styling if you wish */
.weather-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background-color: #f0f0f0;
}

.weather-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://your-background-image-url.jpg");
  background-size: cover;
  opacity: 0.3;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.weather-info {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #666;
}

.description {
  font-size: 1.5rem;
  color: #444;
}

button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #45a049;
}

.loading {
  font-size: 1.2rem;
  color: #666;
}
</style>