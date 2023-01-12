import { Routes, Route } from "react-router-dom";
import Stripe from "./components/paymentmethod/Stripe";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import Landing from "./components/Landing";
import BestSellers from "./components/BestSellers";
import Offers from "./components/Offers";
import AboutUs from "./components/AboutUs";
import Record from "./components/Record";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/reusable/Header";
import PaymentMethod from "./components/paymentmethod/PaymentMethod";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import "./App.js";
import Cart from "./components/Cart";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";
// import Payment from "./payment";
// import Completion from "./completion";
import Footer from "./components/reusable/imagecarousel/Footer";
import ConfirmPurchase from "./components/ConfirmPurchase";
import Error404 from "./components/Error404";
import PanelAdmin from "./components/panelAdmin/PanelAdmin";
import MainDash from "./components/panelAdmin/MainDash/MainDash";
import Products from "./components/panelAdmin/PanelProducts/Products";
import ClientsAdmins from "./components/panelAdmin/Clients-Admins/ClientsAdmins";
import Analytics from "./components/panelAdmin/Analitics/Analytics";
import FormAdmins from "./components/panelAdmin/Clients-Admins/FormAdmins/FormAdmins";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details/:id" element={<ProductDetail />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/record" element={<Record />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/list/:category" element={<ProductsList />} />
        <Route path="/list/:name" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
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
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
