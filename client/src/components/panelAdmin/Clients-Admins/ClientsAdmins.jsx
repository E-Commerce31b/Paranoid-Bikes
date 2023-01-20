import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import Admins from "./Admins/Admins.jsx";
import Clients from "./Clients/Clients.jsx";

export default function ClientsAdmins() {
  return (
    <div className="flex is-flex-direction-row">
      <div>
        <Sidebar />
      </div>
      <div>
        <Clients />
        <Admins />
      </div>
    </div>
  );
}
