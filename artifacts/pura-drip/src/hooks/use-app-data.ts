import { useQuery } from "@tanstack/react-query";
import { treatments, memberships, testimonials } from "@/data/content";

// Standardizing to the requested hook pattern even for static data
// This simulates network delay to show off beautiful loading states

export function useTreatments() {
  return useQuery({
    queryKey: ['treatments'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 600));
      return treatments;
    },
    staleTime: Infinity,
  });
}

export function useMemberships() {
  return useQuery({
    queryKey: ['memberships'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 600));
      return memberships;
    },
    staleTime: Infinity,
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 400));
      return testimonials;
    },
    staleTime: Infinity,
  });
}
