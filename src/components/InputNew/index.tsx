import * as React from 'react';
import { ComponentProps, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

// import { cn } from '@/lib/utils';
import { cn } from 'lib';
import objectsToString from 'lib/objectsToString';
import { stylebase, stylebaseOutlined } from './themes';

const inputStyles = tv({
  base: 'peer w-full h-full bg-transparent text-gray-500 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-400 focus:border-blue-500',
  variants: {
    color: {
      blue: '',
      indigo: '',
      pink: '',
    },
    success: {
      true: '',
    },
    error: {
      true: '',
    },
    shrink: {
      true: '',
    },
    size: {
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    color: 'blue',
    // size: 'lg',
  },
});

const labelStyles = tv({
  base: '',
  variants: {
    color: {
      blue: 'text-gray-400 peer-focus:text-blue-500 before:border-gray-200 peer-focus:before:!border-blue-500 after:border-gray-200 peer-focus:after:!border-blue-500',
      indigo:
        'text-gray-400 peer-focus:text-indigo-500 before:border-gray-200 peer-focus:before:!border-indigo-500 after:border-gray-200 peer-focus:after:!border-indigo-500',
      pink: 'text-gray-400 peer-focus:text-pink-500 before:border-gray-200 peer-focus:before:!border-pink-500 after:border-gray-200 peer-focus:after:!border-pink-500',
    },
    success: {
      true: '',
    },
    error: {
      true: '',
    },
    shrink: {
      true: '',
    },
    size: {
      md: cn(objectsToString(stylebaseOutlined.sizes.md.label)),
      lg: cn(objectsToString(stylebaseOutlined.sizes.lg.label)),
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'lg',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

type InputStyles = VariantProps<typeof inputStyles>;
type LabelStyles = VariantProps<typeof labelStyles>;
type InputLabelStyle = InputStyles & LabelStyles & ComponentProps<'input'>;

interface Props extends InputLabelStyle {
  // color?: ButtonStyles['color'];
  label?: string;
  placeholder?: string;
}

const Inputmui = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label = 'inilabel',
      placeholder,
      color,
      size,
      error,
      success,
      shrink,
      ...props
    },
    ref,
  ) => {
    const testeraja = objectsToString({
      satu: 'satu',
      dua: 'dua',
      tiga: 'tiga',
      empat: {
        lima: 'lima',
        enam: 'enam',
        tujuh: {
          delapan: 'delapan',
        },
      },
    });
    console.log(testeraja);

    return (
      <>
        <div className="relative w-full min-w-[200px] h-10">
          <input
            ref={ref}
            id="user"
            placeholder=" "
            className="peer w-full h-full bg-transparent text-gray-500 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-400 placeholder-shown:border-t-gray-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-gray-400 focus:border-blue-500"
            // className={inputStyles({
            //   color,
            //   size,
            //   error,
            //   success,
            //   shrink,
            //   className,
            // })}
            {...props}
          />
          <label
            htmlFor="user"
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-600 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-600 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-blue-500 before:border-gray-400 peer-focus:before:!border-blue-500 after:border-gray-400 peer-focus:after:!border-blue-500"
            // className={cn(
            //   labelStyles({
            //     color,
            //     size,
            //     error,
            //     success,
            //     shrink,
            //     className,
            //   }),
            // )}
          >
            {label}
          </label>
        </div>
      </>
    );
  },
);
Inputmui.displayName = 'Inputmui';

export { Inputmui };
