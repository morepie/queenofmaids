import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BookingProvider } from "@/context/BookingContext";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Treatments from "@/pages/Treatments";
import Memberships from "@/pages/Memberships";
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
      <Route path="/memberships" component={Memberships} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BookingProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
          <Toaster />
        </BookingProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
