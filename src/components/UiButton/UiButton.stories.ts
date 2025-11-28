import { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue'; // ← лучше прямой импорт

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  argTypes: {
    layout: {
      control: 'radio', 
      options: ['primary', 'secondary'],
      description: 'Внешний вид кнопки',
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
      description: 'Тип кнопки (HTML)',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Отключить кнопку',
    },
  },
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: `<UiButton v-bind="args">Рассчитать</UiButton>`,
  }),
};

export const Secondary: StoryObj<typeof UiButton> = {
  ...Primary,
  args: {
    layout: 'secondary',
    isDisabled: false,
  },
};

export const Disabled: StoryObj<typeof UiButton> = {
  ...Primary,
  args: {
    isDisabled: true,
  },
};