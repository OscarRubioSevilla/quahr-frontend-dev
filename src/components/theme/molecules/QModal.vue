<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';
import { useScreen } from '@/composables/useScreen';

const emit = defineEmits(['close', 'confirm', 'cancel', 'update:model-value']);

const props = defineProps({
  escToClose: {
    type: Boolean,
    required: false,
    default: true
  },
  buttonClose: {
    type: Boolean,
    required: false,
    default: false
  },
  modalSize: {
    type: String,
    required: false,
    default: 'md',
    validator(value) {
      return ['sm', 'md', 'lg', 'full'].includes(value)
    }
  },
  modelValue: {
    type: Boolean,
    required: true
  },
  confirm: {
    type: Boolean,
    required: false,
    default: true
  },
  cancel: {
    type: Boolean,
    required: false,
    default: true
  },
  cancelText: {
    type: String,
    required: false,
    default: 'Cancelar'
  },
  title: {
    type: Boolean,
    required: false,
    default: false
  },
  titleText: {
    type: String,
    required: false,
    default: ''
  },
  confirmText: {
    type: String,
    required: false,
    default: 'Aceptar'
  }

})

const { size, br, isMobile } = useScreen();

const showModal = ref(props.modelValue);



const usuario = ref('');
const password = ref('');
 const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const confirm = () => { 
  console.log(expr)
  if(!expr.test(usuario.value) ){
    alert('Usuario invalido')
  }
  
  showModal.value = false;
  emit('confirm', { usuario, password });
}
const cancel = () => {
  showModal.value = false;
  emit('cancel');
}

watch(() => props.modelValue, (value) => {
  showModal.value = value;
});

watch(showModal, (value) => emit('update:model-value', value));

const closeModal = () => {
  showModal.value = false;
  emit('close');
}

</script>

<template>
  <!-- First modal -->
  <vue-final-modal v-model="showModal" :esc-to-close="escToClose" classes="modal-container" :content-class="[
  'modal-content',
  { 'modal-content-sm w-1/4': modalSize === 'sm' && !isMobile() },
  { 'modal-content-md w-2/5': modalSize === 'md' && !isMobile() },
  { 'modal-content-lg w-3/4': modalSize === 'lg' && !isMobile() },
  { 'modal-content-full w-full': modalSize === 'full' || isMobile() },
]">
    <slot name="close">
      <button v-if="buttonClose" class="modal__close" @click="closeModal">
        X
      </button>
    </slot>
    <span class="modal__title" v-if="props.titleText">
      <slot name="title">
        {{ props.titleText }}
      </slot>
    </span>
    <div class="modal__content flex flex-col gap-5 ">
      <input v-model="usuario" class="bg-gray-100 rounded-md input-height" type="email" 
        placeholder="Correo electrónico">
      <input v-model="password" class="bg-gray-100 rounded-md input-height" type="password"
       placeholder="Contraseña"
        name="password" autocomplete="on">
        <input class="outline-none p-2 rounded-md bg-gray-100
         focus:bg-white 
         focus:border-solitude 
         focus:border-2  " type="text" placeholder="input de prueba">

      <slot name="body"></slot>
    </div>
    <div class="modal__action">`
      <slot name="footer">
        <button class="btn-border  " v-if="props.confirm" @click="confirm()">Iniciar Sesión</button>
        <button v-if="props.cancel" @click="cancel"></button>
      </slot>
    </div>
  </vue-final-modal>
</template>

<style scoped>
input {
  outline: none;
}

.btn-border {
  border-bottom: solid 1px black;
  color: #161442;
}

.input-height {
  height: 2.2rem;
  padding: .5rem;
}

.input-height:focus {
  background-color: white;
  border: solid 2px #e2e8f0;
}


::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  padding-left: 1rem;
  padding: .5rem;
  font-size: 1.75rem;
  font-weight: 500;
  border-bottom: 2px solid #52C7E4;
}

.modal__content {
  overflow-y: auto;
  padding: 1rem 2rem 0 2rem;
}

.modal__action {
  display: flex;
  justify-content: end;
  align-items: top;
  flex-shrink: 0;
  padding: 1rem 2rem 2rem 2rem;

}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>