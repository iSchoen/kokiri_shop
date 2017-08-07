import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/products/Products';
import About from './components/about/About';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" exposed component={Home} />
            <Route path="/products" exposed component={Products} />
            <Route path="/about" exposed component={About} />
            <Route path="/contact" exposed component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
