import { Trash2, CreditCard } from 'lucide-react';
import { useShop, CartItem } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <ShoppingCartIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
          Your cart is empty
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl mb-8 drop-shadow-md">
        Shopping Cart
      </h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-8 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <ul className="divide-y divide-white/10">
            {cart.map((item: CartItem) => (
              <li key={item.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32 border border-white/10"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-white">
                          {item.name}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-400">{item.category}</p>
                      <p className="mt-1 text-sm font-medium text-white">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label htmlFor={`quantity-${item.id}`} className="sr-only">
                        Quantity, {item.name}
                      </label>
                      <select
                        id={`quantity-${item.id}`}
                        name={`quantity-${item.id}`}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="max-w-full rounded-md border border-white/20 py-1.5 text-base leading-5 font-medium text-white bg-black/50 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        {[...Array(10).keys()].map((n) => (
                          <option key={n + 1} value={n + 1}>
                            {n + 1}
                          </option>
                        ))}
                      </select>

                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="-m-2 p-2 inline-flex text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <span className="sr-only">Remove</span>
                          <Trash2 className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 bg-black/60 backdrop-blur-md rounded-2xl px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-4 border border-white/10">
          <h2 className="text-lg font-medium text-white">Order summary</h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-300">Subtotal</dt>
              <dd className="text-sm font-medium text-white">${cartTotal.toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <dt className="flex items-center text-sm text-gray-300">
                <span>Shipping estimate</span>
              </dt>
              <dd className="text-sm font-medium text-white">$5.00</dd>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <dt className="flex items-center text-sm text-gray-300">
                <span>Tax estimate</span>
              </dt>
              <dd className="text-sm font-medium text-white">${(cartTotal * 0.08).toFixed(2)}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <dt className="text-base font-medium text-white">Order total</dt>
              <dd className="text-base font-medium text-white">${(cartTotal + 5 + cartTotal * 0.08).toFixed(2)}</dd>
            </div>
          </dl>

          <div className="mt-6">
            {!isCheckingOut ? (
              <button
                type="button"
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 transition-colors"
              >
                Checkout
              </button>
            ) : (
              <div className="bg-black/50 backdrop-blur-md p-4 border border-white/20 rounded-xl shadow-sm space-y-4">
                <h3 className="text-sm font-medium text-white flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-gray-400" />
                  <span>Payment Details</span>
                </h3>
                <div>
                  <label htmlFor="card-number" className="block text-xs font-medium text-gray-300">Card Number</label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="0000 0000 0000 0000"
                    className="mt-1 block w-full border border-white/20 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-black/50 text-white placeholder-gray-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-xs font-medium text-gray-300">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="mt-1 block w-full border border-white/20 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-black/50 text-white placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-xs font-medium text-gray-300">CVC</label>
                    <input
                      type="text"
                      id="cvc"
                      placeholder="123"
                      className="mt-1 block w-full border border-white/20 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-black/50 text-white placeholder-gray-500"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Payment Processed!')}
                  className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-green-500 transition-colors mt-4"
                >
                  Pay ${(cartTotal + 5 + cartTotal * 0.08).toFixed(2)}
                </button>
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-full bg-white/10 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}
