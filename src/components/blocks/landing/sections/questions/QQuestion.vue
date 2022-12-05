<script>
import {ref} from 'vue';

export default{

    props:{
        question:{
            type: Object,
            required: true
        }
    },


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
   
        <div  :class=" !showQuestion ?'rounded-full' : 'rounded-lg'  "  class="bg-white  w-full ">
            <div  @click="openAnswer" class="p-5 transition-v font-semibold text-xl text-primary flex justify-between ">
                 {{question.title}} 
                <img  class="w-8" src="@/assets/landing/questions/btn-question.png"  alt=""> 
            </div>
            <div v-if="showQuestion" class="border-t-2 border-silver">
                <p class="m0 p-5 ">
                   {{question.description}} 
                </p>
            </div>
        </div>

    <br>
</template>
<style>
.transition-v {
    transition: all ease 2s;
}
</style>