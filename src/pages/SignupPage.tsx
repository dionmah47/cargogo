import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Mail, Lock, User, Truck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { useAuth, UserRole } from '../context/AuthContext';

function SignupPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [role, setRole] = useState<UserRole>((searchParams.get('role') as UserRole) || 'customer');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      await signup(formData.email, formData.password, role, formData.fullName);
      navigate(`/${role}/dashboard`);
    } catch (error) {
      setErrors({ submit: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      <div className="container-max py-12 md:py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">Create Account</h1>
            <p className="text-slate-600 dark:text-slate-400">Join CargoGo today</p>
          </div>

          <Card>
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => setRole('customer')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  role === 'customer'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Customer</span>
                </div>
              </button>
              <button
                onClick={() => setRole('driver')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  role === 'driver'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Truck className="w-5 h-5" />
                  <span className="font-medium">Driver</span>
                </div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={errors.fullName}
                placeholder="John Doe"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                icon={<Mail className="w-5 h-5" />}
                placeholder="you@example.com"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                icon={<Lock className="w-5 h-5" />}
                placeholder="••••••••"
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                icon={<Lock className="w-5 h-5" />}
                placeholder="••••••••"
              />

              {errors.submit && (
                <div className="p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">
                  {errors.submit}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full" isLoading={loading}>
                Create Account
              </Button>
            </form>

            <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account? <a href="/login" className="text-primary-600 dark:text-primary-400 hover:underline">Sign in</a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
