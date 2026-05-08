import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth } from '../context/AuthContext';

function UserProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    phoneNumber: user?.phoneNumber || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation isDashboard />
      <Sidebar />

      <main className="md:ml-64 pt-16">
        <div className="container-max py-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-8">Profile</h1>

          <Card>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-1">Account Information</h2>
                <p className="text-slate-600 dark:text-slate-400">Manage your account details</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit'}
              </Button>
            </div>

            <div className="space-y-4">
              <Input
                label="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                disabled={!isEditing}
                icon={<User className="w-5 h-5" />}
              />
              <Input
                label="Email"
                value={user?.email || ''}
                disabled
                icon={<Mail className="w-5 h-5" />}
              />
              <Input
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                disabled={!isEditing}
                icon={<Phone className="w-5 h-5" />}
              />

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  <strong>Account Type:</strong> {user?.role === 'customer' ? 'Customer' : 'Driver'}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Member Since:</strong> 2026
                </p>
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;
