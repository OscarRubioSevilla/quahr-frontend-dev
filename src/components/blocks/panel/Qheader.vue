<script setup>


</script>
<template>

<header>
    <div class="flex  justify-between items-center  px-7 py-4 border-b-2 border-cyan-200 ">
            <div>
                <img class="" width="190px" src="@/assets/logo/quahr-logo.png" alt="">
            </div>
            <div class=" hidden lg:flex rounded-md px-10">
                <input class="outline-none rounded-md img-icon-background
                 bg-no-repeat bg-auto h-6 w-96 p-4 pl-8 shadow-md
                  focus:bg-slate-100 shadow-slate-200" placeholder="Buscar"> 
                  
            </div>
            <div class=" px-4 flex gap-2 items-center text-xs font-semibold pl-10">
                <span>01 / Ene / 2023</span>  
                <img src="@/assets/panel/v-line-blue.png" alt="">
                <div class="">
                    <span>8:55 pm</span>
                    <img class="w-4 pl-1" src="@/assets/panel/campana.png" alt=""> 
                    <a class="flex justify-center  bg-slate-400 rounded-full w-5 relative left-4 bottom-1.5" href="#">0</a>
                
                </div>
                <img src="@/assets/panel/v-line-blue.png" alt="">
                 <div class="flex  items-center">   
                    <img  class="w-10 rounded-full pr-1" src="@/assets/panel/usuario_default.png"  alt="">
                    <span>OTRO</span>
                    <a class="flex justify-center  bg-slate-400 rounded-full px-1 w-5 relative top-4 right-14" href="#">0</a>
                    
                    
                    <img src="@/assets/panel/v-line-blue.png" alt="">
                 </div>
                 <div>  
                    <select name="" id="">
                        
                        <option value="">Algo</option>
                    </select>
                 </div>
            </div>
    </div>

</header>


  
            
        
       


</template>

<style>

.img-icon-background{
    background-image: url('/src/assets/panel/icon_search.jpg');
    background-size :2rem;
    
}

</style>