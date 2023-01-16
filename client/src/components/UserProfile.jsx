import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoProfile from "../assets/logoProfile.png";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { getUsers } from "../redux/slices/usersActions";
import axios from "axios";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState([""]);
  const [loading, setLoading] = useState(false);


  const counter = useSelector((state) => state.users.user);
  console.log(user);
  useEffect(() => {
    setUser(counter);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className=" m-5">
      <div style={{ margin: "80px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "10px" }}>
          <strong className="font_family fontColor">Tu Perfil</strong>
        </h1>
      </div>
      <div
        className="container box"
        style={{ width: "50%", marginTop: "50px", height: "450px" }}
      >
        <figure class="image is-128x128" style={{ float: "right" }}>
          <img src={logoProfile} alt="logpProfile" />
        </figure>
        <p className="m-3">Nombre: {user.first_name}</p>
        <p className="m-3">Apellido: {user.last_name}</p>
        <p className="m-3">Pais: {user.country}</p>
        <p className="m-3">Ciudad: {user.city}</p>
        <p className="m-3">Estado: Activo</p>
        <p className="m-3">Correo: {user.email}</p>

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
