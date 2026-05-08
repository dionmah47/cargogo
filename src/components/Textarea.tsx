import React from 'react';
import { clsx } from 'clsx';
import { AlertCircle } from 'lucide-react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((
  { label, error, className, ...props },
  ref,
) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={clsx(
          'w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 resize-none',
          'bg-white dark:bg-slate-900',
          'border-slate-200 dark:border-slate-700',
          'focus:outline-none focus:border-primary-500 dark:focus:border-primary-400',
          'placeholder-slate-400 dark:placeholder-slate-600',
          'text-slate-900 dark:text-slate-50',
          error && 'border-red-500 dark:border-red-400',
          className,
        )}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
