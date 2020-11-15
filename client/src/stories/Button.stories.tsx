import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';
import Button, { Props } from '../components/Button/Button';
// import { Button, ButtonProps } from './Button';

export default {
  title: 'Quiz/Button',
  component: Button
} as Meta;

const Template: Story<Props> = (args) => <BrowserRouter>
  <Button {...args}>{args.children}</Button>
</BrowserRouter>;

export const Primary = Template.bind({});
Primary.args = {
  to: '/somesite',
  children: 'Hello World'
};

export const Secondary = Template.bind({});
Secondary.args = {
  to: '/somesite',
  children: 'Second button'
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
