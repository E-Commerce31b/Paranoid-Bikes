import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stripe from "./components/Stripe/Stripe";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductsList from "./components/ProductsList/ProductsList";
import "./App.js";
import Landing from "./components/Landing";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/list/:category" element={<ProductsList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
