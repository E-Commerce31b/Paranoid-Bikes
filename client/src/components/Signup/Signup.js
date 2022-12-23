import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/Logo.png";
import "../../index.css";
import emailjs from "emailjs-com";

export default function Signup() {
  const form = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [boxState, setBoxState] = useState(false);
  const navigate = useNavigate();

  const changeState = () => {
    setBoxState(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value)
      return setError("Contraseña no coincide");

    if (!boxState) return setError("Por favor aceptar terminos y condiciones");
    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        passwordConfirmRef.current.value
      );

      emailjs
        .sendForm(
          "service_ev9mv2j",
          "template_hzyfavr",
          form.current,
          "gYTIZ320UzKrK9phD"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
      setBoxState(false);
      navigate("/"); /// cambiar a ruta user
    } catch {
      setError("Error al crear la cuenta");
    }
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

      <div style={{ margin: "80px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "10px" }}>
          <strong className="font_family fontColor">CREAR USUARIO</strong>
        </h1>
      </div>

      <div
        className="container box"
        style={{ width: "50%", marginTop: "50px" }}
      >
        {error && <p className="notification is-danger is-light">{error}</p>}

        <form ref={form} onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">Nombre</label>
            <input className="input" type="text" name="name"></input>
          </div>
          <div className="field">
            <label className="label font_family">Correo electronico</label>
            <input
              className="input"
              type="email"
              name="email"
              ref={emailRef}
            ></input>
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

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" onChange={changeState} />
                <a href="#" className="font_family">
                  Acepto los terminos y condiciones
                </a>
              </label>
            </div>
          </div>

          <div className="buttons has-text-centered">
            <button className="button is-primary font_family" type="submit">
              Registrarse
            </button>

            <Link to="/">
              <button className="button is-light font_family" type="submit">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
        <br />
        <div className="font_family">
          Ya tiene una cuenta con nosotros?{" "}
          <Link to="/login">Iniciar Sesion</Link>
        </div>
      </div>
    </div>
  );
}
