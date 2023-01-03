import React from "react";
import { NavLink } from "react-router-dom";
import "./homeIcons.css";

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
      a: "/Profile",
    },
  ];
  return (
    <div className="container_icons">
      {icons.map((icon) => {
        return (
          <div className="container_cards">
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
