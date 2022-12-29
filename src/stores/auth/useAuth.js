
import { defineStore } from "pinia"

import { ref} from 'vue';
import axios from 'axios';

export const useAuth = defineStore("AUTH", () => {

    const isLoggedIn = ref(false);

    const login = async (usuario) => {
        isLoggedIn.value = !isLoggedIn.value;

        const res = await axios.get('https://sev.mavi.mx:8011/api/product/MERC00284');
        
        console.log(res)
    }

    return { isLoggedIn, login }
});