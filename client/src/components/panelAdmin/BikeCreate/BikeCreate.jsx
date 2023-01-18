import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postProduct } from "../../../redux/slices/productsActions";
import Select from "react-select";


export const validate = (input) => {
    let errors = {};
    if(!input.name){
        errors.name= "Ingrese nombre de bici"
    }
    if(!input.gender){
        errors.gender = "Ingrese genero de la bici"
    }
    if(!input.category){
        errors.category = "Ingrese una categoria"
    }
    return errors;
}
export default function BikeCreate() {
    const form = useRef();
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const [input, setInput] = useState({
        name: "",
        gender: "",
        category: "",
        maker: "",
        image: "",
        priceAmount: "",
        year:""
      });
     
      const [formErrors, setFormErrors] = useState({
        name: "",
        gender: "",
        category: "",
        maker: "",
        image: "",
        priceAmount: "",
        year:"",
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
      
      return (
        <div className=" mb-6 ">
          <div style={{ backgroundColor: "white" }}>
            <div className="navbar-brand "></div>
          </div>
    
          <div className="column has-text-centered">
            <h1 className="title is-3 font_family mt-5">Agregar Bicicletas</h1>
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
                  <div className="field">
                    <label className="label font_family">Genero</label>
                    <input
                      className="input"
                      type="gender"
                      name="gender"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="field">
                    <label className="label font_family">Creador</label>
                    <input
                      className="input"
                      type="maker"
                      name="maker"
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
                    <label className="label font_family">Año</label>
                    <input
                      className="input"
                      type="year"
                      name="year"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="field">
                    <label className="label font_family">Categoria</label>
                    <input
                      className="input"
                      type="category"
                      name="category"
                 
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="field">
                    <label className="label font_family">Imagen</label>
                    <input
                      className="input"
                      type="image"
                      name="image"
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="buttons has-text-centered">
                    <button className="button is-primary font_family" type="submit">
                      Agregar
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
    