<script setup>

import {defineProps} from 'vue';
import { getImageUrl } from '@/utils/images';

const props = defineProps({
    menu_panel:{
        type:Object,
        required:true
    }
});
</script>

<template>
    <div class=" text-white flex flex-col items-center py-2 px-8 cursor-pointer  hover:bg-primary-500 "> 
        <img :src="getImageUrl(`landing/img/${menu_panel.image}`)"  class="w-9"  alt="">
        <div>
            <label class="hidden lg:flex text-xs" for="">{{menu_panel.name}}</label> 
            <div class="border-b-2 border-secondary mt-0.5 w-full"></div>
        </div>
    </div>
</template>