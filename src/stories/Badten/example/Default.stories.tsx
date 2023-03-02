import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badten } from '../../../components/Badten';

export default {
  title: 'Components/Badten/Example',
  component: Badten,
  argTypes: {
    fullWidth: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Badten>;

export const Primary = (args: any) => <Badten {...args}>Primary</Badten>;
Primary.args = {
  state: 'primary',
};

export const Secondary = (args: any) => (
  <Badten {...args}>Secondary</Badten>
);
Secondary.args = {
  state: 'secondary',
};

export const Danger = (args: any) => <Badten {...args}>Danger</Badten>;
Danger.args = {
  state: 'danger',
};

const Sample = () => {
  return <Badten state="secondary">Sukses</Badten>;
};
