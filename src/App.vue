<script >

import MainHeader from './components/layout/header/MainHeader.vue';

export default {
  components: { MainHeader },
  setup() {

    const titulo = 'QUAHR V2';
    const botones = ['Probar gratis','Iniciar sesión'];

    return { titulo, botones }
  }
}
</script>
<template>
  <main-header :titulo="titulo" :botones="botones"></main-header>
</template>