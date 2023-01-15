import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import Landing from "./Landing.jsx";
import HomeIcons from "./reusable/homeIcons/HomeIcons.jsx";
import ImgCarousel from "./reusable/imagecarousel/ImgCarousel.jsx";
import SearchBar from "./SearchBar.jsx";

const UserHome = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <HomeIcons />
      <ImgCarousel />
      {/* <Landing /> */}
      {error && <p className="notification is-danger is-light">{error}</p>}
    </>
  );
};

export default UserHome;
