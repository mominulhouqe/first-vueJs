<template>
  <div>
    <h1>Breaking Bad Characters</h1>
    <button @click="fetchCharacters">Fetch Characters</button>
    <ul v-if="characters.length > 0">
      <li v-for="character in characters" :key="character.char_id">
        <h2>{{ character.name }}</h2>
        <img :src="character.img" :alt="character.name" />
        <p>Nickname: {{ character.nickname }}</p>
        <p>Occupation: {{ character.occupation.join(', ') }}</p>
        <p>Status: {{ character.status }}</p>
      </li>
    </ul>
    <p v-else>No characters fetched yet.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    fetchCharacters() {
      axios.get('https://www.breakingbadapi.com/api/characters').then((response) => {
        this.characters = response.data;
      }).catch((error) => {
        console.error('Error fetching characters:', error);
      });
    },
  },
};
</script>

<style>
/* Add some basic styling if you wish */
h1 {
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
</style>
