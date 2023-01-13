import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/usersActions"

export const validate = (input) => {
  let errors = {};

  if (!input.email) {
    errors.email = "Ingrese email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
    errors.email = "Ingrese email válido";
  }

  if (!input.password) {
    errors.password = "Ingrese contraseña";
  }
  return errors;
};
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setInput({ ...input, [property]: value });
    setFormErrors(validate({ ...input, [property]: value }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await users.find(u => u.email === emailRef.current.value)
      dispatch(getUser(user._id))
      setError("");
      setLoading(true);

      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/user"); /// cambiar a ruta user
    } catch {
      setError("Error al inicial sesion, intente nuevamente");
    }
    setLoading(false);
  }
  return (
    <div className=" mb-5">
      <div>
        <h1 className="column has-text-centered" style={{ paddingTop: "10px" }}>
          <h1 className="title is-3 font_family mt-3">Iniciar sesión</h1>
        </h1>
      </div>
      <div
        className="container box"
        style={{
          width: "50%",
          marginTop: "20px",
          marginBottom: "20px",
          height: "315px",
        }}
      >
        {error && <p className="notification is-danger is-light">{error}</p>}
        {formErrors.email && (
          <p className="notification is-danger is-light">{formErrors.email}</p>
        )}
        {formErrors.password && (
          <p className="notification is-danger is-light">
            {formErrors.password}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family">Correo electrónico</label>
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
          <div className="buttons has-text-centered">
            <button className="button is-primary font_family" type="submit">
              <p>Iniciar Sesión</p>
            </button>
          </div>
        </form>

        <div className="m-2 font_family">
          <Link to="/forgot-password">¿Olvido la contraseña?</Link>
        </div>
        <div className="m-2 font_family">
          Crear cuenta nueva <Link to="/signup">Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
