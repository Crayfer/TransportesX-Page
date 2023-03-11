import React from "react";
/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav> 
            <div class="holder">
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "actual" : undefined}>Home</NavLink></li>
                    <li><NavLink to="Nosotros" className={({ isActive }) => isActive ? "actual" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="Servicios" className={({ isActive }) => isActive ? "actual" : undefined}>Servicios</NavLink></li>
                    <li><NavLink to="galeria" className={({ isActive }) => isActive ? "actual" : undefined}>Galeria</NavLink></li>
                    <li><NavLink to="novedades" className={({ isActive }) => isActive ? "actual" : undefined}>Novedades</NavLink></li>
                    <li><NavLink to="contacto" className={({ isActive }) => isActive ? "actual" : undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;