import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// Meta information for Storybook, including title and argTypes for customization
export default {
  title: 'Components/Button',  // Changed the title to "Components/Button" for a better hierarchy
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },  // Allows users to change the background color of the button
    label: { control: 'text' },  // Allows users to customize the label
    isActive: { control: 'boolean' },  // Boolean control for active state
    isHover: { control: 'boolean' },  // Boolean control for hover state
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },  // Select control for different button variants
  },
} as Meta;

// Template function to create stories with dynamic props
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

// Default button story with default arguments
export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',  // Default label text
  variant: 'primary',  // Default variant
  backgroundColor: '#1D72B8',  // Default background color
};

// Hovered button story, showing how the button looks when hovered
export const Hover = Template.bind({});
Hover.args = {
  label: 'Hovered Button',
  isHover: true,  // Simulating hover state
  variant: 'primary',
  backgroundColor: '#0056b3',  // A different color for hover
};

// Active button story, showing how the button looks when it's in active state
export const Active = Template.bind({});
Active.args = {
  label: 'Active Button',
  isActive: true,  // Simulating active state
  variant: 'primary',
  backgroundColor: '#003366',  // A darker color for active state
};

// Additional variant button stories
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',  // Primary variant
  backgroundColor: '#007bff',  // Primary color
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',  // Secondary variant
  backgroundColor: '#6c757d',  // Secondary color
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  variant: 'tertiary',  // Tertiary variant
  backgroundColor: '#e0e0e0',  // Light background color for tertiary
};


import { storiesOf } from '@storybook/angular';

storiesOf('Button', module)
.add('Primary', () => ({
  template: '<app-button variant="primary">Click Me</app-button>',
}))
.add('Secondary', () => ({
  template: '<app-button variant="secondary">Click Me</app-button>',
}));