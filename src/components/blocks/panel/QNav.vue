<script setup>

import {defineProps} from 'vue';
import { getImageUrl } from '@/utils/images';

const props = defineProps({
    menu_panel:{
        type:Object,
        required:true
    }
})


</script>

<template>


    <div class=" text-white flex flex-col items-center p-2  "> 
        <img :src="getImageUrl(`landing/img/${menu_panel.image}`)"  class=" w-12 hover:bg-slate-600  px-2"  alt="">
        <label class="hidden lg:flex" for="">{{menu_panel.name}}  </label> 
         
    </div>



</template>