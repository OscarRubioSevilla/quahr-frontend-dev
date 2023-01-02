import { defineStore } from "pinia"
import { api } from "@/api/axios";

import { ref } from 'vue';


export const useAuth = defineStore("AUTH", () => {

    const isLoggedIn = ref(false);

    const login = async({ user, password }) => {
        try {
            const { data } = await api.post('/login', { email: user, password });
            return isLoggedIn.value = data.success;

        } catch (error) {
            return isLoggedIn.value = false;
        }

    }
    return { isLoggedIn, login }
});