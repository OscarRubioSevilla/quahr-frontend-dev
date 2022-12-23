<script setup>
import { ref, defineProps, watch, defineEmits } from 'vue';

import { useScreen } from '@/composables/useScreen';

const emit = defineEmits(['close','confirm', 'cancel' , 'update:model-value']);

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
    validator (value) {
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

const confirm = () => {
    showModal.value = false;
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
    <vue-final-modal v-model="showModal" :esc-to-close="escToClose" classes="modal-container w-" 
      
       :content-class="[
          'modal-content',
          { 'modal-content-sm w-1/4' : modalSize === 'sm' && !isMobile() },
          { 'modal-content-md w-2/5' : modalSize === 'md' && !isMobile()  },
          { 'modal-content-lg w-3/4' : modalSize === 'lg' && !isMobile()  },
          { 'modal-content-full w-full' : modalSize === 'full' || isMobile() },
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
        <div class="modal__content">
          <slot name="body"></slot>
        </div>
        <div class="modal__action">
           <slot name="footer">
            {{  size }}
            {{ br }}
            <button v-if="props.confirm" @click="confirm">{{ props.confirmText }}</button>
            <button v-if="props.cancel" @click="cancel">{{ props.cancelText }}</button>
           </slot>
        </div>
    </vue-final-modal>
</template>

  <style scoped>
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
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
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