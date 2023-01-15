import { defineStore } from "pinia";
import { ref } from 'vue';


export const useBtnCollapse = defineStore("btnCollapse", () => {

    const showMenu = ref(true)
    const collapseMenu = () => {
        showMenu.value = !showMenu.value;
    }

    return { showMenu, collapseMenu }

})