import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import {Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/shop" element={<ShopPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
