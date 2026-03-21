import { createContext, useContext, useCallback, ReactNode } from 'react';
import { useLocation } from 'wouter';

type BookingContextType = {
  openBookingModal: () => void;
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
  const [, setLocation] = useLocation();
  const openBookingModal = useCallback(() => setLocation('/cart'), [setLocation]);

  return (
    <BookingContext.Provider value={{ openBookingModal }}>
      {children}
    </BookingContext.Provider>
  );
};
