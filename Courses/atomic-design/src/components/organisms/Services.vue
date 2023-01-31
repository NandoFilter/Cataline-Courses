<template>
  <div class="services">
    <Service
      title="Front end"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, mollitia unde, vero totam voluptas voluptatem recusandae a culpa veritatis pariatur. Cumque praesentium, odit dicta corrupti dolorum fugiat atque adipisci."
    />
    <Service
      title="Back end"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, mollitia unde, vero totam voluptas voluptatem recusandae a culpa veritatis pariatur. Cumque praesentium, odit dicta corrupti dolorum fugiat atque adipisci."
    />
    <Service
      title="Manutenção"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur, mollitia unde, vero totam voluptas voluptatem recusandae a culpa veritatis pariatur. Cumque praesentium, odit dicta corrupti dolorum fugiat atque adipisci."
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
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
