// src/components/UIField/UIField.stories.ts
import { Meta, StoryObj } from '@storybook/vue3';
import UIField from './UIField.vue';
import UIInput from '../UIInput/UIInput.vue';

const meta: Meta<typeof UIField> = {
  component: UIField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст над полем',
    },
  },
  args: {
    label: 'Имя',
  },
};

export default meta;

export const WithInput: StoryObj<typeof UIField> = {
  render: (args) => ({
    components: { UIField, UIInput },
    setup: () => ({ args }),
    template: `
      <UIField v-bind="args">
        <UIInput :placeholder="'Введите ' + (args.label?.toLowerCase() || 'значение')" />
      </UIField>
    `,
  }),
};