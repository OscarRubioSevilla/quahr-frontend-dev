<script>

export default{

    props:{
        
        botones: {
            required: true,
            type: Array
        }
    }


}




</script>


<template>
    <header class="flex justify-between bg-white px-4 lg:px-32 py-1">
        <div class="text-primary text-xl">
            <a href="/">
                <img class="w-11" src="@/assets/logo/quahr-icon.png" alt="" width="100" height="100">
            </a>
        </div>
        <div class="flex gap-4 items-center">
            <button class="text-dolphin text-md" :class="[
                { 'border border-dolphin rounded-md px-4': index === 0 },
                { 'border-b-2 leading-none': index === 1 }
            ]" v-for="btn, index of botones">{{ btn }}</button>
        </div>
    </header>
</template>