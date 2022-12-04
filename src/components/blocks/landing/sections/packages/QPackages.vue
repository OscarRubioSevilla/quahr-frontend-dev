<script>
import QPackage from '@/components/blocks/landing/sections/packages/QPackage.vue';
import { PACKAGES } from '@/const/packages';

export default{





    components:{QPackage},

    setup(){



        return{PACKAGES}
    }

}
</script>
<template>
    <div class="flex flex-col justify-center items-center gap-4 py-4">
        <h3 class="text-black text-3xl font-semibold ">Paquetes</h3>
        <hr class="w-16 h-1 border-0 bg-black">
    </div>
    <div class="flex flex-col text-center">

        <span class="text-[#616161]">Precios transparentes para clientes que valoramos</span>
        <span class="text-[#616161]">¡Elige el plan que se adapte mejor a tu negocio!</span>
    </div>
    <div class="flex justify-around gap-12 p-10">
        <q-package  v-for="pack of PACKAGES"  :pack="pack"  />   
     </div>
</template>