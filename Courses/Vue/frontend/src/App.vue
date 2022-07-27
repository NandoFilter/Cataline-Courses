<template>
  <ButtonStyled text="Sucesso" color="success" @sayHello="print($event)" />
  <ButtonStyled text="Perigo" color="danger" />
  <ButtonStyled :text="123" :user="user" />

  <ButtonStyled text="Facebook">
    <template v-slot:before>
      <i class="fa-brands fa-facebook-f"></i>
    </template>
  </ButtonStyled>

  <ul>
    <li @click="currentView = 'Home'">Home</li>
    <li @click="currentView = 'About'">Sobre</li>
    <li @click="currentView = 'Contact'">Contato</li>
  </ul>

  <component :is="currentView" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'

export default defineComponent({
  components: { Home, About, Contact },
  data() {
    return {
      user: {
        id: 1,
        name: 'Fernando',
      },

      currentView: 'Home',
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
