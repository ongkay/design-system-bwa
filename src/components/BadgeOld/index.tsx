import { cva } from 'class-variance-authority'
import { cn } from 'lib'
import { ReactNode } from 'react'

const Badge = ({
  children,
  state,
  className,
}: {
  children: ReactNode
  state?: 'success' | 'warning' | 'danger'
  className?: string
}) => {
  return (
    // <span className={cn(badgeVariants({ state }), className)}>{children}</span>
    <span
      className={cn(
        'py-1 px-4 rounded-full inline-flex items-center',
        {
          'bg-soft-green border border-green text-green': state === 'success',
          'bg-soft-yellow border border-yellow text-yellow':
            state === 'warning',
          'bg-soft-red border border-red text-red': state === 'danger',
        },
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
