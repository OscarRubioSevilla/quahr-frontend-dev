<script>
import {ref} from 'vue';

export default{

        setup(){

            const showQuestion = ref(false)
            const openAnswer = () =>{
                showQuestion.value = !showQuestion.value
            }

            return {showQuestion, openAnswer}
        }

        

}

</script>
<template>
    <div class="flex flex-col gap-8  ">
        <div :class=" !showQuestion ?'rounded-full' : 'rounded-lg'  "  class="bg-white  ">
            <div  @click="openAnswer" class="p-5 transition-v font-semibold text-xl text-primary  ">Qué es Quahr dental?</div>
            <div v-if="showQuestion" class="border-t-2 border-silver">
                <p class="m0 p-5 ">
                    Quahr Dental es un sistema de administración y control clÍnico para odontólogos y
                clÍnicas odontológicas, para tener tu agenda a la mano cuando y donde la necesites.
                </p>
            </div>
        </div>
    </div>
    <br><br><br>
</template>
<style>
.transition-v {
    transition: all ease 2s;
}
</style>