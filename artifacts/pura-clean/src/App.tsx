import { Route, Switch } from 'wouter';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={base + '/services'} component={Services} />
        <Route path={base + '/'} component={Home} />
        <Route component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
