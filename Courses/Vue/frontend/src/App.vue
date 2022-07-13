<template>
  <h1>{{ message }}</h1>
  <h1>{{ count }}</h1>

  <button @click="count++">Clique</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello World',
      count: 0,
    }
  },
  beforeCreate() {
    // Sem acesso aos dados
    console.log(this.message) // undefined
  },
  created() {
    // Com acesso aos dados
    console.log(this.message) // 'Hello World'
  },
  beforeMount() {
    // Sem acesso a DOM
    console.log(this.$el) // null
  },
  mounted() {
    // Com acesso a DOM
    console.log(this.$el) // <h1>Hello World</h1>
  },
  beforeUpdate() {
    // Ocorre antes da mudança de algum dado
    console.log('Antes da atualização')
  },
  updated() {
    // Ocorre após a mudança de algum dado
    console.log('Depois da atualização')
  },
})
</script>
