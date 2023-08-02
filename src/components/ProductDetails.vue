<template>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>{{ product.title }}</h1>
      <img :src="product.image" :alt="product.title" />
      <p>Price: ${{ product.price }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Description: {{ product.description }}</p>
    </div>
  </template>
  
  <script>
  import { fetchProduct } from "@/services/api";
  
  export default {
    data() {
      return {
        loading: true,
        product: null,
      };
    },
    created() {
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        const productId = this.$route.params.productId;
        fetchProduct(productId)
          .then((response) => {
            this.product = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error fetching product details:", error);
            this.loading = false;
          });
      },
    },
  };
  </script>
  