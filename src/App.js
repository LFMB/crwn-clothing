import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from './logo.svg';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import UserAuth from './pages/user-auth/user-auth.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


import './App.css';


class App extends React.Component {

  unsubscribeFromAuth = null;

  // use this lifecycle method for all
  // onAuthStateChanged() or onSnapshot() methods from the auth library
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     //  this.setState({currentUser: user });      
      // console.log(user);
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          /*
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          */
          // redux implementation
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();  
  }

  render(){
    return (
      <div className="app-wrapper">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={UserAuth} />        
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
