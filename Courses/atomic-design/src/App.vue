<template>
  <div class="app">
    <Service
      title="Front-End"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea repudiandae, labore eveniet maiores ipsa fugit, ad omnis hic laboriosam magni necessitatibus autem soluta recusandae aliquid similique doloribus! Suscipit, debitis odio!"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules'

export default defineComponent({
  components: {
    Service
  }
})
</script>

<style lang="scss" scoped>
.app {
}
</style>
