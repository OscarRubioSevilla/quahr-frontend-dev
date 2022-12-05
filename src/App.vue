<script >


import QLanding from './pages/QLanding.vue';

export default {
  components: { QLanding },
  setup() {


    const botones = ['Probar gratis','Iniciar sesión'];

    return {  botones }
  }
}
</script>
<template>
  <q-landing :botones="botones"></q-landing>
</template>