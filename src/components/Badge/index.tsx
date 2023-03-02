import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'lib';
import { ReactNode } from 'react';

const badgeVariants = cva(
  'py-1 px-4 rounded-full inline-flex items-center',
  {
    variants: {
      state: {
        success: 'bg-soft-green border border-green text-green',
        warning: 'bg-soft-yellow border border-yellow text-yellow',
        danger: 'bg-soft-red border border-red text-red',
      },
    },
    defaultVariants: {
      state: 'success',
    },
  },
);

export interface Props extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  className?: string;
}

function Badge({ state, className, children }: Props) {
  return (
    <span className={cn(badgeVariants({ state }), className)}>
      {children}
    </span>
  );
}

export default Badge;
