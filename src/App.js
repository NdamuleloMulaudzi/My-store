import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import {Cart} from './pages/cart/Cart'
import { Shop } from './pages/shop/Shop';
import { ShopContextProvider } from './context/ShopContext';


function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
