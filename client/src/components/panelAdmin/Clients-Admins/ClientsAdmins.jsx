import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import Admins from "./Admins/Admins.jsx";
import Clients from "./Clients/Clients.jsx";
import '../panelAdmin.css'

export default function ClientsAdmins() {
  return (
    <div className="panel">
        <div className="AppGlass">
          <div className="py-3 ">
            <Sidebar />
          </div>
          <div className="py-6">
            <Clients/>
            <Admins/>
          </div>
          <div></div>
        </div>
      </div>
  );
}
