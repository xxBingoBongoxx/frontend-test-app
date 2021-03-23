import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FAQ from './pages/faq/FAQ';
import Profile from './pages/profile/Profile';
import Feed from './pages/feed/Feed';
import { feedUrl, faqUrl, userUrl } from './constants/urls';

type Props = unknown;

const RouterComponent: React.FC<Props> = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={faqUrl}>
          <FAQ />
        </Route>
        <Route exact path={userUrl}>
          <Profile />
        </Route>
        <Route exact path={feedUrl}>
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
