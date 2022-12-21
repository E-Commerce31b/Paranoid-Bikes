import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stripe from "./components/Stripe";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import "./App.js";
import Landing from "./components/Landing";
import BestSellers from "./components/BestSellers";
import Offers from "./components/Offers";
import Record from "./components/Record";
import Loging from "./components/Loging";
import SingUp from "./components/SingUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/details/:id" element={<ProductDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bestsellers" element={<BestSellers />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/record" element={<Record />} />
      <Route path="/loging" element={<Loging />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path="/stripe" element={<Stripe />} />
      <Route path="/list/:category" element={<ProductsList />} />
    </Routes>
  );
}

export default App;
