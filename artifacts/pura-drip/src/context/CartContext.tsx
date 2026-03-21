import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { type Treatment } from '@/data/content';

type CartItem = {
  treatment: Treatment;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (treatment: Treatment) => void;
  removeItem: (treatmentId: string) => void;
  updateQuantity: (treatmentId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isInCart: (treatmentId: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((treatment: Treatment) => {
    setItems(prev => {
      const existing = prev.find(item => item.treatment.id === treatment.id);
      if (existing) {
        return prev.map(item =>
          item.treatment.id === treatment.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { treatment, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((treatmentId: string) => {
    setItems(prev => prev.filter(item => item.treatment.id !== treatmentId));
  }, []);

  const updateQuantity = useCallback((treatmentId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => item.treatment.id !== treatmentId));
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.treatment.id === treatmentId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.treatment.price * item.quantity, 0);
  const isInCart = useCallback((treatmentId: string) => items.some(item => item.treatment.id === treatmentId), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
