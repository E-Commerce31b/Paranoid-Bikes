import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Logo.png";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/"); /// cambiar a ruta user
    } catch {
      setError("Error al inicial sesion, intente nuevamente");
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
          <strong className="font_family fontColor">INICIAR SESION</strong>
        </h1>
      </div>
      <div
        className="container box"
        style={{ width: "50%", marginTop: "50px" }}
      >
        <form on onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">Correo electronico</label>
            <input className="input" type="email" ref={emailRef}></input>
          </div>

          <div className="field">
            <label className="label font_family">Contrasena</label>
            <input className="input" type="password" ref={passwordRef}></input>
          </div>
          <div className="buttons has-text-centered">
            <button className="button is-primary font_family" type="submit">
              Iniciar sesion
            </button>
          </div>
        </form>

        <div className="m-2 font_family">
          <Link to="/forgot-password">Olvido la contrasena?</Link>
        </div>
        <div className="m-2 font_family">
          Crear cuenta nueva <Link to="/signup">Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
