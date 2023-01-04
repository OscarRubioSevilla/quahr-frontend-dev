<script setup>
import { FEATURES_MENU } from '@/const/landing';
import QNav from './QNav.vue';

</script>

<template>  
    <nav class="flex bg-primary flex-row lg:flex-col justify-center lg:justify-start lg:h-menu pt-4" >
        <q-nav v-for="menu_panel of FEATURES_MENU" :menu_panel="menu_panel"/>

    </nav>
</template>