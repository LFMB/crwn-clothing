import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';

import HomePage from './pages/homepage/homepage.component';
import './App.css';


const HatsPage = () => (
	<div>
		<h1>Hats page</h1>
	</div>
)


function App() {
  return (
    <div className="app-wrapper">
    	<Switch>
    		<Route exact path='/' component={HomePage} />
    		<Route path='/hats' component={HatsPage} />
    	</Switch>
    </div>
  );
}

export default App;
