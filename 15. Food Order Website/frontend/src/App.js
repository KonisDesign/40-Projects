import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Meal from './views/Meal'
import './App.css';
import Product from "./views/Product";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal" element={<Meal />} />
          <Route path="/meal/:id" element={<><Product /></>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
