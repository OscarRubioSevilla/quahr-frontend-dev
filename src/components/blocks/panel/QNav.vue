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

const w = computed(() => btnCollapse.w);
const mostrar = computed(() => btnCollapse.mostrar);


</script>

<template>

     <div :class="` text-white flex flex-col items-center py-2 px-${w} cursor-pointer  hover:bg-primary-500`"> 
        <img @click="mostrar" :src="getImageUrl(`panel/menu_panel/${menu_panel.image}`)"  class="w-19 lg:w-9"  alt="">
        <div>
            <label  v-if="w==='10'"
            class="hidden lg:flex text-xs" for="">{{menu_panel.name}}</label> 
            <div class="border-b-2 border-secondary mt-0.5 w-full"></div>
        </div>
    </div>
</template>