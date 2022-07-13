<template>
  <h1>
    <!-- v-bind -->
    <a :href="product.url" :class="productClass">
      {{ product.name }}
    </a>
  </h1>

  <!-- v-text e v-html não permitem misturar informações JS com HTML -->
  <p v-text="company"></p>

  <p>Acesse: <span v-html="link" /></p>

  <a href="#interno" @click.once.prevent="sayHello">Link Interno</a>
  <input type="text" @keyup.enter="sayHello" />
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
      link: '<a href="https://cataline.io">Cataline</a>',
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'success' : 'danger'
    },
  },
  methods: {
    sayHello() {
      console.log('Hello World')
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
