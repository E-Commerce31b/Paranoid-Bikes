import React from "react";
import HeaderPanel from "./HeaderPanel";
import Sidebar from "./sidebar/Sidebar";

export default function PanelAdmin() {
  return (
    <div className="panel">
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
