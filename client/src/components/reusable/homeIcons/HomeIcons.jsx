import React from "react";
import "./homeIcons.css";
import { Link } from "react-router-dom";

export default function HomeIcons() {
  const icons = [
    {
      src: require("../../../assets/metodo-de-pago.png"),
      title: "Metodo de pago",
      link: "/metodo-de-pago",
    },
    {
      src: require("../../../assets/pedidos.png"),
      title: "Tus pedidos",
      link: "/pedidos",
    },
    {
      src: require("../../../assets/perfil.png"),
      title: "Tu perfil",
      link: "/user-profile",
    },
  ];
  return (
    <div className="container_icons">
      {icons.map((icon, id) => {
        return (
          <div className="container_cards" id={id}>
            <Link to={icon.link}>
              <button>
                <img src={icon.src} className="card_img" />
                <p>{icon.title}</p>
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
