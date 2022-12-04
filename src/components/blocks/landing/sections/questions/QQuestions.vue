<script>
import QQuestion from './QQuestion.vue';

export default{


    components:{ QQuestion }



}

</script>

<template>

    <div class="flex flex-col justify-center items-center gap-4 py-4">
        <h3 class="text-black text-3xl font-semibold ">Preguntas frecuentes</h3>
        <hr class="w-16 h-1 border-0 bg-black">
    </div>
   <q-question/>
   <q-question/>
   <q-question/>
   <q-question/>
   <q-question/>
   


</template>