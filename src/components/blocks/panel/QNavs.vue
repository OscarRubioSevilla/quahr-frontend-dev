<script setup>
import { FEATURES_MENU } from '@/const/landing';
import QNav from './QNav.vue';

</script>

<template>  
    <div class="flex bg-primary ">
        <q-nav v-for="menu_panel of FEATURES_MENU" :menu_panel="menu_panel"/>

    </div>
</template>