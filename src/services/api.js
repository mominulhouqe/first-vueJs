// src/services/api.js
import axios from "axios";

const API_BASE_URL = "https://example-shopping-mall-api.com/api";

export function fetchProduct(productId) {
  return axios.get(`${API_BASE_URL}/products/${productId}`);
}

export function fetchRandomJoke() {
  return axios.get("https://api.chucknorris.io/jokes/random");
}




const API_KEY = "5407f444ec2ac0a863d73cf2b1077b3f";
const API_WETHER_URL = "https://api.openweathermap.org/data/2.5";

export function fetchWeather(city) {
  return axios.get(`${API_WETHER_URL}/weather`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
}
