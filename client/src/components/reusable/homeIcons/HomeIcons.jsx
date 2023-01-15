import React from "react";
import { NavLink } from "react-router-dom";
import "./homeIcons.css";
import { Link } from "react-router-dom";

export default function HomeIcons() {
  const icons = [
    {
      src: require("../../../assets/metodo-de-pago.png"),
      title: "Metodo de pago",
      a: "/PaymentMethod",
    },
    {
      src: require("../../../assets/pedidos.png"),
      title: "Tus pedidos",
      a: "/Orders",
    },
    {
      src: require("../../../assets/perfil.png"),
      title: "Tu perfil",
      a: "/user-profile",
    },
  ];
  return (
    <div className="container_icons">
      {icons.map((icon, id) => {
        return (
          <div className="container_card">
            <NavLink to={icon.a}>
              <button>
                <img src={icon.src} className="card_img" />
                <p>{icon.title}</p>
              </button>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
