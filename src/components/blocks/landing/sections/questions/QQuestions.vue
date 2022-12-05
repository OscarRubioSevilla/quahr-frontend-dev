<script>
import QQuestion from './QQuestion.vue';
import QTitle from '../../QTitle.vue';
import { QUESTIONS } from '@/const/landing';

export default{

    components:{ QQuestion, QTitle },


    setup(){


        return{QUESTIONS}
        
    }

}

</script>   
<template>
    <section id="questions">
        <q-title name="Preguntas frecuentes" color="white" />
        <q-question  v-for="question of QUESTIONS" :question="question" />
    </section>
    
</template>
