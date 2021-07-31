import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import { useState } from 'react';

const Routes = () => {
  const [language, setLanguage] = useState('EN');

  return (
    <>
      <BrowserRouter>
        <Header language={language} setLanguage={setLanguage} />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/project/:guid" component={ProjectDetails} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Routes;
