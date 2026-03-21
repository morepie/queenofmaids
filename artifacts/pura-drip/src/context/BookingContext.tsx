import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

type BookingContextType = {
  isOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  return (
    <BookingContext.Provider value={{ isOpen, openBookingModal: () => setIsOpen(true), closeBookingModal: () => setIsOpen(false) }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-border overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mt-2 flex-shrink-0">
                <div className="w-20 h-20 bg-secondary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-secondary/10">
                  <Calendar className="w-10 h-10" />
                </div>
                
                <h2 className="text-3xl font-sans font-bold text-foreground mb-2">
                  Book Your Session
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Call our concierge team to complete your booking.
                </p>
              </div>

              {items.length > 0 && (
                <div className="flex-1 overflow-y-auto mb-6 -mx-2 px-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-primary" />
                      Selected Treatments
                    </h3>
                    <button
                      onClick={clearCart}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="space-y-3">
                    {items.map(item => (
                      <div key={item.treatment.id} className="bg-background border border-border rounded-xl p-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground text-sm truncate">{item.treatment.name}</p>
                            <p className="text-primary font-bold text-sm mt-0.5">${item.treatment.price} each</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.treatment.id)}
                            className="p-1 text-muted-foreground hover:text-red-500 transition-colors shrink-0"
                            aria-label={`Remove ${item.treatment.name} from cart`}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.treatment.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                            aria-label={`Decrease quantity of ${item.treatment.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.treatment.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                            aria-label={`Increase quantity of ${item.treatment.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <span className="ml-auto text-sm font-bold text-foreground">
                            ${item.treatment.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                    <span className="text-sm font-medium text-muted-foreground">Total</span>
                    <span className="text-xl font-bold text-foreground">${totalPrice}</span>
                  </div>
                </div>
              )}

              <div className="flex-shrink-0">
                <a 
                  href="tel:8554837471" 
                  className="inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  (855) 483-7471
                </a>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  {items.length > 0 
                    ? "Mention your selected treatments when you call" 
                    : "Our team will help you choose the perfect treatment"}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
};
