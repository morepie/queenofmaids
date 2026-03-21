import { Droplet } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { type Treatment } from '@/data/content';

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const { openBookingModal } = useBooking();

  return (
    <div className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl shadow-black/5 border border-border hover:border-primary/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-6 -right-6 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700 pointer-events-none">
        <Droplet className="w-40 h-40 text-primary" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 bg-secondary/30 text-primary rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
            <Droplet className="w-7 h-7" />
          </div>
          {treatment.popular && (
            <span className="px-3 py-1.5 bg-accent/80 text-foreground text-xs font-bold tracking-widest uppercase rounded-full shadow-sm">
              Popular
            </span>
          )}
        </div>

        <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {treatment.name}
        </h3>
        <p className="text-muted-foreground text-base mb-8 leading-relaxed">
          {treatment.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {treatment.uses.map((use: string) => (
              <span key={use} className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-medium rounded-lg border border-border/50">
                {use}
              </span>
            ))}
          </div>

          <button
            onClick={openBookingModal}
            className="w-full py-4 px-6 rounded-2xl border-2 border-primary text-primary font-bold tracking-wide hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Book Treatment
          </button>
        </div>
      </div>
    </div>
  );
}

export function SkeletonTreatmentCard() {
  return (
    <div className="bg-card rounded-3xl p-8 border border-border animate-pulse h-full flex flex-col">
       <div className="w-14 h-14 bg-muted rounded-2xl mb-6"></div>
       <div className="h-8 w-3/4 bg-muted rounded-lg mb-4"></div>
       <div className="h-4 w-full bg-muted rounded mb-2"></div>
       <div className="h-4 w-5/6 bg-muted rounded mb-8"></div>
       <div className="mt-auto">
         <div className="flex flex-wrap gap-2 mb-8">
           <div className="h-8 w-20 bg-muted rounded-lg"></div>
           <div className="h-8 w-24 bg-muted rounded-lg"></div>
           <div className="h-8 w-28 bg-muted rounded-lg"></div>
         </div>
         <div className="h-14 w-full bg-muted rounded-2xl"></div>
       </div>
    </div>
  )
}
