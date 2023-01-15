<script setup>
import { useBtnCollapse } from '@/stores/header/btn_Collapse';
import {defineProps,computed} from 'vue';
import { getImageUrl } from '@/utils/images';

const props = defineProps({
    menu_panel:{
        type:Object,
        required:true
    }
});

const btnCollapse = useBtnCollapse();

const showMenu = computed(() => btnCollapse.showMenu);
const mostrar = computed(() => btnCollapse.mostrar);

</script>

<template>

     <router-link :to="{name:menu_panel.routeName}">
        <div :class="showMenu ? 'lg:px-10' : 'lg:px-6'" class="text-white px-10 flex flex-col items-center py-2 cursor-pointer  hover:bg-primary-500"> 
        <img @click="mostrar" :src="getImageUrl(`panel/menu_panel/${menu_panel.image}`)"  class="w-19 lg:w-9"  alt="">
        <div>
            <label v-if="showMenu"
            class="hidden lg:flex text-xs" for="">{{menu_panel.name}}</label> 
            <div class="border-b-2 border-secondary mt-0.5 w-full"></div>
        </div>
    </div>
     </router-link>
</template>