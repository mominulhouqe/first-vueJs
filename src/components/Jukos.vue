<template>

    <div class="joke-container">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div class="joke">
          <img src="@/assets/chuck-norris.png" alt="Chuck Norris" />
          <p>{{ joke }}</p>
        </div>
        <button @click="fetchNewJoke">Get Another Joke</button>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchRandomJoke } from "@/services/api";
  
  export default {
    data() {
      return {
        loading: true,
        joke: "",
      };
    },
    created() {
      this.fetchNewJoke();
    },
    methods: {
      fetchNewJoke() {
        fetchRandomJoke()
          .then((response) => {
            this.joke = response.data.value;
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error fetching joke:", error);
            this.loading = false;
          });
      },
    },
  };
  </script>
  
  <style>
  .joke-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  
  .joke {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  