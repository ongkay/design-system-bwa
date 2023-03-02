import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { cn } from 'lib';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      state: {
        primary: 'bg-blue-500 text-white',
        secondary:
          'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
        danger: 'bg-blue-300 text-white focus:ring-red-500',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      state: 'primary',
    },
  },
);

interface Props
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonStyles> {
  href?: string;
  className?: string;
}

export const Badten = ({
  state,
  fullWidth,
  className,
  href,
  children,
  ...props
}: Props) => {
  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonStyles({ state, fullWidth, className }))}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonStyles({ state, fullWidth, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

//// Lama
// type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;
// interface Props2
//   extends ButtonOrLinkProps,
//     VariantProps<typeof buttonStyles> {}

// function ButtonOrLink({ href, ...props }: Props) {
//   const isLink = typeof href !== 'undefined';
//   const ButtonOrLink2 = isLink ? 'a' : 'button';

//   let content = <ButtonOrLink2 {...props} />;

//   if (isLink) {
//     return <a href={href}>{content}</a>;
//   }

//   return content;
// }
