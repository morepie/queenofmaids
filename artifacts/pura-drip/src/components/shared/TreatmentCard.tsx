import { Link } from 'wouter';
import { type Treatment } from '@/data/content';

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link
      href={`/treatments/${treatment.id}`}
      className="group bg-card rounded-3xl shadow-sm hover:shadow-xl shadow-black/5 border border-border hover:border-primary/30 transition-all duration-500 flex flex-col h-full relative overflow-hidden cursor-pointer"
    >
      <div className="relative bg-secondary/20 flex items-center justify-center py-6 px-4">
        {treatment.popular && (
          <span className="absolute top-4 right-4 px-3 py-1.5 bg-white text-[#4BA8A8] border border-[#4BA8A8] text-xs font-bold tracking-widest uppercase rounded-full z-10">
            Popular
          </span>
        )}
        <img 
          src={`${import.meta.env.BASE_URL}images/pura-iv-placeholder.png`}
          alt={treatment.name}
          className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-sans font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {treatment.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
          {treatment.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">${treatment.price}</span>
            <span className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
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
