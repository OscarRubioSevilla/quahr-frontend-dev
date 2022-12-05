<script>
import QTitle from '@/components/blocks/landing/QTitle.vue';

export default{
    components:{QTitle},
    


}



</script>


<template>
    <section id="benefits">
        <q-title  name="Beneficios" color="black" />
   
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
    </section>
   
    
</template>
