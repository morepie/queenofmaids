import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function Cart() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems, clearCart } = useCart();
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeIn} className="mb-8">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-sans font-bold text-foreground">
                Your Cart
              </h1>
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-sm text-muted-foreground hover:text-red-500 transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>
            {items.length > 0 && (
              <p className="text-muted-foreground mt-1">
                {totalItems} {totalItems === 1 ? 'treatment' : 'treatments'} selected
              </p>
            )}
          </motion.div>

          {items.length === 0 ? (
            <motion.div variants={fadeIn} className="text-center py-20">
              <div className="w-24 h-24 bg-secondary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Browse our premium IV treatments and add the ones that fit your needs.
              </p>
              <button
                onClick={() => setLocation('/treatments')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                Explore Treatments
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map(item => (
                  <motion.div
                    key={item.treatment.id}
                    variants={fadeIn}
                    className="bg-card border border-border rounded-2xl p-5 flex gap-5"
                  >
                    <div
                      className="w-24 h-24 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0 cursor-pointer"
                      onClick={() => setLocation(`/treatments/${item.treatment.id}`)}
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}images/pura-iv-placeholder.png`}
                        alt={item.treatment.name}
                        className="h-16 w-auto object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3
                            className="font-bold text-foreground text-lg cursor-pointer hover:text-primary transition-colors"
                            onClick={() => setLocation(`/treatments/${item.treatment.id}`)}
                          >
                            {item.treatment.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                            {item.treatment.tagline}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.treatment.id)}
                          className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                          aria-label={`Remove ${item.treatment.name} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.treatment.id, item.quantity - 1)}
                            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
                            aria-label={`Decrease quantity of ${item.treatment.name}`}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-base font-bold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.treatment.id, item.quantity + 1)}
                            className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-colors"
                            aria-label={`Increase quantity of ${item.treatment.name}`}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xl font-bold text-foreground">
                          ${item.treatment.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="lg:col-span-1">
                <div className="bg-card border border-border rounded-2xl p-6 sticky top-28">
                  <h3 className="text-lg font-bold text-foreground mb-5">Order Summary</h3>

                  <div className="space-y-3 mb-5">
                    {items.map(item => (
                      <div key={item.treatment.id} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground truncate mr-3">
                          {item.treatment.name} × {item.quantity}
                        </span>
                        <span className="font-semibold text-foreground shrink-0">
                          ${item.treatment.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium text-foreground">Total</span>
                      <span className="text-2xl font-bold text-foreground">${totalPrice}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Pricing may vary based on location</p>
                  </div>

                  <a
                    href="tel:8554837471"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Book Now
                  </a>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Call (855) 483-7471 and mention your selected treatments
                  </p>

                  <div className="mt-5 pt-4 border-t border-border">
                    <button
                      onClick={() => setLocation('/treatments')}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Add More Treatments
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
