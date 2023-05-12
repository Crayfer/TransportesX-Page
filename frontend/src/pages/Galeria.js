/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import '../styles/galeria.css'

const Galeria = (props) => {
    return (
        <main class="holder">
            <br />
            <h2 className="g">Galería</h2>
        <div class="galeria">
            <img src="img/g1.jpg" alt="Img 1"/>
            <img src="img/g2.jpg" alt="Img 2"/>
            <img src="img/g3.jpg" alt="Img 3"/>
            <img src="img/g4.jpg" alt="Img 4"/>
            <img src="img/g5.jpg" alt="Img 5"/>
            <img src="img/g6.jpg" alt="Img 6"/>
            <img src="img/g7.jpg" alt="Img 7"/>
            <img src="img/g8.jpg" alt="Img 8"/>
            <img src="img/g9.jpg" alt="Img 9"/>
            <img src="img/g10.jpg" alt="Img 10"/>
        </div>
    </main>
    );
}

export default Galeria;