
<script setup>
import QHeader from '@/components/blocks/panel/Qheader.vue';
import QNavs from '@/components/blocks/panel/QNavs.vue';
import QPacientes from '@/components/blocks/panel/seccion/pacientes/pacientes.vue';

  

</script>
<template>
    


    <q-header/>
    <div class="flex flex-col lg:flex-row">
        <q-navs/>
        <main>
            <q-pacientes/>
           <h2>Main</h2>
        </main>
    </div>
</template>