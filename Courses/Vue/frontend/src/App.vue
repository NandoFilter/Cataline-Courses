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
    console.log(this.message) // undefined
  },
  created() {
    console.log(this.message) // 'Hello World'
  },
})
</script>
