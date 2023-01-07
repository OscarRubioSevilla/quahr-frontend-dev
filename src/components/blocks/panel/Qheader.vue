<script setup>
import { useBtnCollapse } from '@/stores/header/btn_Collapse';
import {computed} from 'vue'


const btnCollapse = useBtnCollapse();
const collapseMenu = computed(() => btnCollapse.collapseMenu);


</script>
<template>
    <header class="flex h-[98px] justify-between items-center shadow px-7 py-3 ">
       
        <div class="flex gap-4 items-center">
            <button @click="collapseMenu" :class="`w-9 h-9 ml-4 rounded-full p-1 bg-white-smoke hover:bg-slate-200`"> 
                <img src="@/assets/panel/menu-icon.png" alt="">
            </button>
            <img class="w-36" src="@/assets/logo/quahr-logo.png" alt="">
        </div>
        <div class=" hidden w-90 lg:flex rounded-md px-10">
            <input class="outline-none rounded-md img-icon-background
                 bg-no-repeat bg-auto h-6 lg:w-96 p-4 pl-8 shadow-md
                 bg-white-smoke focus:bg-white shadow-slate-200" placeholder="Buscar">

        </div>
        <div class=" px-4 flex gap-2 items-center text-xs font-semibold pl-10">
            <span class="hidden lg:block">01 / Ene / 2023</span>
            <img class="hidden lg:inline" src="@/assets/panel/v-line-blue.png" alt="">
            <div class="relative flex justify-center items-center flex-col gap-1">
                <span class="hidden lg:block">8:55 pm</span>
                <button class="flex justify-center items-center text-white 
                    bg-white-smoke rounded-full w-5 h-5">
                    0</button>
                <img class="w-4 pl-1 absolute bottom-2 left-0" src="@/assets/panel/campana.png" alt="">

            </div>
            <img src="@/assets/panel/v-line-blue.png" alt="">
            <div class="flex  items-center">
                <img class="w-10 rounded-full pr-1" src="@/assets/panel/usuario_default.png" alt="">
                <span>OTRO</span>
                <button class="flex justify-center items-center text-white  bg-white-smoke rounded-full px-1 w-5 h-5 relative top-4 right-14"
                    href="#">0</button>


                <img src="@/assets/panel/v-line-blue.png" alt="">
            </div>
            <div>
                <button class="hover:underline">Cerrar sesión</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
.img-icon-background {
    background-image: url('/src/assets/panel/icon_search.png');
    background-size: 1.4rem;
    background-position: 5px;
}
</style>