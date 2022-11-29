<script>
import { getImageUrl } from '@/utils/images';
import { ref } from 'vue';
export default {
    // Evento personalizado
    // Envía información al padre por medio una función
    // El padre escucha el evento por medio de @nombreFuncion o nombre del emit
    emits: ['selectedFeature'],
    // La información se pasa del padre al hijo <q-feature prop="variable texto" />
    // Propiedades que le puedes pasar a QFeature q-feature
    // Las propiedades se usan en QFeature
    // Atributos personalizados
    props: {
        feature: {
            type: Object,
            required: true
        },
        current_feature: {
            type: Object,
            required: true
        }
    },

    setup(props, { emit }) {
        const currentFeature = ref( props.feature);
        const selectedFeature = () => {
            currentFeature.value = props.feature;
            emit('selectedFeature', props.feature)
        }

        return { getImageUrl, selectedFeature, currentFeature }
    }
}

</script>

<template>
    <div @click="selectedFeature">
        <img :src="getImageUrl(`landing/img/${currentFeature.image}`)" alt=""
            :class="current_feature.id === feature.id ? 'bg-primary' : 'bg-white' "
            class=" rounded-full cursor-pointer transition-all hover:bg-primary p-3 responsive">
        <label class=" inline-block my-3 text-sm text-white">{{currentFeature.name}}</label>
        <div class="indicator" :class="{'indicator__bar': current_feature.id === feature.id}"></div>
    </div>
</template>

<style scoped>
    .indicator {
        height: 2px;
        background-color: transparent;
    }
    .indicator__bar {
        background: rgba(23,30,79,1);
        background: -moz-linear-gradient(left, rgba(23,30,79,1) 0%, rgba(26,80,137,1) 20%, rgba(17,163,208,1) 64%, rgba(17,163,208,1) 64%, rgba(98,242,255,1) 97%, rgba(98,242,255,1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(23,30,79,1)), color-stop(20%, rgba(26,80,137,1)), color-stop(64%, rgba(17,163,208,1)), color-stop(64%, rgba(17,163,208,1)), color-stop(97%, rgba(98,242,255,1)), color-stop(100%, rgba(98,242,255,1)));
        background: -webkit-linear-gradient(left, rgba(23,30,79,1) 0%, rgba(26,80,137,1) 20%, rgba(17,163,208,1) 64%, rgba(17,163,208,1) 64%, rgba(98,242,255,1) 97%, rgba(98,242,255,1) 100%);
        background: -o-linear-gradient(left, rgba(23,30,79,1) 0%, rgba(26,80,137,1) 20%, rgba(17,163,208,1) 64%, rgba(17,163,208,1) 64%, rgba(98,242,255,1) 97%, rgba(98,242,255,1) 100%);
        background: -ms-linear-gradient(left, rgba(23,30,79,1) 0%, rgba(26,80,137,1) 20%, rgba(17,163,208,1) 64%, rgba(17,163,208,1) 64%, rgba(98,242,255,1) 97%, rgba(98,242,255,1) 100%);
        background: linear-gradient(to right, rgba(23,30,79,1) 0%, rgba(26,80,137,1) 20%, rgba(17,163,208,1) 64%, rgba(17,163,208,1) 64%, rgba(98,242,255,1) 97%, rgba(98,242,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#171e4f', endColorstr='#62f2ff', GradientType=1 );
        will-change: left, right;
    }
 
</style>