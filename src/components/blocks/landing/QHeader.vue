<script setup>

import { ref } from 'vue';

import LoginModal from './sections/auth/LoginModal.vue';

const showLoginModal = ref(false);

</script>


<template>
    <header class="flex justify-between bg-white px-4 lg:px-32 py-1">
        <login-modal v-model="showLoginModal"   @close="showLoginModal = false" />
        <div class="text-primary text-xl">
            <a href="/">
                <img class="w-11" src="@/assets/logo/quahr-icon.png" alt="" width="100" height="100">
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="text-dolphin text-md border border-dolphin rounded-md px-4">
                Probar Gratis
            </button>
            <button @click="showLoginModal = true" class="text-dolphin text-md border-b-2 leading-none">
                Iniciar sesión
            </button>
        </div>
    </header>
</template>