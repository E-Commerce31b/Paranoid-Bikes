import React from "react";

export default function AboutUs() {
  return (
    <div className="backgroundColor">
      <div>
        <div className="column has-text-centered">
          <h1 className="title is-3 font_family mt-5">Paranoid Bikes</h1>
        </div>
        <div className="column has-text-centered">
          <h1 className="title is-4 font_family mt-5">
            Nuestros Desarrolladores:
          </h1>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Andrea Barrera
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Ella es <strong className="has-text-white">Andrea</strong> y
                después de obtener su título en licenciatura en Inglés y
                trabajar como profesora por 10 años, decidió seguir su sueño de
                convertirse en desarrolladora web. Para ello comenzó (y
                actualmente está culminando) sus estudios en desarrollo web en
                Soy Henry.
              </p>
              <p>
                <strong className="has-text-white">Licenciada en Inglés</strong>{" "}
                y{" "}
                <strong className="has-text-white">
                  Desarrolladora Web Front-End.
                </strong>{" "}
                Es la responsable del diseño y la mayoría de los estilos y
                animaciones de la página.
              </p>
            </div>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Andrea.jpeg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Andres.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Andrés Garzón
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es <strong className="has-text-white">Andres.</strong>{" "}
                Desarrollador Front-end, encargado de las validaciones de
                autentication y autorizacion con Firebase y JWT (user-admin)
                desde el front. Baneo logico de perfiles. Autenticacion de
                terceros (Google / Gmail). Actualizacion de datos desde el
                front. Desarrollo de componentes para el analisis de datos del
                dashboard de administrador.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Facundo Lopez
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es <strong className="has-text-white">Facundo</strong>{" "}
                Desarrollador Frondtend. De Buenos Aires, Argentina.
                conociminetos de React js, Javascript, CSS y Redux. Se encargo
                de Estilos, cards y listado de productos, y ayudó en el
                dashboard Y las reviews
              </p>
            </div>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Facundo.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/German.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Germán Horianski
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es <strong className="has-text-white">Germán.</strong>{" "}
                Abogado y front-end developer. Realizó la integración completa
                de del front con el back de Paranoid-bikes mediante Redux
                Toolkit, hizo los filtros combinados, la SearchBar, las listas
                de productos, el carrito (incluyendo la librería
                react-toastify), la lógica de "Más Vendidos", y de "Historial".
                Colaboró con la U.I. aportando ideas. Coordinó al equipo, armó
                la estructura del Figma (sin estilos), y realizó la demo final
                del proyecto para aprobar la etapa de Proyecto Final del
                bootcamp SoyHenry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Amadeo Moreno
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es <strong className="has-text-white">Amadeo Moreno.</strong>{" "}
                Visitador medico y front-end developer. Ideó el nombre de la
                marca y su logo, apuntó a crear un e-commerce con venta de
                bicicletas que es un nicho de mercado ecologico. Armó la
                estructura en Trello. En un principio encargó de el SignUp y
                luego de los formularios de creacion de bicicletas y de el
                manejo de errores, además del componente "ContactUs", y ayudando
                a debugear la aplicacion.
              </p>
            </div>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Amadeo.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Juan.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Juan Lopez
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es <strong className="has-text-white">Juan.</strong> Mecánico
                industrial apasionado por el desarrollo front end. Se encargó de
                la navegación entre componentes, aportando tanto en la parte de
                la UI/UX comno en la diligencia del proyecto, tuvo aportes en el
                debug de la página y participó en en la realización del panel
                admin tanto como en la estructura como en la lógica tuvo
                colaboración general con todos los compañeros del proyecto. Hizo
                la lógica del guardado en la nube de las imagenes por medio de
                la plataforma Cloudinary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Rodrigo Santesteban
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es{" "}
                <strong className="has-text-white">Rodrigo. </strong>
                Desarrollador Back-End, responsable de la
                creación de la base de datos y del servidor, de la pasarella de
                pagos y del deploy de back.
              </p>
            </div>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Rodrigo.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-1"></div>
        <div className="column is-5 mt-5 mb-3">
          <div className="level-item has-text-centered">
            <figure className="image mt-5">
              <img
                style={{ height: "400px", width: "auto" }}
                src={require(`../assets/Sebastian.jpg`)}
                alt="Img not found"
              />
            </figure>
          </div>
        </div>
        <div className="column is-5 mt-5 mb-3">
          <div className="content is-size-5 has-text-white is-family-sans-serif ">
            <div className="column has-text-centered">
              <h1 className="title is-5 font_family mt-5 has-text-white">
                Sebastián Aguiar
              </h1>
            </div>
            <div className="has-text-justified">
              <p>
                Él es <strong className="has-text-white">Sebastián.</strong>{" "}
                Desarrollador Back-End. Responsable de la creación y
                mantenimiento de las rutas y modelos usando ExpressJS y
                mongoose. Responsable de la validacion de Tokens y de la
                implementación de los baneos de usuarios y administradores.
                También colaboró con el debugging de componentes del front-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
