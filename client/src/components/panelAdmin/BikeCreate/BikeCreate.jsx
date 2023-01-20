import React, { useRef, useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { postProduct } from "../../../../src/redux/slices/productsActions";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "ingrese nombre de bici";
  }
  return errors;
};

export default function BikeCreate() {
  const form = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    gender: [],
    category: [],
    maker: "",
    image: "",
    priceAmount: "",
    year: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    gender: [],
    category: [],
    maker: "",
    image: "",
    priceAmount: "",
    year: "",
  });
  const allGenders = useSelector((state) => state.products.genders);
  const allCategories = useSelector((state) => state.products.categories);
  function handleDeleteGender(el) {
    setInput({
      ...input,
      gender: allGenders.filter((param) => param !== el),
    });
  }

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;
    setInput({ ...input, [property]: value });
    setFormErrors(validate({ ...input, [property]: value }));
  };
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      dispatch(postProduct(input));
      alert("Bicicleta creada con exito!");

      navigate("/"); /// cambiar a ruta user
    } catch {
      setError("Error al crear la cuenta");
    }
  }
  const [image, setImage] = useState("");
  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "paranoidbikes");
    data.append("cloud_name", "diff71vig");

    fetch("https://api.cloudinary.com/v1_1/diff71vig/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInput({
          ...input,
          image: data.url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" mb-6 ">
      <div style={{ backgroundColor: "white" }}>
        <div className="navbar-brand "></div>
      </div>

      <div className="column has-text-centered">
        <h1 className="title is-3 font_family mt-5">Agregar bicicletas</h1>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div
          className="column is-6 mt-5 has-background-white"
          style={{ borderRadius: "10px" }}
        >
          <div>
            {error && (
              <p className="notification is-danger is-light ">{error}</p>
            )}
            {formErrors.name && (
              <p className="is-size-7-desktop notification is-danger is-light ">
                {formErrors.name}
              </p>
            )}
            {formErrors.gender && (
              <p className="is-size-7-desktop notification is-danger is-light">
                {formErrors.gender}
              </p>
            )}
            <form ref={form} onSubmit={handleSubmit}>
              <div className="field">
                <label className="label font_family">Nombre</label>
                <input
                  className="input"
                  type="name"
                  name="name"
                  onChange={handleInputChange}
                ></input>
              </div>
              {/*  <div className="field">
            <label className="label font_family">Genero</label>
            <input
              className="input"
              type="gender"
              name="gender"
            
              onChange={handleInputChange}
            ></input>
          </div> */}

              <div className="field">
                <label className="label font_family">Genero: </label>
                <select name="gender" onChange={(e) => handleInputChange(e)}>
                  <option hidden value="gender">
                    Genero
                  </option>
                  {allGenders.map((e, i) => (
                    <option key={i} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label className="label font_family">Categoria: </label>
                <select name="category" onChange={(e) => handleInputChange(e)}>
                  <option hidden value="category">
                    Categoria
                  </option>
                  {allCategories.map((e, i) => (
                    <option key={i} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
              {/*  <div className="field">
                        {allGenders.map((e,i) =>
                            <div key={e} className="field">
                               
                                <div key={e}>
                                    {e}
                                </div>
                                <div key={i}  type="button"  onClick={() => {
                                    handleDeleteGender(e)
                                }}>x</div>
                            </div>)}
                    </div> */}

              <div className="field">
                <label className="label font_family">Marca</label>
                <input
                  className="input"
                  type="maker"
                  name="maker"
                  /*  ref={emailRef} */
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="field">
                <label className="label font_family">Precio</label>
                <input
                  className="input"
                  type="priceAmount"
                  name="priceAmount"
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className="field">
                <label className="label font_family">
                  Fecha de lanzamiento
                </label>
                <input
                  className="input"
                  type="year"
                  onChange={handleInputChange}
                  name="year"
                ></input>
              </div>
              <div>
                <input
                  type="file"
                  className="input"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <button onClick={submitImage} type="button">
                  Subir Imagen
                </button>
              </div>

              <div className="buttons has-text-centered">
                <button className="button is-primary font_family" type="submit">
                  Agregar Bici
                </button>

                <Link to="/">
                  <p className="button is-light font_family" type="submit">
                    Cancelar
                  </p>
                </Link>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
