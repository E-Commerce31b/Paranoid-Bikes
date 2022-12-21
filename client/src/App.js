import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stripe from "./components/Stripe";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import "./App.js";

function App() {
  return (
    <Routes>
      <Route path="/details/:id" element={<ProductDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/stripe" element={<Stripe />} />
      <Route path="/list/:category" element={<ProductsList/>} />
    </Routes>
  );
}

export default App;
