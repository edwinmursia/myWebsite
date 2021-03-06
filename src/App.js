import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import MoreAboutPage from './pages/moreAbout'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/moreAbout" component={MoreAboutPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
