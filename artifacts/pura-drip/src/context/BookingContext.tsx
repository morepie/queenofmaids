import React, { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone } from 'lucide-react';

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
              className="relative w-full max-w-md bg-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-border overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
              
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mt-2">
                <div className="w-20 h-20 bg-secondary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-secondary/10">
                  <Calendar className="w-10 h-10" />
                </div>
                
                <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
                  Online Booking Coming Soon
                </h2>
                
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  We are currently upgrading our online booking experience to serve you better. To schedule your premium IV therapy, please call our concierge team.
                </p>
                
                <a 
                  href="tel:8554837471" 
                  className="inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  (855) 483-7471
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </BookingContext.Provider>
  );
};
