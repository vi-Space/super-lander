import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Impressum, Error } from '../pages/';
import { Header, Footer } from '../components/';

class App extends Component {


  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/impressum" component={Impressum} />
            <Route path="/faq" component={Impressum} />
            <Route path="/" component={Home} />
            <Route component={() => <Error title="404" description="This page doesn't exist!" />} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
