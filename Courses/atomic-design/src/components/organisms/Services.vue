<template>
  <div class="services">
    <Service
      title="Front End"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magni impedit est in! Incidunt ullam minima corporis quas quidem id quis consectetur nemo, assumenda tempore molestias culpa aliquid necessitatibus quam."
    />
    <Service
      title="Back End"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magni impedit est in! Incidunt ullam minima corporis quas quidem id quis consectetur nemo, assumenda tempore molestias culpa aliquid necessitatibus quam."
    />
    <Service
      title="Manutenção"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur magni impedit est in! Incidunt ullam minima corporis quas quidem id quis consectetur nemo, assumenda tempore molestias culpa aliquid necessitatibus quam."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules'

export default defineComponent({
  components: { Service }
})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
