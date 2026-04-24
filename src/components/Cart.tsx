import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Cart() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-md flex">
        <div className="flex h-full w-full flex-col bg-white dark:bg-gray-900 shadow-xl transition-transform animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Shopping Cart</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">Close panel</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                  <ShoppingBag className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your cart is empty</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Looks like you haven't added anything yet.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500"
                >
                  Start shopping &rarr;
                </button>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-800">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white">
                          <h3>{product.name}</h3>
                          <p className="ml-4">${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(product.id, product.quantity - 1)}
                            className="p-1 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-colors text-gray-600 dark:text-gray-400"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-semibold text-gray-900 dark:text-white min-w-[1.5rem] text-center">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, product.quantity + 1)}
                            className="p-1 hover:bg-white dark:hover:bg-gray-700 rounded-md transition-colors text-gray-600 dark:text-gray-400"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            className="flex items-center gap-1 font-medium text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-6">
              <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white mb-4">
                <p>Subtotal</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <button
                  className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-base font-bold text-white shadow-md hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)] dark:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
