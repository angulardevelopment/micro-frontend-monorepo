import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Hover = Template.bind({});
Hover.args = {
  label: 'Hover',
  isHover: true,
};

export const Active = Template.bind({});
Active.args = {
  label: 'Active',
  isActive: true,
};

import { storiesOf } from '@storybook/angular';

storiesOf('Button', module)
  .add('Primary', () => ({
    template: '<app-button variant="primary">Click Me</app-button>',
  }))
  .add('Secondary', () => ({
    template: '<app-button variant="secondary">Click Me</app-button>',
  }));