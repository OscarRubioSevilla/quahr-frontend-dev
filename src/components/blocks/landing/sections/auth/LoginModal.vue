<script setup>
import QModal from '@/components/theme/molecules/QModal.vue';
import QLabel from '@/components/theme/molecules/atoms/QLabel.vue'

import { defineEmits, ref, defineProps,watch, computed } from 'vue';
import { useAuth } from '@/stores/auth/useAuth';

import { useRouter } from 'vue-router';

const router = useRouter();

const emit = defineEmits(["update:model-value"]);

const props = defineProps({
    modelValue:{
        type: Boolean,
        required: true
    }
})
const model = ref(true);
const usuario = ref('');
const password = ref('');
const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const messageError = ref('')

const authStore = useAuth();

watch(() => props.modelValue, (value) => {
  model.value = value;
});


const isLoggedIn = computed(() => authStore.isLoggedIn);

const login = async () => {   

    if(!usuario.value){
        messageError.value = 'Email es requerido';
        return;
    }

    if(!password.value){
        messageError.value = 'Contraseña es requerida';
        return;
    }

    if(!expr.test(usuario.value) ){
        messageError.value = 'El email debe ser válido';
        return;
    }

    const authUser = {
        user: usuario.value,
        password: password.value
    };
    
    const isAuth = await authStore.login(authUser);

    console.log('Iniciar sesión..', isAuth);

    if (!isAuth) {
        messageError.value = 'Usuario o constraseña incorrectos';
        return;
    }


    router.replace({
        name: 'panel'
    })
  
    // model.value = false;
 }

watch(model, (value) => emit('update:model-value', value));

</script>
<template>
    <q-modal v-model="model" :footer="false" modalSize="md" titleText="Iniciar sesión">
        <template #body>
            <form class="px-7" @submit.prevent="login">
                <div class="mb-4">
                    <input v-model="usuario" class="text-sm w-full outline-none px-2 py-1 rounded-md bg-gray-100
                border-2 border-transparent focus:bg-white  focus:border-solitude" type="text" 
                    placeholder="Correo electrónico">
                </div>
                <div>
                    <input v-model="password" class="text-sm w-full outline-none px-2 py-1 rounded-md bg-gray-100
                border-2 border-transparent focus:bg-white  focus:border-solitude" type="password"
                    placeholder="Contraseña"
                    name="password" autocomplete="on">
                </div>
                <q-Label :label="messageError" size="xs" error/>
                <div class="pt-4">
                    <div class="flex justify-end">
                          <button type="submit" class="btn-border font-medium">Iniciar Sesión</button>
                        </div>
                </div>
            </form>
        </template>
    </q-modal>
</template>
<style scoped>
.btn-border {
    border-bottom: solid 1px var(--black);
    color: var(--primary);
  }
</style>