<template>
  <div>
    <h1>Random Users</h1>
    <button @click="fetchRandomUser"> Random User</button>
    <div v-if="user" class="user-info">
      <img :src="user.picture.large" :alt="user.name.first" />
      <p>Name: {{ user.name.first }} {{ user.name.last }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>No user data fetched yet.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    fetchRandomUser() {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          this.user = response.data.results[0];
        })
        .catch((error) => {
          console.error("Error fetching random user:", error);
        });
    },
  },
};
</script>

<style>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}

button:hover {
  background-color: #45a049;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

p {
  margin: 0.5rem 0;
}

/* Add any additional styling you desire */
</style>



