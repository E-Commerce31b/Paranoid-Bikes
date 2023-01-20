import React from "react";
import HeaderPanel from "./HeaderPanel.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import MainDash from "./MainDash/MainDash.jsx";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext.js";

export default function PanelAdmin() {
  const admin = useSelector((state) => state.admins.admins);
  const { currentUser } = useAuth();
  console.log(admin);
  console.log(currentUser.email);

  if (admin.length > 0) {
    return (
      <div className="panel">
        <div className="AppGlass">
          <div className="py-3 ">
            <Sidebar />
          </div>
          <div className="py-6">
            <MainDash />
          </div>
          <div></div>
        </div>
      </div>
    );
  }
  return <h1>NO TIENE PERMISOS</h1>;
}
