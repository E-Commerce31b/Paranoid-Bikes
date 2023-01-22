import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";


export const validate = (input) => {
  let errors = {};

  if (!input.email) {
    errors.email = "Ingrese email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.email)) {
    errors.email = "Ingrese correo electrónico válido";
  }

   return errors;
  }
 


export default function ContactComponent(props) {



  const dispatch=useDispatch();
  const form = useRef();
  const emailRef = useRef();

  

  return (
    <div className=" mb-6 ">
    <div style={{ backgroundColor: "white" }}>
      <div className="navbar-brand "></div>
    </div>
  
    <div className="column has-text-centered">
      <h1 className="title is-3 font_family mt-5">Contactate con nosotros</h1>
    </div>
   
          <form ref={form} onSubmit="">
            <div className="field">
              <label className="label font_family">Nombre</label>
              <input
                className="input"
                type="name"
                name="name"
               
                onChange=""
              ></input>
            </div>
        
            <div className="field">
                <label className="label font_family">Correo electrónico</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  ref={emailRef}
                  onChange=""
                ></input>
              </div>
  
                  
          
            
           
  
            <div className="field">
              <label className="label font_family">Tu mensaje</label>
             <br />
             <textarea name= "message" required></textarea>
             <br />
            </div>
           
            
  
           
  
            <div className="buttons has-text-centered">
              <button className="button is-primary font_family" type="submit">
                Agregar Comentario
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
     
     
        
       
      
    );
  }