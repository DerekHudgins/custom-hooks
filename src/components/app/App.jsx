import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../../containers/Main';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/details/:name" component="" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
