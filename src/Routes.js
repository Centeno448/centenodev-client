import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/project/:guid" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
