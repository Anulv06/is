import type { Meta, StoryObj } from '@storybook/vue3';
import UIInput from './UIInput.vue'; // ← убедитесь, что путь правильный

const meta = {
  title: 'Components/UIInput',
  component: UIInput,
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof UIInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите текст',
  },
  render: (args) => ({
    components: { UIInput },
    setup: () => ({ args }),
    template: `<UIInput v-bind="args" />`, 
  }),
};