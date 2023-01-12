import React from "react";
import HeaderPanel from "./HeaderPanel";
import Sidebar from "./sidebar/Sidebar";
import MainDash from './MainDash/MainDash';

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
