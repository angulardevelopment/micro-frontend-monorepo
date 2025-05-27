import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { ToggleSwitchComponent } from './toggle-switch.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Shared/Toggle Switch',
  component: ToggleSwitchComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToggleSwitchComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is on or off',
    },
    toggled: { action: 'toggled' }
  },
} as Meta;

const Template: Story<ToggleSwitchComponent> = (args: ToggleSwitchComponent) => ({
  component: ToggleSwitchComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  checked: false,
};
