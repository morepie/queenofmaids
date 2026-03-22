import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import {
  Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ArrowRight,
  Calendar, Clock, User, CreditCard, CheckCircle, Check
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { treatments, type Treatment } from '@/data/content';

const STEPS = ['Select Treatments', 'Date & Time', 'Your Info', 'Payment', 'Confirm'];

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2 } }
};

export default function Cart() {
  const { items, addItem, updateQuantity, removeItem, totalPrice, totalItems, clearCart, isInCart } = useCart();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', zip: '' });
  const [payment, setPayment] = useState({ cardNumber: '', expiry: '', cvc: '', nameOnCard: '' });
  const [confirmed, setConfirmed] = useState(false);

  const canProceedFromStep = (s: number) => {
    if (s === 0) return items.length > 0;
    if (s === 1) return selectedDate !== '' && selectedTime !== '';
    if (s === 2) return form.firstName && form.lastName && form.email && form.phone && form.address && form.city && form.zip;
    if (s === 3) return payment.cardNumber && payment.expiry && payment.cvc && payment.nameOnCard;
    return true;
  };

  const handleConfirm = () => {
    setConfirmed(true);
    clearCart();
  };

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1);
    return d.toISOString().split('T')[0];
  });

  const formatDate = (iso: string) => {
    const d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-background pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-14 h-14" />
            </div>
            <h1 className="text-4xl font-sans font-bold text-foreground mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              We've received your booking request. Our concierge team will reach out to confirm the details.
            </p>
            <div className="bg-card border border-border rounded-2xl p-6 text-left mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">{formatDate(selectedDate)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Time</p>
                  <p className="font-semibold text-foreground">{selectedTime}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Name</p>
                  <p className="font-semibold text-foreground">{form.firstName} {form.lastName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">{form.email}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setLocation('/')}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/treatments"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Treatments
        </Link>

        <h1 className="text-3xl font-sans font-bold text-foreground mb-8">Book Your Session</h1>

        <div className="flex items-center gap-1 mb-10 overflow-x-auto pb-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => { if (i < step) setStep(i); }}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                  i === step
                    ? 'bg-primary text-primary-foreground'
                    : i < step
                    ? 'bg-green-100 text-green-700 cursor-pointer hover:bg-green-200'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {i < step ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                )}
                <span className="hidden sm:inline">{label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div className={`w-6 h-0.5 ${i < step ? 'bg-green-300' : 'bg-border'}`} />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
              <StepTreatments
                items={items}
                treatments={treatments}
                addItem={addItem}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
                isInCart={isInCart}
                totalPrice={totalPrice}
              />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                Choose a Date & Time
              </h2>
              <div className="mb-8">
                <label className="text-sm font-semibold text-foreground mb-3 block">Select Date</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
                  {dates.map(d => (
                    <button
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all ${
                        selectedDate === d
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-card border border-border hover:border-primary/50 text-foreground'
                      }`}
                    >
                      {formatDate(d)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">Select Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {timeSlots.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        selectedTime === t
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-card border border-border hover:border-primary/50 text-foreground'
                      }`}
                    >
                      <Clock className="w-4 h-4" />
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-primary" />
                Your Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="First Name" value={form.firstName} onChange={v => setForm(f => ({ ...f, firstName: v }))} placeholder="Jane" />
                <InputField label="Last Name" value={form.lastName} onChange={v => setForm(f => ({ ...f, lastName: v }))} placeholder="Doe" />
                <InputField label="Email" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="jane@example.com" />
                <InputField label="Phone" type="tel" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} placeholder="(555) 123-4567" />
                <div className="sm:col-span-2">
                  <InputField label="Street Address" value={form.address} onChange={v => setForm(f => ({ ...f, address: v }))} placeholder="123 Main St, Apt 4B" />
                </div>
                <InputField label="City" value={form.city} onChange={v => setForm(f => ({ ...f, city: v }))} placeholder="Las Vegas" />
                <InputField label="ZIP Code" value={form.zip} onChange={v => setForm(f => ({ ...f, zip: v }))} placeholder="89101" />
              </div>
              <p className="text-xs text-muted-foreground mt-4">Our nurse will come to this address for your treatment.</p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                Payment Details
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <InputField label="Name on Card" value={payment.nameOnCard} onChange={v => setPayment(p => ({ ...p, nameOnCard: v }))} placeholder="Jane Doe" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label="Card Number" value={payment.cardNumber} onChange={v => setPayment(p => ({ ...p, cardNumber: v }))} placeholder="4242 4242 4242 4242" />
                  </div>
                  <InputField label="Expiry" value={payment.expiry} onChange={v => setPayment(p => ({ ...p, expiry: v }))} placeholder="MM/YY" />
                  <InputField label="CVC" value={payment.cvc} onChange={v => setPayment(p => ({ ...p, cvc: v }))} placeholder="123" />
                </div>
                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Your payment information is secure and encrypted.
                </p>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial="hidden" animate="visible" exit="exit" variants={fadeIn}>
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Review Your Booking
              </h2>
              <div className="space-y-4">
                <SummarySection title="Treatments">
                  {items.map(item => (
                    <div key={item.treatment.id} className="flex justify-between text-sm py-1.5">
                      <span className="text-foreground">{item.treatment.name} × {item.quantity}</span>
                      <span className="font-semibold">${item.treatment.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-base pt-3 border-t border-border mt-2">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                </SummarySection>

                <SummarySection title="Appointment">
                  <p className="text-sm text-foreground">{formatDate(selectedDate)} at {selectedTime}</p>
                </SummarySection>

                <SummarySection title="Location">
                  <p className="text-sm text-foreground">{form.address}, {form.city} {form.zip}</p>
                </SummarySection>

                <SummarySection title="Contact">
                  <p className="text-sm text-foreground">{form.firstName} {form.lastName}</p>
                  <p className="text-sm text-muted-foreground">{form.email} · {form.phone}</p>
                </SummarySection>

                <SummarySection title="Payment">
                  <p className="text-sm text-foreground">Card ending in {payment.cardNumber.slice(-4) || '****'}</p>
                </SummarySection>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
              step === 0 ? 'invisible' : 'text-foreground hover:bg-muted'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep(s => s + 1)}
              disabled={!canProceedFromStep(step)}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <CheckCircle className="w-5 h-5" />
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepTreatments({
  items, treatments: allTreatments, addItem, removeItem, updateQuantity, isInCart, totalPrice
}: {
  items: { treatment: Treatment; quantity: number }[];
  treatments: Treatment[];
  addItem: (t: Treatment) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  isInCart: (id: string) => boolean;
  totalPrice: number;
}) {
  const [showBrowser, setShowBrowser] = useState(items.length === 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-3">
          <ShoppingBag className="w-6 h-6 text-primary" />
          Select Your Treatments
        </h2>
        {!showBrowser && items.length > 0 && (
          <button
            onClick={() => setShowBrowser(true)}
            className="text-sm text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add Treatments
          </button>
        )}
      </div>

      {items.length > 0 && (
        <div className="space-y-3 mb-6">
          {items.map(item => (
            <div key={item.treatment.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
              <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/pura-iv-placeholder.png`}
                  alt={item.treatment.name}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">{item.treatment.name}</p>
                <p className="text-primary font-bold text-sm">${item.treatment.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.treatment.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                  aria-label={`Decrease ${item.treatment.name}`}
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm font-bold w-5 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.treatment.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                  aria-label={`Increase ${item.treatment.name}`}
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.treatment.id)}
                className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors"
                aria-label={`Remove ${item.treatment.name}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-muted-foreground">Estimated Total</span>
            <span className="text-xl font-bold text-foreground">${totalPrice}</span>
          </div>
        </div>
      )}

      {(showBrowser || items.length === 0) && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">All Treatments</h3>
            {items.length > 0 && (
              <button onClick={() => setShowBrowser(false)} className="text-xs text-muted-foreground hover:text-foreground">
                Hide
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-80 overflow-y-auto pr-1">
            {allTreatments.map(t => {
              const inCart = isInCart(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => { if (!inCart) addItem(t); }}
                  disabled={inCart}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left text-sm transition-all ${
                    inCart
                      ? 'bg-green-50 border border-green-200 cursor-default'
                      : 'bg-card border border-border hover:border-primary/50 cursor-pointer'
                  }`}
                >
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                    <img src={`${import.meta.env.BASE_URL}images/pura-iv-placeholder.png`} alt="" className="h-5 w-auto" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{t.name}</p>
                    <p className="text-muted-foreground text-xs">${t.price}</p>
                  </div>
                  {inCart ? (
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function InputField({ label, value, onChange, placeholder, type = 'text' }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-foreground mb-1.5 block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
      />
    </div>
  );
}

function SummarySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">{title}</h3>
      {children}
    </div>
  );
}
