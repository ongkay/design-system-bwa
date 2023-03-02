import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Baten from '../../../components/Baten';

export default {
  title: 'Components/Baten/Example',
  component: Baten,
} as ComponentMeta<typeof Baten>;

export const Primary = (args: any) => <Baten {...args}>Primary</Baten>;
Primary.args = {
  variant: 'default',
};

export const Destructive = (args: any) => (
  <Baten {...args}>Destructive</Baten>
);
Destructive.args = {
  variant: 'destructive',
};

export const Outline = (args: any) => <Baten {...args}>Outline</Baten>;
Outline.args = {
  variant: 'outline',
};

const Sample = () => {
  return <Baten variant="destructive">Sukses</Baten>;
};
