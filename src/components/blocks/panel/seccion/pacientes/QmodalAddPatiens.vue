<script setup>
import QModal from '@/components/theme/molecules/QModal.vue';

import { defineEmits, ref, defineProps, watch } from 'vue';
const emit = defineEmits(["update:model-value"]);
const model = ref(false);
const name = ref('');
const apellido_materno = ref('');
const apellido_paterno = ref('');
const day  = ref('')
const month  = ref('')
const year  = ref('')



const props = defineProps({
    modelValue: {
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
    <q-modal v-model="model" modalSize="md" titleText="Nuevo Paciente">
        <template #body>
            <form class="">
                <div class="flex items-center p-1 ">
                    <div class=" w-[50%]">
                        <label class="text-sm">Nombre</label>{{ name }}
                    </div>
                    <div class="w-full">

                        <input v-model="name" class="text-sm w-full outline-none px-2 py-1 rounded-md bg-gray-100
                    border-2 border-transparent focus:bg-white  focus:border-solitude" type="text"
                            placeholder="Nombre">
                    </div>
                    
                </div>
                <div class="flex items-center p-1 flex-row">
                    <div class=" w-[50%]">
                        <label class="text-sm">Apellido Paterno</label>
                    </div>
                    <div class="w-full">
                        <input v-model="apellido_paterno" class="text-sm w-full outline-none px-2 py-1 rounded-md bg-gray-100
                        border-2 border-transparent focus:bg-white  focus:border-solitude" type="text"
                            placeholder="Apellido paterno">
                    </div>
                </div>
                <div class="flex items-center p-1 flex-row">
                    <div class="flex w-[50%]">
                        <label class="text-sm">Apellido Materno </label>
                    </div>
                    <div class="w-full" >
                        <input v-model="apellido_materno" class="text-sm w-full outline-none px-2 py-1 rounded-md bg-gray-100
                        border-2 border-transparent focus:bg-white  focus:border-solitude" type="text"
                            placeholder="Apellido Materno">
                    </div>
                </div>

                <div class="flex p-1 ">
                    <div class="pr-9 w-[33%]">
                        <label class="text-sm">Fecha de nacimiento</label>
                    </div>
                    <div class="flex items-center gap-10">
                        <select  v-model="day" class="text-sm  outline-none px-2  rounded-md bg-gray-100
                        border-2 border-transparent focus:bg-white  focus:border-solitude" >
                            <option :value="1" selected>1</option>
                            <option value="2">2</option>
                            {{ day }}
                        </select>
                        <select v-model="month" class="text-sm  outline-none px-2  rounded-md bg-gray-100
                        border-2 border-transparent focus:bg-white  focus:border-solitude">
                            <option value="Enero">Enero</option>
                            <option value="Febrero">Febrero</option>
                        </select>
                        <select v-model="year" class="text-sm  outline-none px-2  rounded-md bg-gray-100
                        border-2 border-transparent focus:bg-white  focus:border-solitude">
                            <option value="2000">2000</option>
                            <option value="1998">1998</option>
                        </select>
                    </div>
                </div>
            </form>

        </template>
    </q-modal>
</template>