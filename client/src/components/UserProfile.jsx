import React from "react";
import { Link } from "react-router-dom";
import logoProfile from "../assets/logoProfile.png";
import { useAuth } from "../context/AuthContext";

const UserProfile = () => {
  const { currentUser } = useAuth();
  return (
    <div className="backgroundColor m-5">
      <div style={{ margin: "80px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "10px" }}>
          <strong className="font_family fontColor">Tu Perfil</strong>
        </h1>
      </div>
      <div
        className="container box"
        style={{ width: "50%", marginTop: "50px" }}
      >
        <figure class="image is-128x128" style={{ float: "right" }}>
          <img src={logoProfile} alt="logpProfile" />
        </figure>
        <p className="m-3">Nombre</p>
        <p className="m-3">Apellido</p>
        <p className="m-3">Direccion</p>
        <p className="m-3">Codigo Postal</p>
        <p className="m-3">Pais</p>
        <p className="m-3">Estado</p>
        <p className="m-3">Ciudad</p>
        <p className="m-3">Correo: {currentUser.email}</p>

        <Link to="/update-profile" className="m-3">
          <p className="button is-primary">
            <strong>Actualizar información</strong>
          </p>
        </Link>

        <Link to="/user" className="m-3">
          <p className="button is-warning">Regresar</p>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
