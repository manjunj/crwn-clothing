import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
