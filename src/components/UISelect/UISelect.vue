<template>
  <select
    :value="props.modelValue"
    :disabled="props.isDisabled"
    @change="handleChange"
    class="ui-select"
  >
    <option v-for="opt in props.options" :key="opt" :value="opt">
      {{ opt }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string;
  isDisabled?: boolean;
  options: string[];
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
.ui-select {
  width: 100%;
  padding: 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: 14px;
}

.ui-select:disabled {
  background-color: var(--color-bg-muted);
  color: var(--color-text-muted);
  cursor: not-allowed;
}
</style>