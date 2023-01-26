import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";
import { auth } from "../firebase.js";
import jwt_decode from "jwt-decode";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../redux/slices/usersActions.js";
import emailjs from "emailjs-com";
import { getUser } from "../redux/slices/usersActions";
import axios from "axios";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const validate = (input) => {
  let errors = {};
  if (!input.first_name) {
    errors.first_name = "Ingrese nombre";
  }
  if (!input.last_name) {
    errors.last_name = "Ingrese apellido";
  }
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

export default function Signup() {
  const form = useRef();
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup, googleSignUp } = useAuth();

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
  console.log(input);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [formErrors, setFormErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //const users = useSelector((state) => state.users.users);

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
    e.preventDefault();
    // const user = await users.find(u => u.email === emailRef.current.value)
    // dispatch(getUser(user._id))

    if (passwordConfirmRef.current.value !== passwordRef.current.value)
      return setError("Contraseña no coincide");

    if (!boxState) return setError("Por favor aceptar términos y condiciones");
    try {
      setError("");
      setLoading(true);

      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        passwordConfirmRef.current.value
      );

      //dispatch(postUser(input));
      alert("Usuario creado con exito!");
      // setInput({
      //   /*   email: "",
      //     password: "", */
      // });

      emailjs.sendForm(
        "service_ev9mv2j",
        "template_hzyfavr",
        form.current,
        "gYTIZ320UzKrK9phD"
      );

      await axios
        .post(`${process.env.REACT_APP_URL}/api/users`, input)
        .then((res) => {
          return res.data;
        });

      const dataUser = await axios
        .post(`${process.env.REACT_APP_URL}/api/users/login`, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          return res.data;
        });

      var decoded = jwt_decode(dataUser.accessToken);
      dispatch(getUser(decoded.data.id));
      e.target.reset();

      setBoxState(false);
      navigate("/"); /// cambiar a ruta user
    } catch {
      setError("Error al crear la cuenta");
    }
  }

  async function googleSubmit(e) {
    e.preventDefault();
    if (!boxState) return setError("Por favor aceptar términos y condiciones");
    try {
      setError("");
      setLoading(true);
      const data = await googleSignUp();
      await axios
        .post(`${process.env.REACT_APP_URL}/api/users`, {
          email: auth.currentUser.email,
          password: data.user.uid,
        })
        .then((res) => {
          return res.data;
        });

      const dataUser = await axios
        .post(`${process.env.REACT_APP_URL}/api/users/firebase-login`, {
          email: auth.currentUser.email,
          token: data.credential.idToken,
        })
        .then((res) => {
          return res.data;
        });
      var decoded = jwt_decode(dataUser.accessToken);
      navigate("/");
      dispatch(getUser(decoded.data.id));
      e.target.reset();
    } catch {
      setError("Error al crear la cuenta, intente nuevamente por favor");
    }
  }

  return (
    <div className=" mb-6 ">
      <div style={{ backgroundColor: "white" }}>
        <div className="navbar-brand "></div>
      </div>

      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-5">Crear Usuario</h1>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div
          className="column is-6 mt-5 has-background-white"
          style={{ borderRadius: "10px" }}
        >
          <div>
            {formErrors.first_name && (
              <p className="is-size-7-desktop notification is-danger is-light ">
                {formErrors.first_name}
              </p>
            )}
            {formErrors.last_name && (
              <p className="is-size-7-desktop notification is-danger is-light ">
                {formErrors.last_name}
              </p>
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
                  /*  ref={emailRef} */
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="field">
                <label className="label font_family">Apellido</label>
                <input
                  className="input"
                  type="last_name"
                  name="last_name"
                  /*  ref={emailRef} */
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className="field">
                <label className="label font_family">Pais</label>
                <CountryDropdown
                  defaultOptionLabel="Seleccione País"
                  classes="dropdown-content input"
                  value={country}
                  name="country"
                  onClick={handleInputChange}
                  onChange={(val) => setCountry(val)}
                />
              </div>
              <div className="field">
                <label className="label font_family">Ciudad</label>

                <RegionDropdown
                  defaultOptionLabel="Seleccione Ciudad"
                  classes="dropdown-content input"
                  country={country}
                  value={region}
                  name="city"
                  onClick={handleInputChange}
                  onChange={(val) => setRegion(val)}
                />
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

              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input type="checkbox" onChange={changeState} />
                    <a href="#" className="font_family">
                      Acepto los términos y condiciones
                    </a>
                  </label>
                </div>
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

            <button
              className="button is-warning font_family"
              type="submit"
              onClick={googleSubmit}
            >
              Registrarse con Google
            </button>
            <div className="font_family " style={{ marginTop: "20px" }}>
              ¿Ya tiene una cuenta con nosotros?
              <Link to="/login">Iniciar Sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
