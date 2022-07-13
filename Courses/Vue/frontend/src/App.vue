<template>
  <h1>
    <!-- v-bind -->
    <a :href="product.url" :class="productClass">
      {{ product.name }}
    </a>
  </h1>

  <!-- Não permite misturar informações JS com HTML -->
  <!-- <p v-text="company">é boa</p> -->
  <p v-text="company"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true,
      },
      company: 'Cataline',
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'success' : 'danger'
    },
  },
})
</script>

<style>
.success {
  color: green;
}

.danger {
  color: red;
}
</style>
