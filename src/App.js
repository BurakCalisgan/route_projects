import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const Home = () => {
  return (<h3>Home Page</h3>)
}
const About = () => {
  return (<h3>About Page</h3>)
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header title ="Header"/>
        
        <Switch>

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route component={NotFound}/>

        </Switch>



        <Footer title ="Footer"/>
      </div>
      </Router>
    );
  }
}

export default App;
