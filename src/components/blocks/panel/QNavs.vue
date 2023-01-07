<script setup>

import { PANEl_MENU } from '@/const/panel';
import QNav from './QNav.vue';


</script>

<template>  
    <nav class="flex bg-primary flex-row lg:flex-col justify-center lg:justify-start lg:h-menu pt-4 " >
        <q-nav v-for="menu_panel of PANEl_MENU" :menu_panel="menu_panel"/>

    </nav>
</template>