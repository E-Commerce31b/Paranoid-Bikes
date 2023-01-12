import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Landing from "./Landing";
import HomeIcons from "./reusable/homeIcons/HomeIcons";
import ImgCarousel from "./reusable/imagecarousel/ImgCarousel";
import SearchBar from "./SearchBar";

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
