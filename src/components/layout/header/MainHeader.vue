<script>

export default {
    props: {
        titulo: {
            required: false,
            type: String,
            default: 'Titulo por defecto'
        },
        botones: {
            required: true,
            type: Array
        },
    },
}

</script>

<template>
    <header class="flex justify-between bg-white px-32 py-1">
        <div class="text-primary text-xl">
            <a href="/">
                <img class="w-11" src="@/assets/logo/quahr-icon.png" alt="">
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="text-dolphin text-md" :class="[
                {'border border-dolphin rounded-md px-4': index === 0 }, 
                {'border-b-2 leading-none': index === 1}
            ]" v-for="btn, index of botones">{{ btn }}</button>
        </div>
    </header>
    <div class="bloque-quahr px-44">
        <nav class="flex justify-between py-3">
            <a class="flex-1 flex justify-center" href="/">
                <img class="w-36" src="@/assets/logo/quahr-logo-blanco.png" alt="">
            </a>
            <div class="flex gap-5 flex-4 justify-center">
                <a class="text-white text-md font-semibold" href="">Características</a>
                <a class="text-white text-md font-semibold" href="">Beneficios</a>
                <a class="text-white text-md font-semibold" href="">Paquetes</a>
                <a class="text-white text-md font-semibold" href="">Preguntas frecuentes</a>
            </div>
        </nav>
        <div class="flex">
            <div class="flex-3">
                <img src="@/assets/landing/mockup-3dispositivos.png" alt="" />
            </div>
            <div class="flex-2 flex flex-col justify-center items-start gap-4">
                <h2 class="text-white text-3xl font-semibold">Generando bienestar a odontólogos y pacientes de todo el mundo.</h2>
                <p class="text-white">Acelera tu crecimiento con tu preparación clínica y nuestra experiencia administrativa.</p>
                <a class="bg-white py-2 px-3 text-lg font-semibold rounded-md" href="#" >Probar gratis </a>
            </div>
        </div>
            <div>
                <h3 class="text-black text-3xl font-semibold flex justify-center " >¿ Qué es Quahr ?</h3>
                <hr class="w-16 h-1 border-0 bg-white">
            </div>
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
