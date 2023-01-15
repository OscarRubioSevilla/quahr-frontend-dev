import { defineStore } from "pinia"
import { api } from "@/api/axios";

import { ref } from 'vue';
import { patientTableAdapter } from "./adapters";
export const usePatient = defineStore("PATIENT", () => {

    const patients = ref([]);

    const getPatients = async() => {
        try {
            const { data } = await api.get('/paciente');

            // Adapters
            const formattedPatient = patientTableAdapter(data.data);

            return patients.value = formattedPatient;

        } catch (error) {
            return patients.value = [];
        }

    }
    return { patients, getPatients }
});