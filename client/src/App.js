import { Routes, Route } from "react-router-dom";
import Header from "./components/reusable/Header";
import Home from "./components/Home";
import Stripe from "./components/Stripe/Stripe";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import "./App.js";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/details/:id" element={<ProductDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/stripe" element={<Stripe />} />
      <Route path="/list/:category" element={<ProductsList/>} />
    </Routes>
  );
}

export default App;
