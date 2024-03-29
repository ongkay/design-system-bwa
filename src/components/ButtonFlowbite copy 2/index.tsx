import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';
import { cn } from 'lib';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const buttonStyles = cva(
  'inline-flex items-center justify-center font-medium rounded-lg text-white focus:ring-4',
  {
    variants: {
      state: {
        primary: [
          'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
          'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        ],

        secondary: [
          'bg-pink-700 hover:bg-pink-800 focus:ring-pink-300',
          'dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800',
        ],
        danger: [
          'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300',
          'dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800',
        ],
      },
      size: {
        xs: 'text-xs px-3 py-2',
        sm: 'text-sm px-3 py-2',
        md: 'text-sm px-5 py-2.5',
        lg: 'text-base px-5 py-3',
        xl: 'text-base px-6 py-3',
      },

      fullSized: {
        true: 'w-full',
      },
      pill: {
        true: 'rounded-full',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50 focus:ring-0 !hover',
      },
    },

    defaultVariants: {
      state: 'primary',
      size: 'md',
    },
  },
);

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;
interface Props
  extends Omit<ButtonOrLinkProps, 'disabled'>,
    VariantProps<typeof buttonStyles> {
  href?: string;
  pill?: boolean;
  fullSized?: boolean;
  className?: string;
  label?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
}

const ButtonFlowbite = ({
  state = 'primary',
  size = 'md',
  pill,
  fullSized,
  className,
  href,
  children,
  label,
  disabled,
  isLoading,
  ...props
}: Props) => {
  if (isLoading) disabled = true;

  const clsname = cn(
    buttonStyles({
      state,
      size,
      pill,
      fullSized,
      className,
      disabled,
    }),
  );

  const buttonStyle = (
    <span className="inline-flex items-center justify-center">
      {isLoading ? (
        <span className="inline-flex items-center justify-center">
          <AiOutlineLoading3Quarters className="w-4 h-4 mr-2 animate-spin" />
          Loading...
        </span>
      ) : (
        <>
          {typeof children !== 'undefined' && children}
          {label && (
            <span
              className={
                'ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800'
              }
            >
              {label}
            </span>
          )}
        </>
      )}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={clsname} {...props}>
        {buttonStyle}
      </a>
    );
  }

  return (
    <button className={clsname} {...props}>
      {buttonStyle}
    </button>
  );
};

export default ButtonFlowbite;
