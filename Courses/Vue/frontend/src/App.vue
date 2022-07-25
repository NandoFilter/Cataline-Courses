<template>
  <ButtonStyled text="Sucesso" color="success" />
  <ButtonStyled text="Perigo" color="danger" />
  <ButtonStyled :text="123" :user="user"></ButtonStyled>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: {
    ButtonStyled,
  },
  data() {
    return {
      user: {
        id: 1,
        name: 'Fernando',
      },
    }
  },
})
</script>

<style scoped>
/* Estilização profunda */
::v-deep.button-styled span {
  color: #000;
}
</style>
