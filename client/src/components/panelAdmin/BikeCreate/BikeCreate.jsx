import React, { useEffect, useRef, useState } from "react";
import { postProduct } from "../../../../src/redux/slices/adminActions";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./bikeCreate.css";
import Swal from "sweetalert2";


function validate(input) {
  var errors = {};
  if(!input.name){
      errors.name = 'El nombre es requerido';
  } else if (input.name.length > 100 ){
      errors.name = "Nombre demasiado largo (Max = 100 caracteres)"
  }
  if(!input.category) {
      errors.description = 'Requiere Descripcion';
  }if(!input.year){
      errors.year = 'Requiere año'
  }if(!input.gender[0]) {
      errors.gender = "Genero es requerido"
  }if(!input.image) {
      errors.image = "Requiere una imagen"
  }  if (!input.priceAmount){
      errors.priceAmount = 'Precio es requerido'
  }if (!input.maker){
    errors.maker='Requiere una marca'
  }if(!input.category[0]) {
    errors.category = "Categoria es requerida"
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
      Swal.fire({
        title: 'Listo!',
        text: 'Bicicleta creada con exito',
        icon: 'success',
        confirmButtonText: 'Continuar'
      })
      navigate("/panel"); /// cambiar a ruta user
    } catch {
      setError("Error al crear la cuenta");
    }
  }
  const [image, setImage] = useState("");
  const [minImage, setMiniImage] = useState("");

  useEffect(() => {
    if (image) {
      console.log("entra");
      submitImage();
    }
  }, [image]);

  const submitImage = () => {
    console.log("entra2");
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
        setMiniImage(data.url);
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
          className="column is-6 mt-5 has-background-white padding_container_create_bikes"
          style={{ borderRadius: "10px" }}
        >
          <div>
            {error && (
              <p className="notification is-danger is-light ">{error}</p>
            )}
           
            <form ref={form} onSubmit={handleSubmit}>
          <div className="field">
            <label className="label font_family" >Nombre</label>
      
            <input
              className="input"
              type="text"
              name="name"
              required
              onChange={handleInputChange}
            ></input>
                  {formErrors.name && (
              <p className="is-size-7-desktop notification is-danger is-light ">
                {formErrors.name}
              </p>
            )}
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
                  
                 <label className="label font_family" >Genero: </label>
                    <select name='gender' onChange={(e) => handleInputChange(e)} required>
                        <option hidden value="gender" >---</option>
                        {
                           allGenders.map((e, i) => (
                                <option key={i} value={e}>{e}</option>
                            ))
                        }
                    </select>
                    {formErrors.gender && (
              <p className="is-size-7-desktop notification is-danger is-light">
                {formErrors.gender}
              </p>
            )}
                 </div>
                 <div className="field">
                 <label className="label font_family">Categoria: </label>
                    <select name='category' onChange={(e) => handleInputChange(e)} required>
                        <option hidden value="category">---</option>
                        {
                           allCategories.map((e, i) => (
                                <option key={i} value={e}>{e}</option>
                            ))
                        }
                    </select>
                    {formErrors.category && (
              <p className="is-size-7-desktop notification is-danger is-light">
                {formErrors.category}
              </p>
            )}
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
              required
            ></input>
             
             {formErrors.maker && (
              <p className="is-size-7-desktop notification is-danger is-light">
                {formErrors.maker}
              </p>
            )}
          </div>
          <div className="field">
            <label className="label font_family">Precio</label>
            <input
              className="input"
              type="priceAmount"
              name="priceAmount"
             required
              onChange={handleInputChange}
            ></input>
              
              {formErrors.priceAmount && (
              <p className="is-size-7-desktop notification is-danger is-light">
                {formErrors.priceAmount}
              </p>
            )}
          </div>


          <div className="field">
            <label className="label font_family">Año de lanzamiento</label>
            <input
              className="input"
              type="year"
            required
              onChange={handleInputChange}
              placeholder="ej: 2021"
              name="year"
            ></input>
 
               {formErrors.year && (
                  <p className="is-size-7-desktop notification is-danger is-light">
                    {formErrors.year}
                  </p>
                )}
            
          </div>
              <div className="pb-6 flex is-flex-direction-row">
                <div>
                  <label className="label_image" for="imagen">
                    Seleccionar Imagen
                  </label>
                  <input
                    className="button "
                    type="file"
                    name="imagen"
                    id="imagen"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className=" container_image_bike_create">
                  {minImage ? <img src={minImage} width={80} /> : <></>}
                </div>
              </div>

              <div className="buttons has-text-centered">
                <button className="button is-primary font_family" type="submit">
                  Agregar Bici
                </button>
                <Link to="/panel">
                  <button className="button is-light font_family" type="submit">
                    Cancelar
                  </button>
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
