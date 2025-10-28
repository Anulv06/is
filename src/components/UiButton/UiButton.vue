<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
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
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 48px; 
  padding: 12px 28px; 
  font-size: 20px; 
  font-weight: 600; 
  line-height: 2;
  color:  #040303ff;
  background: linear-gradient(135deg, #eb24b6ff 0%, #db96cdff 100%); 
  border: none; 
  border-radius: 12px; 
  cursor: pointer;
  transition: all 0.3s ease; 

  &[data-layout='secondary'] {
     color: #4098a2ff; 
    background: transparent; 
    border: 2px solid #2575fc; 
    box-shadow: 0 4px 12px rgba(37, 117, 252, 0.1); 
  }

   &:hover {
    transform: translateY(-3px); 
  }
}
</style>
