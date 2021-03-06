import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


// import logo from './logo.svg';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import UserAuth from './pages/user-auth/user-auth.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { 
	auth,
	createUserProfileDocument,
	//addCollectionAndDocuments,
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  // use this lifecycle method for all
  // onAuthStateChanged() or onSnapshot() methods from the auth library
  // app only mounts once so use this as a place to load data that needs to be snagged only once
  componentDidMount(){
  	// brought in the store data collections into firebase
    //const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser} = this.props;

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
      /*
      addCollectionAndDocuments('collections', 
      	collectionsArray.map(
      		({title, items}) => ({ title, items })
      	)
      )
      */
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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/sign-in'
            render={() => this.props.currentUser ? 
              (<Redirect to='/' />)
              :
              (<UserAuth />)
            }             
          />        
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
 // collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
