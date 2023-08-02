<template>
  <div>
    <h1>Product List</h1>
    <div v-if="loading">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
   
    </div>
    <div v-else>
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" :alt="product.title" class="product-img" />
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Category: {{ product.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: true,
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.products = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          this.loading = false;
        });
    },
  },
};
</script>
<style>
/* Add some basic styling if you wish */
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.product-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.product-item:hover {
  transform: translateY(-2px);
}

.product-img {
  width: 100%;
  height: 150px;
  object-fit: fill;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.product-details {
  text-align: center;
}

.product-details h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.product-details p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.loading {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #666;
}
</style>
