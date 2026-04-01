import { Route, Switch, Redirect } from 'wouter';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceLanding from '@/pages/ServiceLanding';
import Memberships from '@/pages/Memberships';
import ServiceAreas from '@/pages/ServiceAreas';
import CityLanding from '@/pages/CityLanding';
import CityServiceLanding from '@/pages/CityServiceLanding';
import Articles from '@/pages/Articles';
import ArticleDetail from '@/pages/ArticleDetail';
import HelpCenter from '@/pages/HelpCenter';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={base + '/services/:service'} component={ServiceLanding} />
        <Route path={base + '/services'} component={Services} />
        <Route path={base + '/memberships'} component={Memberships} />
        <Route path={base + '/plans'}>{() => <Redirect to={base + '/memberships'} />}</Route>
        <Route path={base + '/service-areas'} component={ServiceAreas} />
        <Route path={base + '/house-cleaning/:city/:service'} component={CityServiceLanding} />
        <Route path={base + '/house-cleaning/:city'} component={CityLanding} />
        <Route path={base + '/articles/:slug'} component={ArticleDetail} />
        <Route path={base + '/articles'} component={Articles} />
        <Route path={base + '/help'} component={HelpCenter} />
        <Route path={base + '/terms'} component={Terms} />
        <Route path={base + '/privacy'} component={Privacy} />
        <Route path={base + '/'} component={Home} />
        <Route component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
