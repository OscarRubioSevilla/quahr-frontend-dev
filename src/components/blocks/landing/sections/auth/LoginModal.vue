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

watch(model, (value) => emit('update:model-value', value));

</script>
<template>
    <q-modal v-model="model">
        <template #body>

        </template>
    </q-modal>
</template>