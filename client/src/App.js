import { Routes, Route } from "react-router-dom";
import Header from "./components/reusable/Header";
import Home from "./components/Home";
import Stripe from "./components/Stripe/Stripe";
import ProductDetail from "./components/ProductDetail/ProductDetail";

import "./App.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/details/:id" element={<ProductDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/stripe" element={<Stripe />} />
    </Routes>
  );
}

export default App;
