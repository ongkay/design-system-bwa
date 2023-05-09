import { Meta } from '@storybook/react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { Inputmui } from '.';
import { useRef } from 'react';

export default {
  title: 'Components/InputNew/Example',
  component: Inputmui,
  // argTypes: {
  //   label: {
  //     type: 'string',
  //   },
  // },
} as Meta;

export const Default = (args: any) => <Inputmui {...args} />;
// Default.args = {
//   children: 'Button',
// };
