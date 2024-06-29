import './App.css';
import Navbar from './Components/Navbar/Navbar';
import BottomNavbar from './Components/BottomNavbar/BottomNavbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';

import "@fontsource/manrope";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
      <BottomNavbar />
    </Router>
  );
}

export default App;
