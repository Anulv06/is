<template>
  <div class="ui-field">
    <label v-if="label" class="ui-field-label">{{ label }}</label>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

defineProps<IProps>();
</script>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ui-field-label {
  font-weight: bold;
  color: var(--color-text-primary); /* ← обновлено */
}
</style>