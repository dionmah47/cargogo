import React, { useState } from 'react';
import { Truck, MapPin, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import EmptyState from '../components/EmptyState';

function DriverDashboard() {
  const [availableRequests, setAvailableRequests] = useState<any[]>([]);
  const [filterCity, setFilterCity] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const stats = [
    { icon: Truck, label: 'Total Trips', value: '24', color: 'blue' as const },
    { icon: DollarSign, label: 'Total Earnings', value: '$1,240', color: 'green' as const },
    { icon: MapPin, label: 'Completed Today', value: '3', color: 'purple' as const },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation isDashboard />
      <Sidebar />

      <main className="md:ml-64 pt-16">
        <div className="container-max py-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Available Requests</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">Browse and accept new transport requests</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {stats.map(stat => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  label="Filter by City"
                  placeholder="e.g., San Francisco"
                  value={filterCity}
                  onChange={(e) => setFilterCity(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <Input
                  label="Filter by Date"
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <Button variant="outline" onClick={() => {
                  setFilterCity('');
                  setFilterDate('');
                }}>Clear Filters</Button>
              </div>
            </div>
          </Card>

          {/* Requests List */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">New Requests</h2>
            {availableRequests.length === 0 ? (
              <EmptyState
                icon={MapPin}
                title="No requests available"
                description="Check back later for new transport requests in your area."
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Requests will render here */}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DriverDashboard;
