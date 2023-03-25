import { cn } from 'lib';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import {
  ComponentProps,
  ReactNode,
  FC,
  PropsWithChildren,
  ReactElement,
  forwardRef,
} from 'react';
import { Children, cloneElement, useMemo } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import Ripple from 'material-ripple-effects';
import objectsToString from 'lib/objectsToString';

const buttonStyles = tv({
  base: 'rounded-lg align-middle select-none text-center transition-all font-bold font-sans',
  variants: {
    variant: {
      filled:
        'text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none',
      gradient:
        'text-white shadow-md hover:shadow-lg active:opacity-[0.85]',
      outlined: 'hover:opacity-75 focus:ring active:opacity-[0.85] border',
      text: '',
    },
    color: {
      blue: '',
      indigo: '',
      pink: '',
    },
    fullWidth: {
      true: 'block w-full',
    },

    disabled: {
      true: 'pointer-events-none opacity-50 focus:ring-0',
    },
    size: {
      xs: 'text-xs px-3 py-2',
      sm: 'text-sm px-3 py-2',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-base px-5 py-3',
      xl: 'text-base px-6 py-3',
    },
  },
  defaultVariants: {
    variant: 'filled',
    color: 'blue',
    size: 'lg',
  },
  compoundVariants: [
    {
      variant: 'outlined',
      color: 'blue',
      className: 'border-blue-500 text-blue-500 focus:ring-blue-200',
    },
    {
      variant: 'outlined',
      color: 'indigo',
      className: 'border-indigo-500 text-indigo-500 focus:ring-indigo-200',
    },
    {
      variant: 'outlined',
      color: 'pink',
      className: 'border-pink-500 text-pink-500 focus:ring-pink-200',
    },

    {
      variant: 'filled',
      color: 'blue',
      className: 'bg-blue-500 shadow-blue-500/20 hover:shadow-blue-500/40',
    },
    {
      variant: 'filled',
      color: 'indigo',
      className:
        'bg-indigo-500 shadow-indigo-500/20 hover:shadow-indigo-500/40',
    },
    {
      variant: 'filled',
      color: 'pink',
      className: 'bg-pink-500 shadow-pink-500/20 hover:shadow-pink-500/40',
    },
    {
      variant: 'gradient',
      color: 'blue',
      className:
        'bg-gradient-to-tr from-blue-600 to-blue-400 shadow-blue-500/20 hover:shadow-blue-500/40',
    },
    {
      variant: 'gradient',
      color: 'indigo',
      className:
        'bg-gradient-to-tr from-indigo-600 to-indigo-400 shadow-indigo-500/20 hover:shadow-indigo-500/40',
    },
    {
      variant: 'gradient',
      color: 'pink',
      className: objectsToString({
        backgroud: 'bg-gradient-to-tr from-pink-600 to-pink-400',
        color: 'text-white',
        shadow: 'shadow-md shadow-pink-500/20',
        hover: 'hover:shadow-lg hover:shadow-pink-500/40',
        active: 'active:opacity-[0.85]',
      }),
    },
  ],
});

type ButtonStyles = VariantProps<typeof buttonStyles>;
type ButtonOrLinkProps = ButtonStyles &
  ComponentProps<'button'> &
  ComponentProps<'a'>;
interface Props extends ButtonOrLinkProps {
  // color?: 'primary' | 'secondary' | 'danger';
  color?: ButtonStyles['color'];
  href?: string;
  className?: string;
  isLoading?: boolean;
  ripple?: boolean;
}

export const ButtonFlowbite = forwardRef<HTMLButtonElement, Props>(
  (
    {
      color = 'blue',
      size = 'md',
      fullWidth,
      className,
      href,
      children,
      disabled,
      isLoading,
      variant,
      ripple = true,

      ...props
    },
    ref,
  ) => {
    if (isLoading) disabled = true;
    const rippleEffect = ripple !== undefined && new Ripple();

    const buttonBase = objectsToString({
      border: 'border border-blue-gray-500',
      color: 'text-blue-gray-500',
      hover: 'hover:opacity-75',
      focus: 'focus:ring focus:ring-blue-gray-200',
      active: 'active:opacity-[0.85]',
    });
    console.log(buttonBase);

    const clsname = cn(
      buttonStyles({
        color,
        size,
        fullWidth,
        className,
        disabled,
        variant,
      }),
    );

    const buttonStyle = (
      <>
        {isLoading ? (
          <span className="inline-flex items-center justify-center">
            <AiOutlineLoading3Quarters className="w-4 h-4 mr-2 animate-spin" />
            Loading...
          </span>
        ) : (
          <>{children}</>
        )}
      </>
    );

    if (href) {
      return (
        <a href={href} className={clsname} {...props}>
          {buttonStyle}
        </a>
      );
    }

    return (
      <button
        disabled={disabled}
        className={clsname}
        ref={ref}
        onMouseDown={(e) => {
          const onMouseDown = props?.onMouseDown;

          if (ripple) {
            rippleEffect.create(
              e,
              variant === 'filled' || variant === 'gradient'
                ? 'light'
                : 'dark',
            );
          }

          return typeof onMouseDown === 'function' && onMouseDown(e);
        }}
        {...props}
      >
        {buttonStyle}
      </button>
    );
  },
);
