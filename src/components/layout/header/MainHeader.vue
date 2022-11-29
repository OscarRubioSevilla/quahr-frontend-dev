<script>

import { ref } from 'vue';
import { getImageUrl } from '@/utils/images';
import QFeature from '@/components/blocks/landing/QFeature.vue';
import { FEATURES_MENU } from '@/const/landing_menu.js'
export default {
    // Propiedades que le puedes pasar a MainHeader main-header
    // Las propiedades se usan en MainHeader
    props: {
        titulo: {
            required: false,
            type: String,
            default: 'Titulo por defecto'
        },
        botones: {
            required: true,
            type: Array
        }
    },
    components: { QFeature },
    setup() {
        const currentFeature = ref(FEATURES_MENU[0]);

        const selectedFeature = (feature) => {
            currentFeature.value = feature;
        }        
 
        return { currentFeature, getImageUrl, FEATURES_MENU, selectedFeature }
    }
}

</script>

<template>
    <header class="flex justify-between bg-white px-4 lg:px-32 py-1">
        <div class="text-primary text-xl">
            <a href="/">
                <img class="w-11" src="@/assets/logo/quahr-icon.png" alt="" width="100" height="100">
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="text-dolphin text-md" :class="[
                { 'border border-dolphin rounded-md px-4': index === 0 },
                { 'border-b-2 leading-none': index === 1 }
            ]" v-for="btn, index of botones">{{ btn }}</button>
        </div>
    </header>
    <div class="bloque-quahr px-4 md:px-24 lg:px-44">
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
                <h2 class="text-white text-3xl font-semibold ">Generando bienestar a odontólogos y pacientes de todo el
                    mundo.</h2>
                <p class="text-white">Acelera tu crecimiento con tu preparación clínica y nuestra experiencia
                    administrativa.</p>
                <a class="bg-white py-2 px-3 text-lg font-semibold rounded-md" href="#">Probar Gratis </a>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center gap-4">
            <h3 class="text-white text-3xl font-semibold ">¿ Qué es Quahr ?</h3>
            <hr class="w-16 h-1 border-0 bg-white">
        </div>
        <div class="py-4">
            <span class="text-center text-white">
                <span class="font-semibold">Quahr Dental</span>
                es un sistema de administración y control clÍnico para odontólogos y clÍnicas odontológicas, para tener
                tu agenda a la mano cuando y donde la necesites.
            </span>
        </div>
        <div class="">
            <video controls src="@/assets/video/video-promocional.mp4"></video>
        </div>
        <div class="flex flex-col justify-center items-center gap-4 py-4">
            <h3 class="text-white text-3xl font-semibold ">Características</h3>
            <hr class="w-16 h-1 border-0 bg-white">
        </div>
        <div class="flex  justify-center text-center  gap-10 ">
            <q-feature v-for="feature of FEATURES_MENU" 
                :feature="feature" 
                :current_feature="currentFeature" 
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
        <div class="flex flex-col justify-center items-center gap-4 py-4">
            <h3 class="text-black text-3xl font-semibold ">Beneficios</h3>
            <hr class="w-16 h-1 border-0 bg-black">
        </div>
        <div class="flex flex-col">
            <div class="flex gap-5 flex-4 justify-center">
                <a class="text-black text-md font-mediumold" href="">Odontograma</a>
                <a class="text-black text-md font-semfont-medium" href="">Especialidades</a>
                <a class="text-black text-md font-semfont-medium" href="">Historial Clínico</a>
                <a class="text-black text-md font-semfont-medium" href="">Diagnósticos</a>
                <a class="text-black text-md font-semfont-medium" href="">Notificaciones</a>
            </div>

            <div class="flex justify-center">
                <img src="@/assets/landing/img/img.jpeg" width="350" height="350" alt="">
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-4 py-4">
            <h3 class="text-black text-3xl font-semibold ">Paquetes</h3>
            <hr class="w-16 h-1 border-0 bg-black">
        </div>
        <div class="flex flex-col text-center">

            <span class="text-[#616161]">Precios transparentes para clientes que valoramos</span>
            <span class="text-[#616161]">¡Elige el plan que se adapte mejor a tu negocio!</span>
        </div>
        <div class="flex justify-around gap-12 p-10">
            <div class="flex paquetes-div  justify-center rounded-lg px-4">
                <div class="">
                    <div class="border-b-2 py-2">
                        <h1 class="text-3xl font-semibold text-center">Profesional</h1>
                    </div>
                    <div class=" flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                        <div class="">* Hasta 100 pacientes</div>
                        <div class="">Incluye 7 imprimibles para tu control</div>
                        <div class="">Historia clinica de tus pacientes</div>
                        <div class="">Recordatorios a pacientes</div>
                    </div>
                    <div class="flex justify-center gap-10 my-8">
                        <select class="bg-[#EFEFEF] rounded-md select-width " name="" id="">
                            <option value="">Anual</option>
                            <option value="">3 años</option>
                            <option value="">5 años</option>
                        </select>
                    </div>
                    <div class="flex flex-col text-center">
                        <span class="text-[#1D72B3] text-3xl font-extrabold">$249 MXN</span>
                        <span class="mensuales font-semibold">mensuales</span>
                    </div>
                    <div class="flex flex-col text-center m-4">
                        <span class="text-black text-xl font-extrabold">Ahorro de 29.00%</span>
                    </div>
                    <div class="flex flex-col  text-center">
                        <span class="font-semibold text-[#B9B9B9]">*Contratando anual</span>
                        <span class="font-semibold text-[#B9B9B9] text-xs">(pago contado $2,988.00)</span>
                    </div>
                    <div class="flex justify-center m-5">
                        <button class="btn-probar py-2 px-6 font-semibold rounded-lg">Probar gratis</button>
                    </div>
                </div>


            </div>
            <div class="flex  flex-col paquetes-div  rounded-lg text-center">
                <div class="border-b-2 py-2">
                    <h1 class="text-3xl font-semibold">Avanzado</h1>
                </div>
                <div class="flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                    <div>Hasta 300 pacientes</div>
                    <div>Incluye ortodoncia</div>
                    <div>Incluye Imprimibles para hoja membretada</div>
                    <div>Hasta 300MB de almacenamiento</div>
                </div>
                <div class="flex justify-center gap-10 m-5">
                    <select class="bg-[#EFEFEF] rounded-md select-width " name="" id="">
                        <option value="">Anual</option>
                        <option value="">3 años</option>
                        <option value="">5 años</option>
                    </select>
                </div>
                <div class="flex flex-col text-center">
                    <span class="text-[#1D72B3] text-3xl font-extrabold">$249 MXN</span>
                    <span class="mensuales font-semibold">mensuales</span>
                </div>
                <div class="flex flex-col text-center m-4">
                    <span class="text-black text-xl font-extrabold">Ahorro de 29.00%</span>
                </div>
                <div class="flex flex-col  text-center">
                    <span class="font-semibold text-silver">*Contratando anual</span>
                    <span class="font-semibold text-silver text-xs">(pago contado $2,988.00)</span>
                </div>
                <div class="flex justify-center m-5">
                    <button class="btn-probar py-2 px-6 font-semibold rounded-lg">Probar gratis</button>
                </div>

            </div>

            <div class="flex  flex-col paquetes-div  rounded-lg text-center px-4">
                <div class="border-b-2 py-2">
                    <h1 class="text-3xl font-semibold">Especialista
                    </h1>
                </div>
                <div class="flex flex-col gap-5 text-base my-4 text-center text-[#161442]">
                    <div>Sin límite de pacientes</div>
                    <div>Incluye ortodoncia y peridontograma</div>
                    <div>Incluye Imprimibles para hoja membretada</div>
                    <div>Hasta 700MB de almacenamiento</div>
                </div>

                <div class="flex justify-center gap-10 m-5">
                    <select class="bg-[#EFEFEF] rounded-md select-width " name="" id="">
                        <option value="">Anual</option>
                        <option value="">3 años</option>
                        <option value="">5 años</option>
                    </select>
                </div>

                <div class="flex flex-col text-center">
                    <span class="text-[#1D72B3] text-3xl font-extrabold">$249 MXN</span>
                    <span class="mensuales font-semibold">mensuales</span>
                </div>
                <div class="flex flex-col text-center m-4">
                    <span class="text-black text-xl font-extrabold">Ahorro de 29.00%</span>
                </div>
                <div class="flex flex-col  text-center">
                    <span class="font-semibold text-[#B9B9B9]">*Contratando anual</span>
                    <span class="font-semibold text-[#B9B9B9] text-xs">(pago contado $2,988.00)</span>
                </div>
                <div class="flex justify-center m-5">
                    <button class="btn-probar py-2 px-6 font-semibold rounded-lg">Probar gratis</button>
                </div>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center gap-4 py-4">
            <h3 class="text-black text-3xl font-semibold ">Preguntas frecuentes</h3>
            <hr class="w-16 h-1 border-0 bg-black">
        </div>
        <div class="flex flex-col gap-8 text-[#182051] font-semibold text-xl ">
            <div class="bg-white rounded-full p-2 py-4">
                <span>¿Qué es Quahr dental?</span>
            </div>
            <div class="bg-white">
                <span>¿Dónde se guarda mi información?</span>
            </div>
            <div>Quahr Dental es un sistema de administración y control clÍnico para odontólogos y clÍnicas
                odontológicas, para tener tu agenda a la mano cuando y donde la necesites.</div>
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
