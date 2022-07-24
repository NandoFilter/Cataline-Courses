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

  <!-- v-on -->
  <a href="#interno" @click.once.prevent="sayHello">Link Interno</a>
  <input type="text" @keyup.enter="sayHello" />

  <!-- v-once -->
  <p v-once>Contagem inicial: {{ count }}</p>
  <p>Contagem atualizada: {{ count }}</p>

  <button @click="count++">Aumentar contagem</button>

  <!-- v-if não renderiza os elementos -->
  <h1 v-if="isMale">Masculino</h1>
  <h1 v-else-if="isFem">Feminino</h1>
  <h1 v-else>Outro</h1>

  <!-- v-show esconde os elementos -->
  <h1 v-show="isMale">Masculino</h1>
  <h1 v-show="isFem">Feminino</h1>

  <!-- v-for -->
  <ul>
    <li v-for="product in products" :key="product.id">
      <p>{{ product.name }}</p>
    </li>
  </ul>

  <!-- v-model -->
  <form>
    <!-- Modificador Lazy só carrega valor quando campo perder foco  -->
    <!-- Modificador Trim remove espaços -->
    <input type="text" placeholder="Nome" v-model.lazy.trim="name" />

    <!-- Modificador Number transforma o valor em numérico -->
    <input type="number" placeholder="Idade" v-model.number="age" />

    <textarea rows="2" placeholder="Descrição" v-model="message"></textarea>

    <input type="checkbox" v-model="newsletter" /> Newsletter <br />

    <input type="radio" name="color" value="vermelho" v-model="color" /> Red
    <input type="radio" name="color" value="verde" v-model="color" /> Green
    <input type="radio" name="color" value="azul" v-model="color" /> Blue

    <select v-model="fruit">
      <option disabled selected>Selecione uma fruta</option>
      <option value="uva">Uva</option>
      <option value="banana">Banana</option>
      <option value="morango">Morango</option>
    </select>
  </form>

  <p>Nome: {{ name }}</p>
  <p>Idade: {{ age }}</p>
  <p>Mensagem: {{ message }}</p>
  <p>Newsletter: {{ newsletter }}</p>
  <p>Cor: {{ color }}</p>
  <p>Fruta: {{ fruit }}</p>
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
      count: 1,
      gender: 'M',

      products: [
        { id: 1, name: 'Camisa', stock: true },
        { id: 2, name: 'Bota', stock: false },
        { id: 3, name: 'Chapéu', stock: false },
        { id: 4, name: 'Cinto', stock: true },
      ],

      name: '',
      age: 0,
      message: '',
      newsletter: false,
      color: '',
      fruit: '',
    }
  },
  computed: {
    productClass(): string {
      return this.product.stock ? 'success' : 'danger'
    },
    isMale(): boolean {
      return this.gender === 'M'
    },
    isFem(): boolean {
      return this.gender === 'F'
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

input[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}
</style>
