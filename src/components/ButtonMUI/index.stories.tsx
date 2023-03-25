import { Meta } from '@storybook/react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { ButtonFlowbite } from '.';
import { useRef } from 'react';

export default {
  title: 'Components/ButtonMUI/Example',
  component: ButtonFlowbite,
  argTypes: {
    label: {
      type: 'string',
    },
  },
} as Meta;

export const Default = (args: any) => <ButtonFlowbite {...args} />;
Default.args = {
  children: 'Button',
};

