import React from "react";

export default function AboutUs() {
  return (
    <div className="backgroundColor">
      <div>
        <div className="column has-text-centered">
          <h1 className="title is-3 font_family mt-3">Sobre nosotros</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-3 mb-3">
          {/* <div className="card"> */}
          <div className="content is-small has-text-white">
            <h3 className="has-text-white has-text-centered">Paranoid Bikes</h3>
            <div className="has-text-justified">
              <p>
                ¡En <strong className="has-text-white">Paranoid Bikes</strong>{" "}
                amamos tu pasión! Las mejores marcas de ciclismo del mundo en un
                solo lugar desde 2022. La bicicleta es el medio de transporte
                más eficiente que existe, ayuda a combatir el cambio climático,
                alivia el tráfico urbano, te permite estar en forma y descubrir
                lugares que de otra forma jamás hubieras conocido, nos une y al
                mismo tiempo nos sirve de vía de escape.
              </p>
              <p>
                En 2022 los estudiantes de la cohorte 31B crearon esta compañía
                como pionera del ciclismo en el país. El objetivo de nuestra
                empresa es entregar al mercado una amplia variedad en las
                mejores marcas de bicicletas y accesorios, para la práctica del
                ciclismo en sus diferentes modalidades tales como: Montaña, Ruta
                y BMX. Atendiendo y desarrollando estrategias enfocadas las
                necesidades de sus clientes de acuerdo a las distintas etapas de
                su vida.
              </p>
              <p>
                Finalizando el 2022, la empresa se consolidó como una de las
                mejores marcas en el país, posicionándose entre los cinco
                primeros puestos gracias a su versatilidad y (pensando siempre
                en el bienestar de sus clientes) la importación de grandes
                marcas en el mercado mundial.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="column is-5 mt-3 mb-3">
          <div class="card">
            <div class="card-image">
              <figure class="image is-16by9">
                <img
                  src={require(`../assets/tienda-bici.jpeg`)}
                  alt="Img not found"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
