<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';
import { useScreen } from '@/composables/useScreen';

const emit = defineEmits(['close', 'confirm', 'cancel', 'update:model-value']);

const props = defineProps({
  footer: {
    type: Boolean,
    required: false,
    default: true
  },
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

const { isMobile } = useScreen();
const showModal = ref(props.modelValue);

const confirm = () => { 
  emit('confirm');
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
  { 'modal-content-md w-[35%]': modalSize === 'md' && !isMobile() },
  { 'modal-content-lg w-3/4': modalSize === 'lg' && !isMobile() },
  { 'modal-content-full w-full': modalSize === 'full' || isMobile() },
]">
    <slot name="close">
      <button v-if="buttonClose" class="modal__close" @click="closeModal">
        X
      </button>
    </slot>
    <span class="modal__title p-2 pl-4 text-2xl font-medium border-b-2 border-secondary text-primary" v-if="props.titleText">
      <slot name="title">
        {{ props.titleText }}
      </slot>
    </span>
    <div class="modal__content p-4 flex flex-col gap-5 ">
      <slot name="body"></slot>
    </div>
    <div class="modal__action px-4 pb-4" v-if="footer">`
      <slot name="footer">
        <button type="" class="btn-border" v-if="props.confirm" @click="confirm">Iniciar Sesión</button>
        <button v-if="props.cancel" @click="cancel"></button>
      </slot>
    </div>
  </vue-final-modal>
</template>

<style scoped>
input {
  outline: none;
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
  border-radius: 0.5rem;
  background: #fff;
}

.modal__title {
  padding: .75rem;
  padding-left: 1rem;
  font-size: 1.64rem;
  font-weight: 500;
}

.modal__content {
  overflow-y: auto;
}

.modal__action {
  display: flex;
  justify-content: end;
  flex-shrink: 0;
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