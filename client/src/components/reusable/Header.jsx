import React from "react";
import logo from "../../assets/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserLoggedInfo from "../UserLoggedInfo";
import SearchBar from "../SearchBar";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const params = useLocation();
  console.log(params.pathname);
  return (
    <div>
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
        {params.pathname !== "/signup" && params.pathname !== "/login" ? (
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink to="/" className="navbar-item">
                <div>Inicio</div>
              </NavLink>
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
                <a className="navbar-link">Ver Más</a>
                <div className="navbar-dropdown">
                  <NavLink to="/about" className="navbar-item">
                    <a className="navbar-item">Sobre Nosotros</a>
                  </NavLink>
                  <a className="navbar-item">Contactarnos</a>
                  <hr className="navbar-divider" />
                  <NavLink to="/panel">
                    <a className="navbar-item">Panel Admin</a>
                  </NavLink>
                </div>
              </div>
              <div className="navbar-item">
                {/* <div className="field has-addons paddingTop"> */}
                <SearchBar />
                {/* </div> */}
                <div />
              </div>
              <div className="navbar-item">
                <NavLink to="/cart">
                  <p className="control pl-6">
                    <div className="button is-small">🛒</div>
                  </p>
                </NavLink>
              </div>
            </div>
            {currentUser && currentUser.email ? (
              <></>
            ) : (
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <NavLink to="/login">
                      <p className="button is-primary is-small">
                        <strong>Ingresar</strong>
                      </p>
                    </NavLink>
                    <NavLink to="/signup">
                      <p className="button is-warning is-small">Registrarse</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
        {currentUser && currentUser.email && <UserLoggedInfo />}
      </nav>
    </div>
  );
}
