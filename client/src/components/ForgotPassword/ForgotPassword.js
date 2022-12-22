import React, { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(
        "Por favor revisar la bandeja de entrada de su correo electronico para reiniciar contrasena"
      );
    } catch {
      setError("Error al reiniciar contrasena");
    }
    setLoading(false);
  }
  return (
    <div className="backgroundColor">
      <div style={{ backgroundColor: "white" }}>
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
        </div>
      </div>

      <div style={{ margin: "80px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "10px" }}>
          <strong className="font_family fontColor">Rstaurar Contrasena</strong>
        </h1>
      </div>
      <div
        className="container box"
        style={{ width: "50%", marginTop: "50px" }}
      >
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">Correo electronico</label>
            <input className="input" type="email" ref={emailRef}></input>
          </div>
        </form>

        <div className="buttons has-text-centered m-2">
          <button className="button is-primary font_family" type="submit">
            Restaurar contrasena
          </button>
        </div>

        <div className="m-2 font_family">
          <Link to="/login">Iniciar Sesion</Link>
        </div>
        <div className="m-2 font_family">
          Crear cuenta nueva <Link to="/signup">Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
