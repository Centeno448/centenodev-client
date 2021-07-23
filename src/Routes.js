import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/project/:guid" component={ProjectDetails} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Routes;
