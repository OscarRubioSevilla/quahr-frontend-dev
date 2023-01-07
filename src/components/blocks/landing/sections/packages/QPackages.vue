<script>
import QPackage from '@/components/blocks/landing/sections/packages/QPackage.vue';

import QTitle from '../../QTitle.vue';
    import { PACKAGES } from '@/const/landing.js';

export default{

    components:{QPackage, QTitle},

    setup(){
      return{PACKAGES}
    }

}
</script>
<template>

<section id="package">
    <q-title name="Paquetes" color="black" />
    <div class="flex flex-col text-center">

        <span class="text-[#616161]">Precios transparentes para clientes que valoramos</span>
        <span class="text-[#616161]">¡Elige el plan que se adapte mejor a tu negocio!</span>
    </div>
    <div class="flex flex-wrap xl:flex-nowrap justify-around gap-8 p-10">
        <q-package  v-for="pack of PACKAGES"  :pack="pack"  />   
     </div>
</section>

    
</template>
