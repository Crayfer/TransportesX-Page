import React from "react";
import '../styles/servicios.css';

const Servicios = (props) => {
    return (
        <main className="holder">
            <br />
        <h2 className="g">Servicios</h2>
        <div className="servicios">
            <img src="img/tren.jpg" alt="Tren"/>
            <div className="info">
                <h4>Transporte ferroviario</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ad, sequi error ratione cupiditate at molestiae
                    accusantium adipisci beatae? Consequatur nemo excepturi sit quidem nam, aspernatur reprehenderit ipsa placeat quos?
                </p>
            </div>
        </div>
        <div className="servicios">
            <img src="img/avion.jpg" alt="Avión"/>
            <div className="info">
                <h4>Transporte aéreo</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ad, sequi error ratione cupiditate at molestiae
                    accusantium adipisci beatae? Consequatur nemo excepturi sit quidem nam, aspernatur reprehenderit ipsa placeat quos?
                </p>
            </div>
        </div>
        <div className="servicios">
            <img src="img/maritimo.jpg" alt="Marítimo"/>
            <div className="info">
                <h4>Transporte marítimo</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ad, sequi error ratione cupiditate at molestiae
                    accusantium adipisci beatae? Consequatur nemo excepturi sit quidem nam, aspernatur reprehenderit ipsa placeat quos?
                </p>
            </div>
        </div>
        <div className="servicios">
            <img src="img/bondi.jpg" alt="Colectivos"/>
            <div className="info">
                <h4>Transporte terrestre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ad, sequi error ratione cupiditate at molestiae
                    accusantium adipisci beatae? Consequatur nemo excepturi sit quidem nam, aspernatur reprehenderit ipsa placeat quos?
                </p>
            </div>
        </div>
    </main>
    );
}

export default Servicios;