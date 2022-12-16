<script setup>
import QTitle from '@/components/blocks/landing/QTitle.vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Pagination } from 'vue3-carousel';
import { ref } from 'vue';
import { BENEFITS } from '@/const/landing';
import QBenefit from './QBenefit.vue';

const carousel = ref(null);
const selectedIndex = ref(0);

const selectImage = index => {
    carousel.value.slideTo(index);
    selectedIndex.value = carousel.value.data.currentSlide.value;
}

const slideEnd = () => {
    selectedIndex.value = carousel.value.data.currentSlide.value;
}

</script>


<template>
    <section id="benefits">
        <q-title name="Beneficios" color="black" />
        <div class="flex flex-col">
            <div class="flex gap-5 flex-4 justify-center">
                <button v-for="benefit, index of BENEFITS" 
                    :class="{ 'font-semibold': selectedIndex === index }" class="text-black text-md font-mediumold"
                    @click="selectImage(index)">{{ benefit.name }}</button>
            </div>

            <!-- Carrusel -->
            <Carousel :autoplay="5000" @slide-end="slideEnd" :transition="1000" :wrapAround="true" ref="carousel" :items-to-show="1">

                <q-benefit v-for="benefit in BENEFITS" :benefit="benefit" />

                <template #addons>
                    <pagination   />
                </template>
            </Carousel>

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
.carousel__slide--sliding {
    transition: all ease  1.5s;
  }
::v-deep {
    
  .carousel__pagination-button::after {
    width: 15px ;
    height: 15px;
    border-radius: 50%; 
    background-color: chocolate;
  }
  .carousel__pagination-button:hover::after, 
  .carousel__pagination-button--active::after {
    background-color: aqua;
  }

}


.carousel__slide {
    padding: 10px;
}
</style>
