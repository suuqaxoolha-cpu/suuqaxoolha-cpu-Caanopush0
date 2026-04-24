import { Outlet, Link, useLocation } from 'react-router-dom';
import { Store, BarChart3, Users, Settings, Package, LogOut } from 'lucide-react';

export default function DashboardLayout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Overview', path: '/dashboard', icon: BarChart3 },
    { name: 'Affiliate', path: '/dashboard/affiliate', icon: Users },
    { name: 'Orders', path: '/dashboard/orders', icon: Package },
    { name: 'Settings', path: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-transparent">
      {/* Sidebar */}
      <div className="w-64 bg-black/60 backdrop-blur-md border-r border-white/10 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-white/10">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Store className="h-6 w-6" />
            <span className="font-bold tracking-tight text-white">ModernShop</span>
          </Link>
        </div>
        
        <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'bg-blue-600 border border-blue-500 text-white' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10">
          <Link
            to="/"
            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-red-400 hover:bg-red-500/20 transition-colors"
          >
            <LogOut className="h-5 w-5 text-red-400" />
            <span>Storefront</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="h-16 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 md:hidden">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Store className="h-6 w-6" />
            <span className="font-bold tracking-tight text-white">Dashboard</span>
          </Link>
        </header>
        
        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-transparent p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
