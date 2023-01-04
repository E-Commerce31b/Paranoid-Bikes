import React from "react";
import instagram from "../../../assets/instagram-logo.png";
import facebook from "../../../assets/facebook-logo.webp";
import whatsapp from "../../../assets/whatsapp-logo.png";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="position_footer">
      <footer class="footer p-5">
        <div className="container">
          <div className=" flex is-flex-direction-row is-justify-content-center is-justify-content-space-between ">
            <a href="https://www.facebook.com/">
              <img src={facebook} width="20" height="20" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} width="20" height="20" />
            </a>
            <a href="https://www.whatsapp.com/">
              <img src={whatsapp} width="20" height="20" />
            </a>
          </div>
        </div>
        <div class="content has-text-centered">
          <p>
            <strong>PARANOID BIKE'S </strong>
          </p>
        </div>
      </footer>
    </div>
  );
}
