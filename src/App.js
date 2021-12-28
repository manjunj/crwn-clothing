import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignUpSignin from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.state.unsubscribeFromAuth = 
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/shop" element={<ShopPage />}/>
            <Route path="/signin" element={<SignUpSignin />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
