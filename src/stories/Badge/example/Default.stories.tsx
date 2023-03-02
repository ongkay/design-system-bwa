import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from '../../../components/Badge';

export default {
  title: 'Components/Badge/Example',
  component: Badge,
} as ComponentMeta<typeof Badge>;

// const Template: ComponentStory<typeof Badge> = (args) => (
//   <Badge {...args}>Badge</Badge>
// )

// export const Primary = Template.bind({})
// Primary.args = {
//   state: 'success',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   state: 'warning',
// }

// export const Danger = Template.bind({})
// Danger.args = {
//   state: 'danger',
// }

export const Success = (args: any) => <Badge {...args}>Success</Badge>;
Success.args = {
  state: 'success',
};

export const Warning = (args: any) => <Badge {...args}>Warning</Badge>;
Warning.args = {
  state: 'warning',
};

export const Danger = (args: any) => <Badge {...args}>Danger</Badge>;
Danger.args = {
  state: 'danger',
};

const Sample = () => {
  return <Badge state="success">Sukses</Badge>;
};
