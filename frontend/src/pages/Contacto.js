import React from "react";
import { Link } from "react-router-dom";
import '../styles/contacto.css';

const Contacto = (props) => {
    return (
      <main class="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p> 
            </form>
        </div>
        <div class="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También puede contactarse con nosotros a través de los siguientes medios:</p>
            <ul>
                <li>Teléfono: 3547613210</li>
                <li>Email: joakoaltamirano55@gmail.com</li>
                <li><Link to="/">Instagram</Link></li>
            </ul>
        </div>
    </main>
    );
}

export default Contacto;