import React from "react";

export default function AboutUs() {
  return (
    <div className="backgroundColor">
      <div>
        <div className="column has-text-centered">
          <h1 className="title is-3 font_family mt-5">Paranoid Bikes</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          {/* <div className="card"> */}
          <div className="content is-small has-text-white">
            <div className="has-text-justified">
              <p>
                Bienvenido a{" "}
                <strong className="has-text-white">Paranoid Bikes</strong> , la
                red más relevante del mundo para todo lo relacionado con la
                bicicleta y el ciclismo, somos un Marketplace en línea fundado
                en 2020 en Buenos Aires (Argentina) por los los estudiantes de
                la cohorte 31B, quienes se embarcaron en la misión de crear un
                sitio en línea para todo lo relacionado con las bicicletas.
                Mucho ha sucedido en los últimos años, y esa pequeña idea se ha
                convertido en una compañía internacional con más de 100
                empleados en nueve países como: Nueva Zelanda, Alemania,
                Bélgica, Luxemburgo, Estados Unidos, Inglaterra, Irlanda y ahora
                Colombia.
              </p>
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
                En 2020 los estudiantes de la cohorte 31B crearon esta compañía
                como pionera del ciclismo en el país. El objetivo de nuestra
                empresa es entregar al mercado una amplia variedad en las
                mejores marcas de bicicletas y accesorios, para la práctica del
                ciclismo en sus diferentes modalidades tales como: Montaña, Ruta
                y BMX. Atendiendo y desarrollando estrategias enfocadas las
                necesidades de sus clientes de acuerdo a las distintas etapas de
                su vida.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="column is-5 mt-5 mb-3">
          <figure class="image is-16by9">
            <img
              src={require(`../assets/tienda-bici.jpeg`)}
              alt="Img not found"
            />
          </figure>
        </div>
      </div>
      <div className="columns mb-6">
        <div className="column is-1"></div>
        <div className="column is-5 mt-3 mb-3">
          <figure class="image is-16by9">
            <img
              src={require(`../assets/tienda-bici2.jpg`)}
              alt="Img not found"
            />
          </figure>
        </div>
        <div className="column is-5 mt-3 mb-3">
          <div className="content is-small has-text-white">
            <div className="has-text-justified">
              <p>
                En 2020 los estudiantes de la cohorte 31B crearon esta compañía
                como pionera del ciclismo en el país. El objetivo de nuestra
                empresa es entregar al mercado una amplia variedad en las
                mejores marcas de bicicletas y accesorios, para la práctica del
                ciclismo en sus diferentes modalidades tales como: Montaña, Ruta
                y BMX. Atendiendo y desarrollando estrategias enfocadas las
                necesidades de sus clientes de acuerdo a las distintas etapas de
                su vida.
              </p>
              <p>
                Finalizando el 2020, la empresa se consolidó como una de las
                mejores marcas en el país, posicionándose entre los cinco
                primeros puestos gracias a su versatilidad y (pensando siempre
                en el bienestar de sus clientes) la importación de grandes
                marcas en el mercado mundial.
              </p>
              <p>
                Paranoid Bikes reúne en un solo lugar todo lo relacionado con la
                bicicleta, sus componentes, accesorios, ropa, nutrición, eventos
                y servicios, permitiéndote la oportunidad de explorar todas las
                opciones imaginables de productos, a los mejores precios,
                facilidad y conveniencia.
              </p>
              <p>
                En un mundo de ventas que cambia rápidamente, ofrecemos una
                solución que ayudara a los distribuidores, marcas y tiendas a
                hacer su transición al mundo digital y ventas en línea, además
                facilitando un canal altamente segmentado donde los consumidores
                están comprando activamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
