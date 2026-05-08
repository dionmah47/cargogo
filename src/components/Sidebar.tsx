import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { clsx } from 'clsx';

function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const baseNav = [
    {
      label: 'Dashboard',
      href: `/${user?.role}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      label: 'Profile',
      href: `/${user?.role}/profile`,
      icon: User,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside className="w-64 fixed left-0 top-16 bottom-0 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col overflow-y-auto">
      <div className="p-4 space-y-2">
        {baseNav.map(({ label, href, icon: Icon }) => (
          <Link key={href} to={href}>
            <div
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                isActive(href)
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800',
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-auto p-4 border-t border-slate-200 dark:border-slate-800">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
