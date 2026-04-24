import { ShoppingCart } from 'lucide-react';
import { useShop, Product } from '../context/ShopContext';

export default function StoreFront() {
  const { products, addToCart, searchQuery } = useShop();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl drop-shadow-md">
          Welcome to ModernShop
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto drop-shadow-sm">
          Discover our latest collection of premium products, including the newest iPhones and Laptops.
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-2xl text-gray-400">No products found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product: Product) => (
            <div key={product.id} className="bg-black/60 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all flex flex-col">
              <div className="aspect-w-1 aspect-h-1 bg-gray-900 shrink-0 border-b border-white/10">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-semibold tracking-wide uppercase text-blue-400 mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center p-2 bg-blue-600/80 text-white rounded-full hover:bg-blue-500 transition-colors border border-white/10 backdrop-blur-sm"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
