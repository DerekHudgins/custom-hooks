import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../../containers/Main';
import Details from '../details/Details';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/details/:name" component={Details} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
