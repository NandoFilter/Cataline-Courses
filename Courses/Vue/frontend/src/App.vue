<template>
  <ButtonStyled text="Sucesso" color="success" @sayHello="print($event)" />
  <ButtonStyled text="Perigo" color="danger" />
  <ButtonStyled :text="123" :user="user" />

  <ButtonStyled text="Facebook">
    <template v-slot:before>
      <i class="fa-brands fa-facebook-f"></i>
    </template>
  </ButtonStyled>
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
  methods: {
    print(event: string) {
      console.log(event)
    },
  },
})
</script>

<style scoped>
/* Estilização profunda */
::v-deep.button-styled span {
  color: #000;
}
</style>
