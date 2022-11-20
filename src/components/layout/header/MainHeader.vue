<script>

import { ref } from 'vue';

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
    setup() {

        const nombre = ref('');
        const apellido_p = ref('');
        const apellido_m = ref('');
        const telefono_celular = ref('')

        const send = async (e) => {

            const data = {
                nombre: nombre.value,
                telefono_celular: telefono_celular.value,
                apellido_paterno: apellido_p.value,
                apellido_materno: apellido_m.value
            }


            const peticion = await fetch('http://localhost:3000/api/clinica' ,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const res = await peticion.json();

            console.log('FORMULARIO ENVIADO', res)
        }

        return { send, nombre, apellido_p, apellido_m, telefono_celular }
    }
}

</script>

<template>
    <header class="flex justify-between bg-secondary px-12 py-4">
        <div class="text-white text-xl">{{ titulo }}</div>
        <div>
            <input v-model="nombre" class="px-4 py-2 rounded-md" type="text" placeholder="NOMBRE">
            <br>
            <br>
            <input v-model="apellido_p" class="px-4 py-2 rounded-md" type="text" placeholder="APELLIDO P">
            <br>
            <br>
            <input v-model="apellido_m" class="px-4 py-2 rounded-md" type="text" placeholder="APELLIDO M" />
            <br>
            <br>
            <input v-model="telefono_celular" class="px-4 py-2 rounded-md" type="text" placeholder="Telefono celular" />
            <br>

            <button @click="send">ENVIAR</button>
        </div>
        <div class="flex gap-2">
            <button class="text-white text-lg" v-for="btn of botones">{{ btn }}</button>
        </div>
    </header>
    <div class="bloque-quahr">
        <nav class="container px-44 lg:flex lg:justify-between lg:gap-2 py-4 items-center">
            <a href="/">
                <img class="w-36" src="@/assets/logo/quahr-logo-blanco.png" alt="">
            </a>
            <div class="lg:flex lg:justify-between lg:gap-2 items-center">
                <a class="text-white text-md font-semibold" href="">Características</a>
                <a class="text-white text-md font-semibold" href="">Beneficios</a>
                <a class="text-white text-md font-semibold" href="">Paquetes</a>
                <a class="text-white text-md font-semibold" href="">Preguntas frecuentes</a>
            </div>
        </nav>
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
