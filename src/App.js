import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignUpSignin from './pages/sign-up-and-sign-in/sign-up-and-sign-in.component';
import {Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/shop" element={<ShopPage />}/>
          <Route path="/signin" element={<SignUpSignin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
