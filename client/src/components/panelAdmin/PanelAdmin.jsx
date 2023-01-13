import React from "react";
import HeaderPanel from "./HeaderPanel.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import MainDash from './MainDash/MainDash.jsx';

export default function PanelAdmin() {
  return (
    <div className="panel">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}
