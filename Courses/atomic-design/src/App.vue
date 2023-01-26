<template>
  <div class="app">
    <SearchForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SearchForm } from '@/components/molecules'

export default defineComponent({
  components: {
    SearchForm
  }
})
</script>

<style lang="scss" scoped>
.app {
}
</style>
