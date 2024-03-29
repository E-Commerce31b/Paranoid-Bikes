import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/Logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import UserLoggedInfo from "../UserLoggedInfo.jsx";
import SearchBar from "../SearchBar.jsx";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const params = useLocation();

  const admin = useSelector((state) => state.admins.admins);
  const user = useSelector((state) => state.users.user);

  return (
    <div>
      <nav
        className="navbar font_family is-size-7 is-flex-wrap-nowrap"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand ">
          <div className="navbar-item ">
            <NavLink to="/" className="textDecoration">
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
            <div className="navbar-start is-size-5">
              <NavLink to="/BestSellers" className="navbar-item">
                <div className="">Más vendidos</div>
              </NavLink>
              <NavLink to="/Offers" className="navbar-item">
                <div>Ofertas</div>
              </NavLink>
              {Object.keys(user).length ? (
                    <NavLink to="/History" className="navbar-item">
                    <div>Historial</div>
                    </NavLink>
                  ) : (
                    <></>
                    )}
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Ver Más</a>
                <div className="navbar-dropdown">
                  <NavLink to="/about" className="navbar-item">
                    <a className="navbar-item pl-1 pb-3">Sobre Nosotros</a>
                  </NavLink>
                  <NavLink to="/contactarnos">
                    <a className="navbar-item pl-4">Contactarnos</a>
                  </NavLink>
                  <hr className="navbar-divider" />
                  {admin.length && admin.length ? (
                    <NavLink to="/panel">
                      <a className="navbar-item">Panel Admin</a>
                    </NavLink>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="navbar-item">
                {/* <div className="field has-addons paddingTop"> */}
                <SearchBar />
                {/* </div> */}
                <div />
              </div>
            </div>
            {currentUser && currentUser.email ? (
              <></>
            ) : (
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="px-5">
                    <NavLink to="/login">
                      <button className="button is-primary is-normal px-5 mx-4">
                        <strong className="font_family">Ingresar</strong>
                      </button>
                    </NavLink>
                    <NavLink to="/signup">
                      <button className="button is-warning is-normal">
                        <strong className="font_family">Registrarse</strong>
                      </button>
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
