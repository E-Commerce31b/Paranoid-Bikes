import React from "react";
import "./homeIcons.css";

export default function HomeIcons() {
  const icons = [
    {
      src: require("../../../assets/metodo-de-pago.png"),
      title: "Metodo de pago",
    },
    {
      src: require("../../../assets/pedidos.png"),
      title: "Tus pedidos",
    },
    {
      src: require("../../../assets/perfil.png"),
      title: "Tu perfil",
    },
  ];
  return (
    <div className="container_icons">
      {icons.map((icon) => {
        return (
          <div className="container_cards">
            <button>
              <img src={icon.src} className="card_img" />
              <p>{icon.title}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}
