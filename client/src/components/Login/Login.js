import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const handleSubmit = () => {};
  return (
    <div>
      <h2>INICIAR SESION</h2>
      {error && <p>{error}</p>}

      <form on onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} require></input>
        <br />
        <label>Password</label>
        <input type="password" ref={passwordRef} required></input>
        <br />
        <button disable={loading} type="submit">
          Iniciar sesion
        </button>
      </form>

      <div>
        <Link to="/forgot-password">Olvido la contrasena?</Link>
      </div>
      <div>
        Crear cuenta nueva <Link to="/signup">Registrarse</Link>
      </div>
    </div>
  );
};

export default Login;
