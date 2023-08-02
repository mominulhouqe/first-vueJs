<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Product from "./components/Product.vue";
import Jukos from "./components/Jukos.vue";
import Wether from "./components/Wether.vue";
</script>

<template>
  <HelloWorld />
  <Jukos />
  <Product />

  <div>
    <h1>Weather App</h1>

    <Wether />
  </div>
</template>
