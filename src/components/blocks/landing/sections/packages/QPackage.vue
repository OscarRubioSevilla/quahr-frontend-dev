<script>
import { ref, onMounted } from 'vue';

import { PERIODS } from '@/const/landing.js';


export default {

    props: {
        pack: {
            type: Object,
            required: true
        }
    },

    setup(props) {

        const selectedPeriod = ref(1)
        const currentPeriod = ref({})

        onMounted(() => {
            changePeriod();  
        });

        const changePeriod = () => {
            
            currentPeriod.value = PERIODS.find((period) => 
                period.period_number === selectedPeriod.value  && period.package_id === props.pack.id)
        }   


        return { selectedPeriod, PERIODS, changePeriod, currentPeriod }

    }


}



</script>

<template>
    <div class="flex paquetes-div  justify-center rounded-lg px-4">
        <div class="">
            <div class="border-b-2 py-2">
                <h1 class="text-3xl font-semibold text-center">{{ pack.title }}</h1>
            </div>
            <div class=" flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                <div v-for="feature of pack.features " class="">· {{ feature }}</div>
            </div>
            <div class="flex justify-center gap-10 my-8">
                <select @change="changePeriod" v-model="selectedPeriod" class="bg-[#EFEFEF] rounded-md select-width "
                    name="" id="">
                    <option :value="1">Anual</option>
                    <option :value="2">3 años</option>
                    <option :value="3">5 años</option>
                </select>
            </div>

            <div class="flex flex-col text-center">
                <span class="text-[#1D72B3] text-3xl font-extrabold">${{currentPeriod.payment}} MXN</span>
                <span class="mensuales font-semibold">mensuales</span>
            </div>
            <div class="flex flex-col text-center m-4">
                <span class="text-black text-xl font-extrabold">Ahorro de {{currentPeriod.savings}}.00%</span>
            </div>
            <div class="flex flex-col  text-center">
                <span class="font-semibold text-[#B9B9B9]">*Contratando anual</span>
                <span class="font-semibold text-[#B9B9B9] text-xs">(pago contado ${{currentPeriod.cash}}.00)</span>
            </div>
            <div class="flex justify-center m-5">
                <button class="btn-probar py-2 px-6 font-semibold rounded-lg">Probar gratis</button>
            </div>
        </div>
    </div>
</template>