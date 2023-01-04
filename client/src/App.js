import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stripe from "./components/Stripe";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import Landing from "./components/Landing";
import BestSellers from "./components/BestSellers";
import Offers from "./components/Offers";
import Record from "./components/Record";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/reusable/Header";
import "./App.js";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/record" element={<Record />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/list/:category" element={<ProductsList />} />
        <Route path="/list/:name" element={<ProductsList />} />

        <Route
          path="/user"
          element={
            <PrivateRoutes>
              <UserHome />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/user-profile"
          element={
            <PrivateRoutes>
              <UserProfile />
            </PrivateRoutes>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
