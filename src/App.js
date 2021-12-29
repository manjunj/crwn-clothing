import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignUpSignin from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import {Route, Routes, BrowserRouter,Navigate} from 'react-router-dom';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
      });
    }
    setCurrentUser(userAuth);
  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/shop" element={<ShopPage />}/>
            {console.log(this.props.currentUser)}
            <Route path="/signin" element={this.props.currentUser?<Navigate to="/"/>:<SignUpSignin/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStatetoProps=({user})=>({
  currentUser:user.currentUser
});

const mapDispatchtoProps = dispatch =>({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps,mapDispatchtoProps)(App);