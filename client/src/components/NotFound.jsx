import { React } from "react";
import logo from "../assets/bikeNotFound.png";


export default function NotFound (){
    return (
        <div style={{color:'white', textAlign:'center'}}>
            <h1 style={{ fontSize: '30px' }}>Bike no encontrada</h1>
            <p>Lo sentimos, la categoria no existe.</p>
            <img src={logo} alt="BikeNotFound" style={{ height: '500px' }}/>
        </div>
    )
    };
