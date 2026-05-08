import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionLink?: string;
}

function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionLink,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
        <Icon className="w-8 h-8 text-slate-600 dark:text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">{description}</p>
      {actionLabel && actionLink && (
        <Link to={actionLink}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  );
}

export default EmptyState;
