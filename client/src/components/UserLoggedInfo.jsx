import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function UserLoggedInfo() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
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
