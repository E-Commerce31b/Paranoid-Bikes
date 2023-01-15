import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../redux/slices/usersActions.js";
import emailjs from "emailjs-com";

export const validate = (input) => {
  let errors = {};

  if (!input.email) {
    errors.email = "Ingrese email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
    errors.email = "Ingrese correo electrónico válido";
  }

  if (!input.password) {
    errors.password = "Ingrese contraseña";
  } else if (
    !input.password.match(/[A-Z]/) ||
    !input.password.match(/[a-z]/) ||
    !input.password.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/) ||
    !(input.password.length > 7)
  ) {
    errors.password =
      "Contraseña debe tener(Un carácter en mayúscula yu minúscula, un caracter en minúscula más de 8 caracteres, caracteres especiales)";
  }
  return errors;
};
const GoogleRegister = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",

    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setInput({ ...input, [property]: value });
    setFormErrors(validate({ ...input, [property]: value }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log("click");
    // if (input.password !== input.passwordConf)
    //   return setError("Contraseña no coincide");

    setError("");
    dispatch(postUser(input));
    alert("Usuario creado con exito!");
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
    navigate("/user");
  }
  return (
    <div className=" mb-6 ">
      <div style={{ backgroundColor: "white" }}>
        <div className="navbar-brand "></div>
      </div>

      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-5">Registrar</h1>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div
          className="column is-6 mt-5 has-background-white"
          style={{ borderRadius: "10px" }}
        >
          <div>
            {/* {error && (
              <p className="notification is-danger is-light ">{error}</p>
            )}
            {formErrors.email && (
              <p className="is-size-7-desktop notification is-danger is-light ">
                {formErrors.email}
              </p>
            )}
            {formErrors.password && (
              <p className="is-size-7-desktop notification is-danger is-light">
                {formErrors.password}
              </p>
            )} */}
            <form ref={form} onSubmit={handleSubmit}>
              <div className="field">
                <label className="label font_family">Nombre</label>
                <input
                  className="input"
                  type="first_name"
                  name="first_name"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="field">
                <label className="label font_family">Apellido</label>
                <input
                  className="input"
                  type="last_name"
                  name="last_name"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="field">
                <label className="label font_family">Pais</label>
                <input
                  className="input"
                  type="country"
                  name="country"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="field">
                <label className="label font_family">Ciudad</label>
                <input
                  className="input"
                  type="city"
                  name="city"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="field">
                <label className="label font_family">Correo electrónico</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className="field">
                <label className="label font_family">Contraseña</label>
                <input
                  className="input"
                  type="password"
                  onChange={handleInputChange}
                  name="password"
                ></input>
              </div>

              <div className="field">
                <label className="label font_family">
                  Confirmar contraseña
                </label>
                <input
                  className="input"
                  type="password"
                  name="passwordConf"
                ></input>
              </div>

              <div className="buttons has-text-centered">
                <button className="button is-primary font_family" type="submit">
                  Registrarse
                </button>

                <Link to="/">
                  <p className="button is-light font_family" type="submit">
                    Cancelar
                  </p>
                </Link>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GoogleRegister;
