<template>
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'About'">Sobre</li>
    <li @click="view = 'Contact'">Contato</li>
  </ul>

  <!--
    Transitions Hooks
    -------------------------
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  -->

  <!--
    Vue oferece alguns modos de transição alternativos:

    in-out
    Novo elemento realiza a transição de entrada primeiro; quando completada, o elemento atual realiza a transição de saída.

    out-in
    Elemento atual realiza a transição de saída primeiro; quando completada, o novo elemento realiza a transição de entrada.
  -->

  <transition
    name="fade"
    enter-active-class="entrada"
    leave-active-class="saida"
    appear
    mode="out-in"
  >
    <component :is="view" />
  </transition>

  <button @click="filterAZ">Filtro A-Z</button>
  <button @click="filterZA">Filtro Z-A</button>

  <transition-group
    name="fade"
    enter-active-class="entrada"
    leave-active-class="saida"
    appear
    mode="out-in"
  >
    <li v-for="user in users" :key="user">{{ user }}</li>
  </transition-group>

  <!-- <transition name="scale" :appear="false"> -->
  <!-- <h1 v-if="show">Hello World</h1> -->
  <!-- </transition> -->
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
      view: 'Home',
      users: ['Fernando', 'Nícolas', 'Diego'],
    }
  },
  methods: {
    filterAZ() {
      this.users.sort()
    },
    filterZA() {
      this.users.sort().reverse()
    },
  },
})
</script>

<style>
/* 
  Transition Classes
  ---------------------------------
  v-enter-from (de onde estar vindo)
  v-enter-active (como vai acontecer)
  v-enter-to (para onde está indo)

  v-leave-from (de onde estar vindo)
  v-leave-active (como vai acontecer)
  v-leave-to (para onde está indo)

  O nome inicial `v` depende do atributo `name`
*/

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.entrada,
.saida {
  transition: opacity 0.5s;
}

.v-move {
  transition: all 0.5s;
}
</style>
