import React, { useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.js";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { postAdmin } from "../../../redux/slices/adminActions.js";
import Swal from "sweetalert2";

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

export default function FormAdmins() {
  const form = useRef();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, googleSignUp } = useAuth();
  const token = useSelector((state) => state.admins.token);
  console.log("token", token);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [boxState, setBoxState] = useState(false);
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
  const navigate = useNavigate();

  const changeState = () => {
    setBoxState(true);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setInput({ ...input, [property]: value });
    setFormErrors(validate({ ...input, [property]: value }));
  };

  async function handleSubmit(e) {
    console.log("entraaaaaaaaaaa");
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value)
      return setError("Contraseña no coincide");

    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        passwordConfirmRef.current.value
      );
      const data = { input, token };
      {
        dispatch(postAdmin(data));
        Swal.fire({
          title: "Listo!",
          text: "Usuario Admin creado con exito",
          icon: "success",
          confirmButtonText: "Continuar",
        });
        navigate("/panel");
        setInput({
          /*   email: "",
          password: "", */
        });
      }

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
      navigate("/user"); /// cambiar a ruta user
    } catch {
      setError("Error al crear la cuenta");
    }
  }

  return (
    <div className=" mb-6 ">
      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-5">Crear Administrador</h1>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div
          className="column is-6 mt-5 has-background-white"
          style={{ borderRadius: "10px" }}
        >
          <div>
            {error && (
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
            )}
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
                <label className="label font_family">Correo electrónico</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  ref={emailRef}
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className="field">
                <label className="label font_family">Contraseña</label>
                <input
                  className="input"
                  type="password"
                  ref={passwordRef}
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
                  ref={passwordConfirmRef}
                ></input>
              </div>
              <div className="buttons has-text-centered">
                <button className="button is-primary font_family" type="submit">
                  Crear
                </button>

                <p className="button font_family is-warning" type="submit">
                  Cancelar
                </p>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
