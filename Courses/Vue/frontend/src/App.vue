<template>
  <h1 class="static" :class="{ active: isActive, 'text-danger': hasError }">
    Hello World
  </h1>

  <h1 :class="['static', { 'text-danger': hasError }, className]">Fernando</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false,
      className: 'my-class',
    }
  },
})
</script>
