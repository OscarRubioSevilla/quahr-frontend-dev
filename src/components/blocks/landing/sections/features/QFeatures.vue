<script>
import {ref} from 'vue';

import QFeature from './QFeature.vue';
import QTitle from '@/components/blocks/landing/QTitle.vue';





import { FEATURES_MENU } from '@/const/landing';
import { getImageUrl } from '@/utils/images';



export default{

    components:{QFeature,QTitle},



    setup(){

        const currentFeature = ref(FEATURES_MENU[0]);

        const selectedFeature = (feature) => {
            currentFeature.value = feature;
        }


        return{FEATURES_MENU, currentFeature, getImageUrl, selectedFeature}



    }


}

</script>


<template>

    <section id="feature">

       <q-title name="Características" color="white" />
        
        <div class="flex flex-wrap  gap-2  md:flex-nowrap  justify-center text-center  lg:gap-10 ">
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

    </section>

    

</template>
