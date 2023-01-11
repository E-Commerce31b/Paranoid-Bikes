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
      <div style={{ margin: "50px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "5px" }}>
          <strong className="font_family fontColor">ACTUALIZAR PERFIL</strong>
        </h1>
      </div>

      <div
        className="container box "
        style={{ width: "50%", height: "340px" }}
      >
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">
              Confirmar correo electrónico
            </label>
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
            <p className="button is-primary" type="submit">
              Actualizar
            </p>

            <Link to="/user-profile">
              <p
                className="button is-light font_family"
                style={{ textDecoration: "none" }}
                type="submit"
              >
                Cancelar
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
