import axios from "axios";
import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useAuth } from "../../context/AuthContext.js";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { getUser } from "../../redux/slices/usersActions.js";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

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

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const counter = useSelector((state) => state.users.user);
  console.log(counter._id);

  console.log(input);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setInput({ ...input, [property]: value });
    setFormErrors(validate({ ...input, [property]: value }));
  };
  async function handleSubmit(e) {
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
        axios.put(
          `${process.env.REACT_APP_URL}/api/users/${counter._id}`,
          input
        );
        navigate("/");
      })

      .catch(() => {
        setError("Failed to update account");
      })
      .finally(async () => {
        setLoading(false);
        const dataUser = await axios
          .post(`${process.env.REACT_APP_URL}/api/users/login`, {
            email: emailRef.current.value,
            password: passwordRef.current.value,
          })
          .then((res) => {
            console.log("hola");
            return res.data;
          });
        var decoded = jwt_decode(dataUser.accessToken);
        dispatch(getUser(decoded.data.id));
        e.target.reset();
      });
  }
  return (
    <div className="backgroundColor">
      <div style={{ margin: "50px" }}>
        <h1 className="column has-text-centered" style={{ paddingTop: "5px" }}>
          <strong className="font_family fontColor">ACTUALIZAR PERFIL</strong>
        </h1>
      </div>

      <div className="container box " style={{ width: "50%", height: "800px" }}>
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
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
            <label className="label font_family">
              Confirmar correo electrónico
            </label>
            <input
              className="input"
              type="email"
              ref={emailRef}
              name="email"
              onChange={handleInputChange}
            ></input>
          </div>

          <div className="field">
            <label className="label font_family">Contraseña</label>
            <input
              className="input"
              type="password"
              ref={passwordRef}
              name="password"
              onChange={handleInputChange}
            ></input>
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
