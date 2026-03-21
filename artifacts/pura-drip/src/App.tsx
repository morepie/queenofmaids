import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { BookingProvider } from "@/context/BookingContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Treatments from "@/pages/Treatments";
import TreatmentDetail from "@/pages/TreatmentDetail";
import Memberships from "@/pages/Memberships";
import Cart from "@/pages/Cart";
import NotFound from "@/pages/not-found";

// Use a long stale time since our data is completely static/hardcoded for this site
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/treatments" component={Treatments} />
      <Route path="/treatments/:id" component={TreatmentDetail} />
      <Route path="/memberships" component={Memberships} />
      <Route path="/cart" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <BookingProvider>
              <Layout>
                <Router />
              </Layout>
            </BookingProvider>
          </WouterRouter>
          <Toaster />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
