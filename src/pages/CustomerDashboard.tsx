import React, { useState } from 'react';
import { Plus, Package, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import EmptyState from '../components/EmptyState';

function CustomerDashboard() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [requests, setRequests] = useState<any[]>([]);

  const stats = [
    { icon: Package, label: 'Total Requests', value: '12', color: 'blue' as const },
    { icon: Clock, label: 'Pending', value: '3', color: 'orange' as const },
    { icon: CheckCircle, label: 'Completed', value: '9', color: 'green' as const },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation isDashboard />
      <Sidebar />

      <main className="md:ml-64 pt-16">
        <div className="container-max py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Transport Requests</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">Manage your cargo transportation requests</p>
            </div>
            <Button onClick={() => setShowCreateForm(!showCreateForm)} className="gap-2">
              <Plus className="w-5 h-5" />
              New Request
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map(stat => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          {/* Requests List */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Your Requests</h2>
            {requests.length === 0 ? (
              <EmptyState
                icon={Package}
                title="No requests yet"
                description="Create your first transport request to get started."
                actionLabel="Create Request"
                actionLink="#"
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

export default CustomerDashboard;
