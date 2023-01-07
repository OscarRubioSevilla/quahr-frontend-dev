import { defineStore } from "pinia";
import { ref } from 'vue';
import { api } from '@/api/axios';

export const useBtnCollapse = defineStore("btnCollapse", () => {
    const objeto = [{/}];
    const he = [
        {}
    ];

    const w = ref('10')

    const collapseMenu = () => {
        if (w.value === '10') {
            w.value = '6'
        } else if (w.value === '6') {
            w.value = '10'
        }
    }

    const mostrar = async() => {

        try {
            const { data } = await api.get('/paciente');
            const paciente = data.data
            paciente.forEach(p => {
                objeto = reactive(objeto.push({ text: p.nombre, value: p.nombre }))
                he.push({ paciente: p.nombre })
                console.log(objeto)
                return algo, he;
            });


        } catch (error) {
            console.log("error")
        }

    }
    return { w, collapseMenu, mostrar, objeto, he }

})