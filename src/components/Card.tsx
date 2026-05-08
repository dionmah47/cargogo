import React from 'react';
import { clsx } from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((
  { children, hoverable = false, className, ...props },
  ref,
) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'card-base shadow-sm p-6',
        hoverable && 'hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 cursor-pointer',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
