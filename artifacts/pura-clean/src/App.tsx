import { Route, Switch } from 'wouter';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceLanding from '@/pages/ServiceLanding';
import Plans from '@/pages/Plans';
import ServiceAreas from '@/pages/ServiceAreas';
import CityLanding from '@/pages/CityLanding';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={base + '/services/:service'} component={ServiceLanding} />
        <Route path={base + '/services'} component={Services} />
        <Route path={base + '/plans'} component={Plans} />
        <Route path={base + '/service-areas'} component={ServiceAreas} />
        <Route path={base + '/house-cleaning/:city'} component={CityLanding} />
        <Route path={base + '/'} component={Home} />
        <Route component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
