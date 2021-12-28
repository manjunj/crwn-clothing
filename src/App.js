import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignUpSignin from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = 
    auth.onAuthStateChanged(async userAuth=>{
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
        })
    }
    this.setState({currentUser:userAuth});
  })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/shop" element={<ShopPage />}/>
            <Route path="/signin" element={<SignUpSignin />}/>
          </Routes>
        </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
