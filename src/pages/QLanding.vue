<script>

import QWhatsQuahr from '@/components/blocks/landing/sections/whatsQuahr/QWhatsQuahr.vue';
import QBenefits from '@/components/blocks/landing/sections/QBenefits.vue'
import QPackages from '@/components/blocks/landing/sections/packages/QPackages.vue'
import QPresentation from '@/components/blocks/landing/QPresentation.vue'
import QNav from '@/components/blocks/landing/QNav.vue'
import QQuestions from '@/components/blocks/landing/sections/questions/QQuestions.vue'
import QFooter from '@/components/blocks/landing/footer.vue';
import QHeader from '@/components/blocks/landing/QHeader.vue';
import QFeatures from '@/components/blocks/landing/sections/features/QFeatures.vue';



export default {
    // Propiedades que le puedes pasar a MainHeader main-header
    // Las propiedades se usan en MainHeader
    props: {
        botones: {
            required: true,
            type: Array,

        }
    },
    components: {

        QWhatsQuahr,
        QBenefits,
        QPackages,
        QPresentation,
        QNav, QQuestions,
        QFooter,
        QHeader,
        QFeatures
    }
}

</script>

<template>
    <q-header :botones="botones" />


    <div class="bloque-quahr px-4 md:px-24 lg:px-44">
        <q-nav />

        <main>
            <q-presentation />

            <q-whats-quahr />
    
            <q-features />
    
            <q-benefits />
    
            <q-packages />
    
            <q-questions />

        </main>
        

    </div>

    <q-footer />
</template>
