import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoProfile from "../assets/logoProfile.png";
import { useAuth } from "../context/AuthContext";
// import { useDispatch } from "react-redux";
// import { getUsers } from "../redux/slices/usersActions";
import axios from "axios";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = useState([""]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      setLoading(true);
      const dataUser = await axios
        .get("https://paranoid-bikes-backend.onrender.com/api/users", {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiU3VwZXJBZG1pbiIsImlhdCI6MTY3MzcwMDQyMSwiZXhwIjoxOTg5Mjc2NDIxfQ.ItOa1EHW-SrPkN0T_61-42J0uMgMuG8IMLwkX-KrqOI`,
          },
        })
        .then((res) => {
          return res.data;
        });
      const userData = dataUser.filter(
        (element) => element.email === currentUser.email
      );

      console.log(userData);
      setUser(userData);
      setLoading(false);
    };
    data();
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
        <p className="m-3">Nombre: {user[0].first_name}</p>
        <p className="m-3">Apellido: {user[0].last_name}</p>
        <p className="m-3">Direccion: {user[0].address}</p>
        <p className="m-3">Pais: {user[0].country}</p>
        <p className="m-3">Ciudad: {user[0].city}</p>
        <p className="m-3">Estado: Activo</p>
        <p className="m-3">Correo: {user[0].email}</p>

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
