import React from "react";
import logo from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    // <div className="bg-[#0B409C]">
    //   <div className="font-['Lobster']">Paronoid Bikes Shop</div>
    // </div>
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
          <a className="navbar-item">Más vendidos</a>

          <a className="navbar-item">Ofertas</a>
          <a className="navbar-item">Historial</a>

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
            <p className="control has-icons-left is-expanded">
              <input
                className="input is-small"
                type="text"
                /* onChange={(el) => handleChange(el)} */
                /* placeholder={props.theText} */
              />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>

            <p className="control">
              <button
                /* onClick={(el) => handleSubmit(el)} */ className="button is-small"
              >
                🔍
              </button>
            </p>
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
      </div>
    </nav>
  );
}
