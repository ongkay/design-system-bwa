import { Meta } from '@storybook/react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { ButtonFlowbite, ButtonGroup } from '.';
import { useRef } from 'react';

export default {
  title: 'Components/ButtonNew/Example',
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

function Sampel() {
  const ref = useRef(null);
  console.log(ref.current);
  return (
    <ButtonFlowbite
      color={'primary'}
      ref={ref}
      onClick={() => alert('mantap bro')}
      className="px-8"
    >
      Sample
    </ButtonFlowbite>
  );
}

export const ButtonVarians = (args: any) => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonFlowbite color={'primary'}>primary</ButtonFlowbite>
    <ButtonFlowbite color={'secondary'}>secondary</ButtonFlowbite>
    <ButtonFlowbite color={'danger'}>danger</ButtonFlowbite>
    <Sampel />
  </div>
);

export const ButtonSize = (args: any) => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonFlowbite size={'xs'}>Button</ButtonFlowbite>
    <ButtonFlowbite size={'sm'}>Button</ButtonFlowbite>
    <ButtonFlowbite size={'md'}>Button</ButtonFlowbite>
    <ButtonFlowbite size={'lg'}>Button</ButtonFlowbite>
    <ButtonFlowbite size={'xl'}>Button</ButtonFlowbite>
  </div>
);

export const IconButtons = (args: any) => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonFlowbite>
      <HiOutlineArrowRight className="w-6 h-6" />
    </ButtonFlowbite>
    <ButtonFlowbite pill>
      <HiOutlineArrowRight className="w-6 h-6" />
    </ButtonFlowbite>
  </div>
);

export const ButtonWithIcon = (args: any) => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonFlowbite>
      <HiShoppingCart className="w-5 h-5 mr-2" />
      Buy now
    </ButtonFlowbite>
    <ButtonFlowbite>
      Choose plan
      <HiOutlineArrowRight className="w-5 h-5 ml-2" />
    </ButtonFlowbite>
  </div>
);

export const Disable = (args: any) => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonFlowbite
      disabled
      onClick={() => {
        alert('first');
      }}
    >
      Disable Button
    </ButtonFlowbite>
    <ButtonFlowbite
      isLoading
      onClick={() => {
        alert('first');
      }}
    >
      Beli sekarang
    </ButtonFlowbite>
  </div>
);

export const WithLabel = (args: any) => (
  <div className="flex flex-wrap items-center gap-2">
    <ButtonFlowbite size={'lg'} label={3}>
      Button with label
    </ButtonFlowbite>
    <ButtonFlowbite label={27}>Pesan</ButtonFlowbite>
  </div>
);

export const ButtonGroup2 = (args: any) => (
  <ButtonGroup>
    <ButtonFlowbite>Profile</ButtonFlowbite>
    <ButtonFlowbite>Settings</ButtonFlowbite>
    <ButtonFlowbite>Messages</ButtonFlowbite>
  </ButtonGroup>
);
