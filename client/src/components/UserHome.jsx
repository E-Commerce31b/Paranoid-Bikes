import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { useAuth } from "../context/AuthContext";
import HomeIcons from "./reusable/homeIcons/HomeIcons";
import ImgCarousel from "./reusable/imagecarousel/ImgCarousel";
import SearchBar from "./SearchBar";

const UserHome = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    console.log("holaaa");
    try {
      await logout();
      navigate("/home");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <nav
        className="navbar font_family is-size-7"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ">
          <div className="navbar-item ">
            <NavLink to="/home " className="textDecoration">
              <img src={logo} width="112" height="80" />
              <div className=" is-size-4 has-text-weight-bold font_family is-pulled-right">
                <h1 className="flex has-text-right ">
                  <span>Paranoid </span>
                  <span>Bikes</span>
                </h1>
              </div>
            </NavLink>
          </div>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/BestSellers" className="navbar-item">
              <div>Más vendidos</div>
            </NavLink>
            <NavLink to="/Offers" className="navbar-item">
              <div>Ofertas</div>
            </NavLink>
            <NavLink to="/Record" className="navbar-item">
              <div>Historial</div>
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Novedades</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Sobre Nosotros</a>
                <a className="navbar-item">Contactarnos</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Reportar un error</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="field has-addons paddingTop">
              {/* <p className="control has-icons-left is-expanded">
              <input
                className="input is-small"
                type="text"
                onChange={(el) => handleChange(el)} 
                placeholder={props.theText}
              />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>

            <p className="control"> */}
              <SearchBar />
              {/* <button
                onClick={(el) => handleSubmit(el)} className="button is-small"
              > */}
              {/* 🔍 */}
              {/* </button> */}
              {/* </p> */}
              <p className="control pl-6">
                <button
                  /* onClick={(el) => handleSubmit(el)} */ className="button is-small"
                >
                  🛒
                </button>
              </p>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <h1>UserName: {currentUser.email}</h1>

                <button
                  className="button is-warning is-small"
                  type="submit"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <HomeIcons />
      <ImgCarousel />
      {error && <p className="notification is-danger is-light">{error}</p>}
    </>
  );
};

export default UserHome;