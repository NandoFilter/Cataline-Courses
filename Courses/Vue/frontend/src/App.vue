<template>
  <Header></Header>
  <h1>
    <!-- v-bind -->
    <a :href="product.url" :class="productClass">
      {{ product.name }}
    </a>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/HeaderApp.vue'

export default defineComponent({
  components: {
    Header,
  },
  data() {
    return {
      product: {
        name: 'Camisa',
        url: 'http://loja.com/produtos/12345',
        stock: true,
      },
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
