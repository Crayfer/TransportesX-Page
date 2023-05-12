import React from "react";
import { Link } from "react-router-dom";
import '../styles/contacto.css';
import { useState } from "react";
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
      <main class="holder contacto">
        <div>
            <br />
            <h2 className="g">Contacto Rápido</h2>
            <form action="/contacto" method="post" onSubmit={handleSubmit} class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} 
                    onChange={handleChange}/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name="email" value={formData.email} 
                    onChange={handleChange}/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} 
                    onChange={handleChange}/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} 
                    onChange={handleChange}></textarea>
                </p>                
                <p>
                    <input type="submit" value="Enviar"/>
                </p> 
            </form>
            
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}

        </div>
        <div class="datos">
            <br />
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