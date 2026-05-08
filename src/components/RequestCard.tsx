import React from 'react';
import { MapPin, Package, DollarSign, Calendar } from 'lucide-react';
import Card from './Card';
import Badge from './Badge';
import Button from './Button';

interface RequestCardProps {
  id: string;
  cargoImage?: string;
  pickupLocation: string;
  destination: string;
  description: string;
  estimatedDistance: number;
  offeredPrice?: number;
  status: 'pending' | 'accepted' | 'completed';
  date: string;
  onAction?: (id: string) => void;
  actionLabel?: string;
  actionVariant?: 'primary' | 'secondary';
}

function RequestCard({
  id,
  cargoImage,
  pickupLocation,
  destination,
  description,
  estimatedDistance,
  offeredPrice,
  status,
  date,
  onAction,
  actionLabel = 'Accept',
  actionVariant = 'primary',
}: RequestCardProps) {
  const statusVariants = {
    pending: 'warning' as const,
    accepted: 'info' as const,
    completed: 'success' as const,
  };

  return (
    <Card hoverable>
      {cargoImage && (
        <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
          <img
            src={cargoImage}
            alt="Cargo"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 line-clamp-1">
              {description}
            </h3>
          </div>
          <Badge variant={statusVariants[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <MapPin className="w-4 h-4" />
            <span>{pickupLocation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <MapPin className="w-4 h-4 rotate-180" />
            <span>{destination}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-slate-500 dark:text-slate-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">{estimatedDistance} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-500" />
            <span className="text-sm text-slate-600 dark:text-slate-400">{new Date(date).toLocaleDateString()}</span>
          </div>
          {offeredPrice && (
            <div className="flex items-center gap-2 ml-auto">
              <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">${offeredPrice}</span>
            </div>
          )}
        </div>

        {onAction && (
          <Button
            variant={actionVariant}
            size="sm"
            className="w-full mt-4"
            onClick={() => onAction(id)}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}

export default RequestCard;
