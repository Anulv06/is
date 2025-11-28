<template>
  <button
    :class="$style.button"
    :data-layout="props.layout"
    :disabled="props.isDisabled"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<style module>
.button {
  /* Общие стили */
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  line-height: 1.4;
  user-select: none;
  position: relative;
}

/* === Primary (акцентная, фиолетовая) === */
.button[data-layout='primary'] {
  background-color: var(--color-interactive-primary); /* #6c1988 */
  color: var(--color-text-inverted);
  box-shadow: 0 2px 6px rgba(108, 25, 136, 0.25);
}

.button[data-layout='primary']:hover:not(:disabled) {
  background-color: var(--color-interactive-hover); /* #181a1f */
  box-shadow: 0 4px 12px rgba(108, 25, 136, 0.35);
  transform: translateY(-2px);
}

.button[data-layout='primary']:active:not(:disabled) {
  background-color: var(--color-interactive-active);
  box-shadow: 0 1px 4px rgba(108, 25, 136, 0.25);
  transform: translateY(0);
}

.button[data-layout='primary']:disabled {
  background-color: var(--color-bg-muted);       /* #f3f4f6 */
  color: var(--color-text-muted);                /* #6b7280 */
  border: 1px solid var(--color-border-muted);   /* #e5e7eb — серая рамка */
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* === Secondary (контурная) === */
.button[data-layout='secondary'] {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.button[data-layout='secondary']:hover:not(:disabled) {
  background-color: var(--color-bg-muted);
  border-color: var(--color-interactive-primary);
  color: var(--color-interactive-primary);
}

.button[data-layout='secondary']:active:not(:disabled) {
  background-color: var(--color-bg-secondary);
  color: var(--color-interactive-active);
  border-color: var(--color-interactive-active);
}

.button[data-layout='secondary']:disabled {
  background-color: var(--color-bg-primary);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border-muted);   /* #e5e7eb — серая рамка */
  cursor: not-allowed;
}
</style>