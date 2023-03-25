import { cn } from 'lib';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { ComponentProps, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import Ripple from 'material-ripple-effects';

import { btnVar } from './themes';

const buttonStyles = tv({
  base: 'rounded-lg align-middle select-none text-center font-bold font-sans',
  variants: {
    variant: {
      filled: '',
      gradient: '',
      outlined: '',
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
      sm: 'text-xs px-4 py-2',
      md: 'text-xs px-6 py-3',
      lg: 'text-sm px-7 py-3.5',
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
      className: btnVar.outlined('blue'),
    },
    {
      variant: 'outlined',
      color: 'indigo',
      className: btnVar.outlined('indigo'),
    },
    {
      variant: 'outlined',
      color: 'pink',
      className: btnVar.outlined('pink'),
    },
    {
      variant: 'filled',
      color: 'blue',
      className: btnVar.filled('blue'),
    },
    {
      variant: 'filled',
      color: 'indigo',
      className: btnVar.filled('indigo'),
    },
    {
      variant: 'filled',
      color: 'pink',
      className: btnVar.filled('pink'),
    },
    {
      variant: 'gradient',
      color: 'blue',
      className: btnVar.gradient('blue'),
    },
    {
      variant: 'gradient',
      color: 'indigo',
      className: btnVar.gradient('indigo'),
    },
    {
      variant: 'gradient',
      color: 'pink',
      className: btnVar.gradient('pink'),
    },
    {
      variant: 'text',
      color: 'blue',
      className: btnVar.text('blue'),
    },
    {
      variant: 'text',
      color: 'indigo',
      className: btnVar.text('indigo'),
    },
    {
      variant: 'text',
      color: 'pink',
      className: btnVar.text('pink'),
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
        type={props.type || 'button'}
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
