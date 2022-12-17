<script>

export default{
    
    props:{
        name:{
            type: String,
           required:true 
        },
        color:{
            type: String,
           required:false,
            default: 'white'
        }

    }

}

</script>


<template>  

    <div  class="flex flex-col justify-center items-center gap-4 py-4">
        <h3 :class="`text-${color} text-3xl font-semibold`">{{name}}</h3>
        <hr   :class="`bg-${color}`" class="w-16 h-1 border-0" >
    </div>

</template>
    