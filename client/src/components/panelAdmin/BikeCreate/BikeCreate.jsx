import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller, set } from "react-hook-form";
import { postProduct } from "../../../../src/redux/slices/productsActions";

export const validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "ingrese nombre de bici";
  }
};
export default function BikeCreate() {
  const form = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    name: "",
    gender: "",
    category: "",
    maker: "",
    img: "",
    priceAmount: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    genre: "",
    category: "",
    maker: "",
  });
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
          img: data.url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("input", input);

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="field">
          <label className="label font_family">Nombre</label>
          <input
            className="input"
            type="name"
            name="name"
            /*  ref={emailRef} */
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="field">
          <label className="label font_family">Genero</label>
          <input
            className="input"
            type="genre"
            name="genre"
            /*  ref={emailRef} */
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="buttons has-text-centered">
          <button className="button is-primary font_family" type="submit">
            Registrarse
          </button>

          <Link to="/">
            <p className="button is-light font_family" type="submit">
              Cancelar
            </p>
          </Link>
        </div>
      </form>
      <div>
        <input
          type="file"
          className="input"
          name="img"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button onClick={submitImage}>Subir Imagen</button>
      </div>
    </div>
  );
}
