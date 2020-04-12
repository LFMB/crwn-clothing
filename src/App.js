import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import UserAuth from './pages/user-auth/user-auth.component';

import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';


import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user });

       console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="app-wrapper">
        <Header  currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={UserAuth} />        
        </Switch>
      </div>
    );
  }
}

export default App;
