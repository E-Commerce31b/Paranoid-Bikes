import { Routes, Route } from "react-router-dom";
import Stripe from "./components/paymentmethod/Stripe.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ProductsList from "./components/ProductsList.jsx";
import Landing from "./components/Landing.jsx";
import BestSellers from "./components/BestSellers.jsx";
import Offers from "./components/Offers.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Record from "./components/Record.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile.js";
import { AuthProvider } from "./context/AuthContext.js";
import Header from "./components/reusable/Header.jsx";
import PaymentMethod from "./components/paymentmethod/PaymentMethod.jsx";
import Profile from "./components/Profile.jsx";
import Orders from "./components/Orders.jsx";
import "./App.js";
import Cart from "./components/cart/Cart.jsx";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes.js";
import UserHome from "./components/UserHome.jsx";
import UserProfile from "./components/UserProfile.jsx";
// import Payment from "./payment";
// import Completion from "./completion";
import Footer from "./components/reusable/imagecarousel/Footer.jsx";
import ConfirmPurchase from "./components/ConfirmPurchase.jsx";
import Error404 from "./components/Error404.jsx";
import PanelAdmin from "./components/panelAdmin/PanelAdmin.jsx";
import MainDash from "./components/panelAdmin/MainDash/MainDash.jsx";
import Products from "./components/panelAdmin/PanelProducts/Products.jsx";
import ClientsAdmins from "./components/panelAdmin/Clients-Admins/ClientsAdmins.jsx";

import Analytics from "./components/panelAdmin/Analitics/Analytics.jsx";
import FormAdmins from "./components/panelAdmin/FormAdmins/FormAdmins.jsx";
import BikeCreate from "./components/panelAdmin/BikeCreate/BikeCreate.jsx";

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
        <Route path="/productos" element={<Products />} />
        <Route path="/formularioadmin" element={<FormAdmins />} />
        <Route path="/clientesadmins" element={<ClientsAdmins />} />
        <Route path="/creacionbicis" element={<BikeCreate />} />
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

        <Route
          path="/panel"
          element={
            <PrivateRoutes>
              <PanelAdmin />
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
