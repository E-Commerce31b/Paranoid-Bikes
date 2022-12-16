import { Routes, Route } from "react-router-dom";
import Header from "./components/reusable/Header";
import Stripe from "./components/Stripe/Stripe";

import "./App.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/stripe" element={<Stripe />} />
    </Routes>
  );
}

export default App;
