import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home, Error} from '../pages/';
import {Header, Footer} from '../components/';

class App extends Component {
  componentDidMount() {
    const location = window.location.pathname;

    if(!localStorage.getItem("langauge") && location.length <= 0) {
      localStorage.setItem("language", "en_US");
    } else {
      if(["en_US", "de_DE"].indexOf(location) > -1) {
        localStorage.setItem("language", location);
        window.location.href = location;
      }
    }
  }

  render() {
    return (
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
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
