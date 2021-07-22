import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:guid" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
