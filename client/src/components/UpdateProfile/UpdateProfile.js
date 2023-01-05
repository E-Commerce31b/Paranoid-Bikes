import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useAuth } from "../../context/AuthContext";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value)
      return setError("Password do not match");

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="backgroundColor">
      <div style={{ backgroundColor: "white" }}>
        <div className="navbar-brand ">
          <div className="navbar-item ">
            <NavLink to="/home " className="textDecoration">
              <img src={logo} alt="logo" width="112" height="80" />
              <div className=" is-size-4 has-text-weight-bold font_family is-pulled-right">
                <h1 className="flex has-text-right ">
                  <span>Paranoid </span>
                  <span>Bikes</span>
                </h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div style={{ margin: "50px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "5px" }}>
          <strong className="font_family fontColor">ACTUALIZAR PERFIL</strong>
        </h1>
      </div>

      <div className="container box mb-5" style={{ width: "50%" }}>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">Confirmar correo electrónico</label>
            <input className="input" type="email" ref={emailRef}></input>
          </div>

          <div className="field">
            <label className="label font_family">Contraseña</label>
            <input className="input" type="password" ref={passwordRef}></input>
          </div>

          <div className="field">
            <label className="label font_family">Confirmar contraseña</label>
            <input
              className="input"
              type="password"
              ref={passwordConfirmRef}
            ></input>
          </div>

          <div className="buttons has-text-centered">
            <button className="button is-primary" type="submit">
              Actualizar
            </button>

            <Link to="/user-profile">
              <button className="button is-light font_family" type="submit">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
