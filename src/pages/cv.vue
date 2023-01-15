<template>

    <div class="flex  flex-col w-2/4 lg:3/4 ">
        <button class="bg-cyan-200 h-10 w-10 p-5" @click="a">Open modal</button>

        <div class=" bg-teal-100 justify-center  h-20 items-center flex  flex-row  ">
            <label for="">OLIVER RUBIO SEVILLA</label>
            <span>DESARROLLADOR WEB</span>
        </div>
        <div class="flex ">
            <div class="bg-white-smoke flex flex-col p-5 gap-4">
                <div>
                    <div class=" flex p-4  items-center">
                        <img class="w-25 h-32 rounded-md shadow-md shadow-black" src="@/assets/panel/CV/foto-cv.jpeg"
                            alt="">
                    </div>
                    <div>
                        <div class="p-2">
                            <label class="font-semibold text-xl" for="">CONTACTO</label>

                        </div>
                        <div class="flex items-center pl-2 gap-1">
                            <img class="w-4 h-4" src="@/assets/panel/CV/Cv_ub.png" alt="">
                            <span>Guadalajara Jalisco Mex.</span>
                        </div>
                        <div class="flex items-center pl-2 gap-1">
                            <img class="w-4 h-4" src="@/assets/panel/CV/call.png" alt="">
                            <span>3312493064</span>
                        </div>
                        <div class="flex items-center pl-2 gap-1">
                            <img class="w-4 h-4" src="@/assets/panel/CV/at.png" alt="">
                            <span>oliver.rubio.17s@utzmg.edu.mx</span>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="p-2">
                        <label class="font-semibold text-xl" for="">APTITUDES</label>
                    </div>
                    <div class="flex flex-col pl-3">
                        <span>Profesionalidad y responsabilidad.</span>
                        <span>Creatividad.</span>
                        <span>Capacidad de analisis.</span>
                        <span>Autoexigencia peronsal.</span>
                        <span>Orientación a la calidad y detalle</span>

                    </div>
                </div>
            </div>
            <div class="bg-slate-50">
                <div class="p-4">
                    <label class=" text-xl font-semibold" for="'">RESUMEN PROFESIONAL</label>
                    <div>
                        <span class="">Estudiante de Liecenciatura en TICS's con gran interes en acceder al merado
                            laboral para apliar de una manera práctica mis conocimientos. EN busca de una oportunidad
                            para adquirir experienia profesional en el campo de Desarrollador Web</span>
                    </div>
                </div>
                <div class="p-4">
                    <label class=" text-xl font-semibold" for="'">Historial Laboral</label>
                    <div>
                        <span class="">Maquetación, desarrollo y programación de página web en HTML5, CCS3,
                            TypeScript-Angular, para el Fronted.
                            Creación de base de datos relacional creada en PostgreSQL.
                            Creación de API en Laravel para el consumo de datos en e ANGULAR, además se implementó la
                            migración de la base de Datos.
                            Utilización de ELOQUEN ORM para la consulta de datos en Laravel.</span>
                    </div>
                </div>
                <div class="p-4">
                    <label class=" text-xl font-semibold" for="'">Formacion</label>
                    <div>
                        <span class="">Educación superior - Licenciatura

                            Universidad Teconológica de Jalisco

                            Septiembre 2019 - Abril 2021</span>
                    </div>
                </div>
            </div>
        </div>


    </div>
<div class="flex justify-center items-center">
    <vue-final-modal v-model="showModal" :name="null" class=" flex h-[50%] w-[50%] ">
        <div>
            <div> <label for="">ALgo</label></div>
            <div>Mostrar</div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam inventore debitis eius voluptate
                mollitia accusamus? Nihil consequatur vitae, dolores, saepe nostrum molestias ipsa ex maiores iste
                maxime, a cupiditate alias.</span>
            <div></div>
        </div>
    </vue-final-modal>
</div>
    




</template> 

<script setup>
import { ref } from 'vue';

const showModal = ref(false);

const a = () => {
    showModal.value = !showModal.value

    console.log('muestra')
}


</script>