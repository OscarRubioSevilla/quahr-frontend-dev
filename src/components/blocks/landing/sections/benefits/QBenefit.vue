
<script>
import { getImageUrl } from '@/utils/images';
import { Slide } from 'vue3-carousel';
export default {
    props: {
        benefit: {
            type: Object,
            required: true
        }
    },

    components: { Slide },
    setup() {

        return { getImageUrl }

    }


}

</script>

<template>

    <slide >
        <div class="carousel__item flex flex-col lg:flex-row items-center  "
            :style="`background-image: url('/src/assets/landing/beneficios/${benefit.banner}')`">
            <img class="flex-1 p-2" :src="getImageUrl(`landing/beneficios/${benefit.image}`)" alt="">
            <h3 class="text-2xl font-semibold flex-1 p-10"> {{ benefit.description }}</h3>
        </div>
    </slide>

</template> 

<style scoped>
img {
    max-width: 50%;
    height: 50%;
}

.carousel__item {
    cursor: pointer;
    min-height: 400px;
    
    width: 100%;
    background-color: white;
    color: black;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
}

</style>