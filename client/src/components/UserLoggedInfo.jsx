import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from "../context/AuthContext.js";
import logoProfile from "../assets/logoProfile.png";
import { Link } from "react-router-dom";
import { resetUser } from '../redux/slices/users';
import { resetAdmin } from '../redux/slices/admin';

export default function UserLoggedInfo() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  const admin = useSelector((state) => state.admins.admins)
  const dispatch = useDispatch()
  async function handleLogout() {
    setError("");
    try {
      if(admin?.length) {
        dispatch(resetAdmin())
        console.log("adminReset")
        await logout();
        navigate("/");
      } else {
        dispatch(resetUser())
        console.log("usuarioReset")
        await logout();
        navigate("/");
      }
      // await logout();
      // navigate("/");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <p className="m-5">Usuario: {currentUser.email}</p>

            <Link to="/home">
              <img
                src={logoProfile}
                alt="logpProfile"
                className="mr-2 buttonProfile"
                style={{ height: "45px" }}
              />
            </Link>
            <button
              className="button is-warning is-small"
              type="submit"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
