import { Meta } from '@storybook/react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { Input } from '.';
import { useRef } from 'react';

export default {
  title: 'Components/InputMUI/Example',
  component: Input,
} as Meta;

export const Default = (args: any) => <Input {...args} />;
Default.args = {
  label: 'Username',
};

// function Sampel() {
//   return <Input>Nama Kamu</Input>;
// }

// export const ButtonVarians = (args: any) => (
//   <div className="flex flex-wrap items-center gap-2">
//     <Sampel />
//   </div>
// );
