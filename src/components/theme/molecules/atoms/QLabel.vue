<script setup>
import { computed,defineProps} from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  color: {
    type: String,
    required: false,
    default: 'dolphin'
  },
  size: {
    type: String,
    required: false,
    default: 'sm'
  },
  errorColor: {
    type: String,
    required: false,
    default: 'negative'
  },
  block: {
    type: Boolean,
    required: false,
    default: true
  },
  error: {
    type: Boolean,
    required: false,
    default: false
  }
})

const customColor = computed(() => {
  if (props.error) {
    return props.errorColor;
  }

  return props.color;
});

</script>
<template>
  <label :class="[{ 'block': props.block }, `text-${customColor} text-${props.size}`]" class="m0"> {{ props.label }}</label>
</template>

<style scoped>
  .d-block {
    display: block;
  }
</style>