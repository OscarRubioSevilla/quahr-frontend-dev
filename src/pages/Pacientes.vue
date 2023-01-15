<script  setup>

import { usePatient } from '@/stores/patients/usePatients';
import { computed, onMounted, ref } from 'vue'
import { usePagination, useRowsPerPage } from "use-vue3-easy-data-table";
import QmodalAddPatiens from '@/components/blocks/panel/seccion/pacientes/QmodalAddPatiens.vue';

import EasyDataTable from 'vue3-easy-data-table'


const patientStore = usePatient();
const patients = computed(() => patientStore.patients);
const searchField = ref('');
const searchValue = ref('');
const dataTable = ref();
const showModal = ref(false);

const {
  currentPageFirstIndex,
  currentPageLastIndex,
  clientItemsLength,
  maxPaginationNumber,
  currentPaginationNumber,
  isFirstPage,
  isLastPage,
  nextPage,
  prevPage,
  updatePage,
} = usePagination(dataTable);

const { 
  rowsPerPageOptions,
  rowsPerPageActiveOption,
  updateRowsPerPageActiveOption,
} = useRowsPerPage(dataTable);
const updateRowsPerPageSelect = (e) => {
  updateRowsPerPageActiveOption(((e.target).value));
};


onMounted(async () => {
  await patientStore.getPatients();
})


const headers =
  [{ text: "Código", value: "code" },
  { text: "Nombre", value: "name" },
  { text: "Apellido Paterno", value: "apellido_paterno" },
  { text: "Apellido Materno", value: "apellido_materno" },
  { text: "Email", value: "email" },
  { text: "Opciones", value: "opciones" },

  ];

  const showModalExample = () =>{
    showModal.value= !showModal.value
  }

</script>

<template>
  <div class="rounded-md  m-5 bg-white shadow-xl shadow-cyan-500/50 h-full">
    <div class=" p-2 pl-7 text-3xl font-semibold border-b-2 border-secondary text-primary rounded-t-md ">
      <span>Pacientes</span>
    </div>
    <div class="flex justify-between items-center">
      <div class="p-2">
        <span>Mostrar</span>
        <select class=" w-12 outline-none border-b-2 border-black" @change="updateRowsPerPageSelect">
          <option v-for="patients in rowsPerPageOptions" :key="patients"
            :selected="patients === rowsPerPageActiveOption" :value="patients">
            {{ patients }}
          </option>
        </select>
        <span>Registros</span>
      </div>
      <div class="p-2">
        <input class=" flex justify-end outline-none rounded-md 
            bg-auto h-6  p-3  shadow-md
          bg-white-smoke  shadow-slate-200" type="text" placeholder="Buscar" v-model="searchValue">

      </div>
    </div>
    <easy-data-table ref="dataTable" class="w-full shadow-slate-200 rounded-b-md " table-class-name="customize-table"
      :headers="headers" :items="patients" :search-field="searchField" :search-value="searchValue" :rows-per-page="2"
      hide-footer>
      <template #item-opciones="item">
        <div class="flex gap-1">

          <button  class="w-5 h-5" title="Ficha" ><img src="@/assets/panel/pacientes/icono_Perfil_Paciente.png" alt=""></button>
          <button  class="w-5 h-5" title="Odontograma" ><img src="@/assets/panel/pacientes/icono_odontograma_Paciente.png" alt=""></button>
          <button  class="w-5 h-5" title="Planes/Presupuestos"><img src="@/assets/panel/pacientes/icono_presupuestos.png" alt=""></button>
          <button  class="w-5 h-5" title="Balance Pagos"><img src="@/assets/panel/pacientes/icono_caja_Paciente.png" alt=""></button>
          <button  class="w-5 h-5" title="Aplicar pago"><img src="@/assets/panel/pacientes/icono_Registrar_pago.png" alt=""></button>
          <button  class="w-5 h-5" title="Archivos" ><img src="@/assets/panel/pacientes/archivos.png" alt=""></button>
          <button  class="w-5 h-5" title="Encuestas" ><img src="@/assets/panel/pacientes/encuesta_crm.png" alt=""></button>
       </div>
      </template>
    </easy-data-table>
    <div class="flex justify-between">
      <div class="pl-3 ">
        Mostrando: {{ currentPageFirstIndex }} a {{ currentPageLastIndex }} de {{ clientItemsLength }} registros
      </div>
      <div class="pr-3">
        <button @click="prevPage" :disabled="isFirstPage">Anterior</button>
        {{ currentPaginationNumber }}
        <button @click="nextPage" :disabled="isLastPage">Siguiente</button>
      </div>
    </div>
    <QmodalAddPatiens v-model="showModal" />
    <button  @click="showModalExample" class="w-10 h-10 rounded-full  fixed bottom-10 right-10" title="Agregar paciente"> <img src="@/assets/panel/add-btn.png" alt=""></button>
  </div>


</template>

<style scoped >
.customize-table {

  --easy-table-border: none;
  --easy-table-row-border: none   ;
  --easy-table-header-font-size: 13px;

  --easy-table-header-height: 35px;



  --easy-table-body-even-row-font-color: rgb(72, 14, 220);
  --easy-table-body-even-row-background-color: #fc0c0c;

  --easy-table-body-row-font-color: #020913;
  --easy-table-body-row-background-color: white;
  --easy-table-body-row-height: 35px;
  --easy-table-body-row-font-size: 13px;

  --easy-table-body-row-hover-font-color: #030303;
  --easy-table-body-row-hover-background-color: rgb(238, 238, 238);



  --easy-table-scrollbar-track-color: #0867ff;
  --easy-table-scrollbar-color: #342e00;
  --easy-table-scrollbar-thumb-color: #27e89b;
  ;
  --easy-table-scrollbar-corner-color: #e61733;

  --easy-table-loading-mask-background-color: #e32309;
}


  ::deep .customize-table {
  min-height: 0;
}


</style>
