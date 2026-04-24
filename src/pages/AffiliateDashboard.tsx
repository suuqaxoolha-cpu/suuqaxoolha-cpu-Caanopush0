import { Copy, CheckCircle2, Share2, Users, MousePointerClick, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { useShop } from '../context/ShopContext';

export default function AffiliateDashboard() {
  const { affiliateData } = useShop();
  const [copied, setCopied] = useState(false);
  
  const referralLink = `https://modernshop.com/ref/${affiliateData.code}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Affiliate Portal</h1>
        <p className="mt-1 text-sm text-gray-400">
          Manage your referral links and track your earnings.
        </p>
      </div>

      {/* Referral Link Card */}
      <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/10">
        <h2 className="text-lg font-medium text-white mb-4">Your Referral Link</h2>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-black/50 p-4 rounded-lg border border-white/10 font-mono text-sm text-gray-300 break-all">
            {referralLink}
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 px-4 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shrink-0"
          >
            {copied ? <CheckCircle2 className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Link'}</span>
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="flex items-center space-x-2 px-4 py-2 border border-white/20 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share on Twitter</span>
          </button>
        </div>
      </div>

      {/* Analytics */}
      <h2 className="text-lg font-medium text-white mt-8 mb-4">Performance Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/10 flex items-center space-x-4">
          <div className="p-3 bg-purple-900/30 text-purple-400 rounded-lg">
            <MousePointerClick className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Total Clicks</p>
            <p className="text-2xl font-bold text-white">{affiliateData.clicks}</p>
          </div>
        </div>
        
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/10 flex items-center space-x-4">
          <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Signups / Purchases</p>
            <p className="text-2xl font-bold text-white">{affiliateData.referrals}</p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-sm border border-white/10 flex items-center space-x-4">
          <div className="p-3 bg-green-900/30 text-green-400 rounded-lg">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Total Earnings</p>
            <p className="text-2xl font-bold text-white">${affiliateData.earnings.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Recent Referrals Table */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-sm border border-white/10 overflow-hidden mt-8">
        <div className="px-6 py-5 border-b border-white/10 bg-white/5 text-sm font-medium text-gray-400">
          Recent Conversions
        </div>
        <ul className="divide-y divide-white/10">
          {[1, 2, 3].map((i) => (
            <li key={i} className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">User {i} just made a purchase!</p>
                <p className="text-xs text-gray-400 mt-1">2 days ago</p>
              </div>
              <div className="text-sm font-bold text-green-400 border border-green-900/50 bg-green-900/20 px-2 py-1 rounded-full">
                +$15.00
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
