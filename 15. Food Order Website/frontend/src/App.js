import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Meal from './views/Meal'
import './App.css';
import Header from "./views/Header";
import Footer from "./views/Footer";
import Product from "./views/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="/meal" element={<><Header /><Meal /><Footer /></>} />
          <Route path="/meal/:id" element={<><Product /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
