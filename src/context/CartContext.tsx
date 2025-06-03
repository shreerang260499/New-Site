
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface DigitalProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  fileFormats: string[];
  fileSize: string;
  license: 'Personal' | 'Commercial' | 'Extended';
  previewImages: string[];
  downloadUrl?: string;
}

export interface CartItem extends DigitalProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: DigitalProduct }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Digital products don't need quantity increase, just notify it's already in cart
        return state;
      } else {
        const newItems = [...state.items, { ...action.payload, quantity: 1 }];
        return {
          ...state,
          items: newItems,
          total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
      }
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        total: filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    case 'UPDATE_QUANTITY':
      // For digital products, quantity is always 1
      return state;
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    isOpen: false
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
