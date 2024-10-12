import React from "react";
import useTitulo from "../hooks/useTitulo";
import "./Contacto.scss";


const Contacto = () => {

  useTitulo('Contacto');
  return (
    <>
    
      <div className ="formulario">
            
            <fieldset className="contacto-formulario__ficha"/>
            <legend className="contacto-formulario__ficha__enunciado">Datos Personales</legend>
            <div>     
            <label>
            <div className="contacto-formulario__ficha-items">Nombre: *</div>  
              <input className="contacto-formulario__ficha-input" type="text" name="nombre" required/>
            </label>
            </div>
            
            
            <div>
            <label>
             <div className="contacto-formulario__ficha-items"> Apellido: *</div>
              <input className="contacto-formulario__ficha-input" type="text" name="Apellido" required/>
            </label>
            </div>
            
            <div>
            <label>
              <div className="contacto-formulario__ficha-items">Documento: *</div>
              <input className="contacto-formulario__ficha-input" type="text" name="Documento" required/>
            </label>
            </div>
        
            <div>
            <label>
              <div className="nacionalidad contacto-formulario__ficha-items">Nacionalidad:*</div> 
              <select className="contacto-formulario__ficha-select" name="Nacionalidad" id="opciones">
                <option value="opcion-1">Argentina</option>
                <option value="opcion-2">Chile</option>
                <option value="opcion-3">Brasil</option>
                <option value="opcion-4">Colombia</option>
              </select>
            </label>
            </div>
        
            <div>
            
           <div className="contacto-formulario__ficha-items">s
              <label >
                 Observaciones 
              </label>
            <div>
              <textarea className="contacto-formulario__ficha-items" name="info" cols="60" rows="3"></textarea>
            </div>  
        
            <div className="contacto-formulario__ficha-items">
              <button className="contacto-formulario__ficha-items__enviar" type="submit">Enviar</button>
            </div>
          </div>     
          </div>
      </div>
           
    </>
   );
 };

 export default Contacto;