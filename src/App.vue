<script >

import { ref } from 'vue';

import QModalVue from './components/theme/molecules/QModal.vue';

export default {
  components: { QModalVue },
  setup () {
    const contador = ref(0);
    const showModal = ref(false);

    const sumar = () => contador.value++;
    const restar = () => contador.value--;

    return {
      sumar,
      showModal,
      restar,
      contador
    }
  }
}


</script>
<template>
  <main data-theme="default">
    <button @click="restar" class="bg-primary px-8 py-1 text-white">Restar</button>
    <button @click="sumar" class="bg-secondary px-8 py-1 text-white">Sumar</button>
    Contador: {{ contador }}


    <div>
      <q-modal-vue />
    </div>


  </main>
</template>