<template>
  <button :class="['button-styled', color]">
    <slot name="before" />
    {{ text }} {{ user?.name }}
    <slot name="after" />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type color = 'success' | 'danger' | 'primary'

interface User {
  id: number
  name: string
}

export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value: color) => {
        return ['success', 'danger', 'primary'].includes(value)
      },
    },
    user: {
      type: Object as PropType<User>,
    },
  },
})
</script>

<style scoped>
.button-styled {
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 1rem;
}

.success {
  background-color: #077c07;
}

.danger {
  background-color: #9e0808;
}

.primary {
  background-color: #2d6cea;
}
</style>
