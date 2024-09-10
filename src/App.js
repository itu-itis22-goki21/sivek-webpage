import React from 'react'
import Header from "./components/common/header/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css"
import Home from "./components/home/Home"
import About from './components/about/About';

import Footer from "./components/common/footer/Footer"
import AviationDictionary from './components/dictionary/AviationDictionary';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Header/> 
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/dictionary" exact component={AviationDictionary}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App