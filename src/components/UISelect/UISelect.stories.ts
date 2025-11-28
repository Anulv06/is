import type { Meta, StoryObj } from '@storybook/vue3';
import UISelect from './UISelect.vue';

const meta: Meta<typeof UISelect> = {
  title: 'Components/UISelect',
  component: UISelect,
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Выбранная опция (должна быть одной из options)',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Отключить выбор',
    },
    options: {
      control: 'object',
      description: 'Массив строк-опций',
    },
  },
  args: {
    modelValue: 'Вариант 1',
    isDisabled: false,
    options: ['Вариант 1', 'Вариант 2', 'Вариант 3'],
  },
};

export default meta;

export const Default: StoryObj<typeof UISelect> = {
  render: (args) => ({
    components: { UISelect },
    setup: () => ({ args }),
    template: `<UISelect v-bind="args" />`,
  }),
};

export const Empty: StoryObj<typeof UISelect> = {
  args: {
    modelValue: 'Опция A',
    options: ['Опция A', 'Опция B'],
  },
};