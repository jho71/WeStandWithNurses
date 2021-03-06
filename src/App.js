import React from 'react';
import { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz/QuizMain';
import About from './components/About/about';
import Navbar from './components/navbar';
import Contact from './components/Contact/contact';
import Statistics from './components/Statistics/statistics'
import HowToHelp from './components/HowToHelp/howToHelp';
import Effects from './components/Effects/effects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    document.title = 'WeStandwithNurses'
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <HashRouter>
        <Switch>
         
          <Route exact path='/' render={() => (<About />)} />
          <Route exact path='/about' render={() => (<About />)} />
          <Route exact path='/quiz' render={() => (<Quiz />)} />
          <Route exact path='/contact' render={() => (<Contact />)} />
          <Route exact path='/statistics' render={() => (<Statistics />)} />
          <Route exact path='/effects' render={() => (<Effects />)} />
          <Route exact path='/howtohelp' render={() => (<HowToHelp />)} />
         
          <Route render={() => (<NotFound />)} />
        </Switch>
        </HashRouter>
        </div>
      </div>
    )
  }
}

export default App;

const NotFound = () => {
  return (
    <div>
      <p> Page not found. </p>
    </div>
  )
}
