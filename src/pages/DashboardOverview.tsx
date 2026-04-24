import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function DashboardOverview() {
  const { affiliateData } = useShop();

  const stats = [
    { name: 'Total Revenue', value: '$45,231.89', icon: DollarSign, change: '+20.1%', changeType: 'positive' },
    { name: 'Sales', value: '+2350', icon: ShoppingBag, change: '+15.2%', changeType: 'positive' },
    { name: 'Active Users', value: '+12,234', icon: Users, change: '+5.4%', changeType: 'positive' },
    { name: 'Affiliate Earnings', value: `$${affiliateData.earnings.toFixed(2)}`, icon: TrendingUp, change: '+12.5%', changeType: 'positive' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-400">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="relative bg-black/40 backdrop-blur-md pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow-sm rounded-xl overflow-hidden border border-white/10"
            >
              <dt>
                <div className="absolute bg-white/10 rounded-lg p-3">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-300 truncate">{item.name}</p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    item.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {item.change}
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {/* Recent Orders placeholder */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm border border-white/10 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
                    #{1000 + i}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">User_{i}</p>
                    <p className="text-xs text-gray-400">2 items • $129.00</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-800">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Quick Stats */}
        <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm border border-white/10 p-6">
          <h2 className="text-lg font-medium text-white mb-4">Affiliate Quick Stats</h2>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-24 w-24 rounded-full bg-white text-black flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold">{affiliateData.referrals}</span>
            </div>
            <h3 className="text-xl font-medium text-white">Total Referrals</h3>
            <p className="text-sm text-gray-400 mt-2 text-center max-w-xs">
              Keep sharing your referral link to earn more commissions on every sale!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
