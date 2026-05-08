import React, { useState } from 'react';
import { Truck, Star, FileText, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Input from '../components/Input';
import StatCard from '../components/StatCard';

function DriverProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState({
    vehicleType: 'Van',
    licensePlate: 'ABC123',
    capacity: '500',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicleInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation isDashboard />
      <Sidebar />

      <main className="md:ml-64 pt-16">
        <div className="container-max py-8 max-w-4xl">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">Driver Profile</h1>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              icon={Star}
              label="Rating"
              value="4.9"
              subtext="Based on 48 trips"
              color="orange"
            />
            <StatCard
              icon={Truck}
              label="Completed Trips"
              value="48"
              subtext="This month: 12"
              color="blue"
            />
            <StatCard
              icon={MapPin}
              label="Total Distance"
              value="2,340 km"
              subtext="This month: 680 km"
              color="green"
            />
          </div>

          {/* Vehicle Information */}
          <Card className="mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-1">Vehicle Information</h2>
                <p className="text-slate-600 dark:text-slate-400">Your vehicle details</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </div>

            <div className="space-y-4">
              <Input
                label="Vehicle Type"
                name="vehicleType"
                value={vehicleInfo.vehicleType}
                onChange={handleChange}
                disabled={!isEditing}
                icon={<Truck className="w-5 h-5" />}
              />
              <Input
                label="License Plate"
                name="licensePlate"
                value={vehicleInfo.licensePlate}
                onChange={handleChange}
                disabled={!isEditing}
                icon={<FileText className="w-5 h-5" />}
              />
              <Input
                label="Capacity (kg)"
                name="capacity"
                value={vehicleInfo.capacity}
                onChange={handleChange}
                disabled={!isEditing}
                icon={<MapPin className="w-5 h-5" />}
              />

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Badge variant="success" className="gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Verified Driver
                </Badge>
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>
              )}
            </div>
          </Card>

          {/* Verification Status */}
          <Card>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Verification</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-slate-900 dark:text-slate-50">ID Verification</span>
                <Badge variant="success">✓ Verified</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-slate-900 dark:text-slate-50">Background Check</span>
                <Badge variant="success">✓ Verified</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="text-slate-900 dark:text-slate-50">Vehicle Documentation</span>
                <Badge variant="success">✓ Verified</Badge>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default DriverProfile;
