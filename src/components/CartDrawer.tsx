
import React from 'react';
import { X, Download, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { state, dispatch } = useCart();

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const closeCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Your Cart ({state.items.length})</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Download className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Your cart is empty</p>
                <p className="text-sm">Add some digital designs to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.fileFormats.slice(0, 2).map((format) => (
                          <span
                            key={format}
                            className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded"
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        ${item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-red-100 rounded text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Download className="h-4 w-4 mr-2" />
                Checkout & Download
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Instant download after payment • Commercial license included
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
