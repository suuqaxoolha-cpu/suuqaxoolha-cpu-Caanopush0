import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import StoreLayout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';

// Store Pages
import StoreFront from './pages/Home';
import CartPage from './pages/Cart';

// Dashboard Pages
import DashboardOverview from './pages/DashboardOverview';
import AffiliateDashboard from './pages/AffiliateDashboard';

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Routes>
          {/* Storefront Routes */}
          <Route path="/" element={<StoreLayout />}>
            <Route index element={<StoreFront />} />
            <Route path="cart" element={<CartPage />} />
          </Route>

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="affiliate" element={<AffiliateDashboard />} />
            {/* Simple placeholders for other routes */}
            <Route path="orders" element={<div className="p-6">Order History Coming Soon</div>} />
            <Route path="settings" element={<div className="p-6">Settings Coming Soon</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}
