<template>
  <h1>{{ message }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello World',
      posts: [],
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
})
</script>
