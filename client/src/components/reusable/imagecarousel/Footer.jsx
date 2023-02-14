import React from "react";
import instagram from "../../../assets/instagram-logo.png";
import facebook from "../../../assets/facebook-logo.webp";
import whatsapp from "../../../assets/whatsapp-logo.png";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <div className="position_footer">
      <footer class="footer p-1">
        <div className="container">
          <div className="columns">
            <div
              className="column is-two-fifths"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 className="has-text-centered">
                <strong> © Paranoid Bikes 2023 | Site by Gr 9</strong>
              </h3>
            </div>
            <div className="column is-one-fifth is-justify-content-center">
              <div className="flex is-justify-content-space-between is-flex-direction-row">
                <IconButton aria-label="delete">
                  <a href="https://www.facebook.com/">
                    <img src={facebook} width="20" height="20" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete">
                  <a href="https://www.instagram.com/">
                    <img src={instagram} width="20" height="20" />
                  </a>
                </IconButton>
                <IconButton aria-label="delete">
                  <a href="https://www.whatsapp.com/">
                    <img src={whatsapp} width="20" height="20" />
                  </a>
                </IconButton>
              </div>
              <div class="content has-text-centered mt-3">
                <p>
                  <strong>PARANOID BIKES </strong>
                </p>
              </div>
            </div>
            <div
              className="column is-two-fifths flex is-justify-content-center is-align-items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NavLink to="policy">
                <h3 className="content has-text-centered mt-3 has-text-black">
                  <strong>POLITICA DE PRIVACIDAD</strong>
                </h3>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
