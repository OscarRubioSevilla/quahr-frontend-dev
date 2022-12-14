<script>
import QTitle from '@/components/blocks/landing/QTitle.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ref, watch } from 'vue';

export default{
  components: {
    QTitle,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  }, 
  setup() {

    const carousel = ref(null);
    const selectedIndex = ref(0);
 
    const selectImage = index => {
        carousel.value.slideTo(index);
        selectedIndex.value = carousel.value.data.currentSlide.value;
    }

    watch(carousel, () => {
        console.log('Modificando')
    })


    return {
        selectImage,
        carousel,
        selectedIndex
    }
  }
}

</script>


<template>
    <section id="benefits">
        <q-title  name="Beneficios" color="black" />
   
        <div class="flex flex-col">
            <div class="flex gap-5 flex-4 justify-center">
                <button :class="{'text-red-500': selectedIndex === 0 }" class="text-black text-md font-mediumold" @click="selectImage(0)">Odontograma</button>
                <button :class="{'text-red-500': selectedIndex === 1 }" class="text-black text-md font-semfont-medium" @click="selectImage(1)">Especialidades</button>
                <button :class="{'text-red-500': selectedIndex === 2 }" class="text-black text-md font-semfont-medium" @click="selectImage(2)">Historial Clínico</button>
                <button :class="{'text-red-500': selectedIndex === 3 }" class="text-black text-md font-semfont-medium" @click="selectImage(3)">Diagnósticos</button>
                <button :class="{'text-red-500': selectedIndex === 4 }" class="text-black text-md font-semfont-medium" @click="selectImage(4)">Notificaciones</button>
            </div>
    
            <!-- Carrusel -->
            <carousel ref="carousel" :items-to-show="1">
                <slide :key="0">
                    <div class="carousel__item" :style="`background-image: ${1}`">
                        <img class="w-full" src="https://quahr-dental-v1.lugosoftdev.net/recursos/landing/img/beneficios/beneficios_notificaciones.png" alt="">
                        <h3>El odontograma más completo, intuitivo y fácil de personalizar</h3>
                    </div>
                </slide>
                <slide :key="1">
                    <div class="carousel__item" :style="`background-image: ${1}`">
                        <img class="w-full" src="https://quahr-dental-v1.lugosoftdev.net/recursos/landing/img/beneficios/beneficios_notificaciones.png" alt="">
                        <h3>El odontograma más completo, intuitivo y fácil de personalizar</h3>
                    </div>
                </slide>
                <template #addons>
                    <pagination />
                </template>
            </carousel>

        </div>
    </section>
   
    
</template>

<style scoped lang="scss">
 
.carousel {
    position: relative;
    justify-content: center;
    display: flex;
}
.carousel__pagination {
    position: absolute;
    bottom: 20px;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 8px;
  /* background-image: url(https://quahr-dental-v1.lugosoftdev.net/recursos/landing/img/foto5-slider.jpg); */
  background-size: cover;
  background-position: center;
}

.carousel__slide {
  padding: 10px;
}

</style>
