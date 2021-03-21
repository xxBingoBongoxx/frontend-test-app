import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FAQ from './pages/faq/FAQ';
import Profile from './pages/profile/Profile';
import Feed from './pages/feed/Feed';

type Props = unknown;

const RouterComponent: React.FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route exact path="*">
          404 not found
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
