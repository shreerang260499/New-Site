
import React from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const { state, dispatch } = useCart();

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Shree Rang Designs</h1>
              <span className="ml-2 text-sm text-gray-500">Digital CNC & Print Files</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search designs, CNC files..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="h-5 w-5" />
                <span>My Downloads</span>
              </button>
              
              <button 
                onClick={() => dispatch({ type: 'TOGGLE_CART' })}
                className="relative flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden md:block">Cart</span>
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.length}
                  </span>
                )}
              </button>

              <button className="md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
};

export default Header;
