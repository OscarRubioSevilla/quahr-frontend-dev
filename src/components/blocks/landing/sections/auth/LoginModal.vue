<script setup>
import QModal from '@/components/theme/molecules/QModal.vue';

import { defineEmits, ref, defineProps,watch } from 'vue';
const emit = defineEmits(["update:model-value"]);
const model = ref(true);


const props = defineProps({
    modelValue:{
        type: Boolean,
        required: true
    }
})

watch(() => props.modelValue, (value) => {
  model.value = value;
});

const login = ({usuario,password}) => {   
    console.log('Iniciar sesión..',usuario.value, password.value);
 }

watch(model, (value) => emit('update:model-value', value));

</script>
<template>
    <q-modal v-model="model" @confirm="login"   modalSize="md" titleText="Iniciar sesión">
        <template #body>

            
        </template>
    </q-modal>
</template>