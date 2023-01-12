import React from "react";
import { Link } from "react-router-dom";

export default function FormAdmins() {
  return (
    <div>
      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-5">Crear Administrador</h1>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div
          className="container box"
          style={{
            marginTop: "20px",
          }}
        >
          <div className="column is-12 mb-6">
            <div className="field">
              <label className="label has-text-black">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g Alex Smith"
                />
              </div>
            </div>

            <div className="field">
              <label className="label has-text-black">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
            </div>
            <div className="buttons has-text-centered mt-5">
              <p className="button is-primary font_family" type="submit">
                Crear
              </p>

              <Link to="/">
                <p className="button is-light font_family" type="submit">
                  Cancelar
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="column is-3"></div>
      </div>
    </div>
  );
}
