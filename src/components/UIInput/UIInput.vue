<template>
  <input
    :value="props.modelValue"
    :disabled="props.isDisabled"
    :placeholder="props.placeholder"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="ui-input"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();
</script>

<style scoped>
.ui-input {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 14px;
}

.ui-input:disabled {
  background-color: var(--color-bg-muted);
  color: var(--color-text-muted);
  cursor: not-allowed;
}
</style>