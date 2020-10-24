import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } 
from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Almirah from './components/pages/Almirah';
import Wardrobe from './components/pages/Wardrobe';
import SignUp from './components/pages/SignUp';

function App() {
    return ( 
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/almirah' component={Almirah} />
            <Route path='/wardrobe' component={Wardrobe} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </Router>
      </>
    );
}

export default App;