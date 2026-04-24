import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LayoutDashboard, Store, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Navbar() {
  const { cart, searchQuery, setSearchQuery } = useShop();
  const navigate = useNavigate();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    navigate('/'); // go to home to see search results
  };

  return (
    <nav className="bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className="bg-white p-1.5 rounded-lg">
              <Store className="h-6 w-6 text-black" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white hidden sm:block">ModernShop</span>
          </Link>
          
          <div className="flex-1 max-w-xl px-4 md:px-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search iPhones, Laptops, MacBooks..."
                className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-full leading-5 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-300 focus:ring-2 focus:ring-white/50 focus:border-white/50 focus:bg-black/80 sm:text-sm transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
            <Link to="/dashboard" className="text-gray-300 hover:text-white font-medium transition-colors flex items-center space-x-1 p-2 rounded-lg hover:bg-white/10">
              <LayoutDashboard className="h-5 w-5" />
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <Link to="/cart" className="relative p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/4 -translate-y-1/4 bg-white rounded-full border-2 border-black">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
