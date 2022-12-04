<script>

import { ref } from 'vue';
import { getImageUrl } from '@/utils/images';
import QFeature from '@/components/blocks/landing/QFeature.vue';
import QWhatsQuar from '@/components/blocks/landing/QWhatsQuar.vue';
import QBenefits from '@/components/blocks/landing/QBenefits.vue'
import QPackages from '@/components/blocks/landing/sections/packages/QPackages.vue'
import QPresntation from '@/components/blocks/landing/QPresentation.vue'
import QNav from '@/components/blocks/landing/QNav.vue'
import QQuestions from '@/components/blocks/landing/sections/questions/QQuestions.vue'

import { FEATURES_MENU } from '@/const/landing_menu.js'
export default {
    // Propiedades que le puedes pasar a MainHeader main-header
    // Las propiedades se usan en MainHeader
    props: {
        titulo: {
            required: false,
            type: String,
            default: 'Titulo por defecto'
        },
        botones: {
            required: true,
            type: Array
        }
    },
    components: { QFeature, QWhatsQuar, QBenefits, QPackages, QPresntation, QNav, QQuestions },
    setup() {
        const currentFeature = ref(FEATURES_MENU[0]);

        const selectedFeature = (feature) => {
            currentFeature.value = feature;
        }

        const acordion = (e) => {
            console.log("Se clickeo", e.target)
        }

        return { currentFeature, getImageUrl, FEATURES_MENU, selectedFeature, acordion }
    }
}

</script>

<template>
    <header class="flex justify-between bg-white px-4 lg:px-32 py-1">
        <div class="text-primary text-xl">
            <a href="/">
                <img class="w-11" src="@/assets/logo/quahr-icon.png" alt="" width="100" height="100">
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="text-dolphin text-md" :class="[
                { 'border border-dolphin rounded-md px-4': index === 0 },
                { 'border-b-2 leading-none': index === 1 }
            ]" v-for="btn, index of botones">{{ btn }}</button>
        </div>
    </header>
    <div class="bloque-quahr px-4 md:px-24 lg:px-44">
        <q-nav />

        <q-presntation />

        <QWhatsQuar />

        <div class="flex flex-col justify-center items-center gap-4 py-4">
            <h3 class="text-white text-3xl font-semibold ">Características</h3>
            <hr class="w-16 h-1 border-0 bg-white">
        </div>
        <div class="flex  justify-center text-center  gap-10 ">
            <q-feature v-for="feature of FEATURES_MENU" :feature="feature" :current_feature="currentFeature"
                @selectedFeature="selectedFeature" />
        </div>

        <div class="bg-white flex justify-center p-8 rounded-b-xl drop-shadow-lg font-semibold ">
            <label id="tex-car" for="">{{ currentFeature.description }}</label>
        </div>
        <div class="flex">
            <div>
                <img :src="getImageUrl(`landing/caracteristicas/${currentFeature.description_image}`)" alt="">
            </div>
        </div>
        <QBenefits />

        <q-packages/>

        <q-questions/>

        
        








        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
