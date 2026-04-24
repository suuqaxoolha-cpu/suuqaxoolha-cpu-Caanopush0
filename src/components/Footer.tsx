import { Store } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-white mb-4 md:mb-0">
            <Store className="h-6 w-6" />
            <span className="font-bold tracking-tight text-white">ModernShop</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ModernShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
