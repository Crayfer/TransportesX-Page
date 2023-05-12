import React from "react";
import '../styles/home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
        <div>
            
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <br />
                <h2 className="g">Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae distinctio architecto tempore voluptatem accusamus, sequi veritatis, nemo quas ab reiciendis illo tenetur inventore consectetur quo ad dolore delectus sit. Praesentium.</p>
            </section>
            <section className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Gomez - zapatos.com</span>
                </div>
            </section>
        </div>
    </main>
    );
}

export default HomePage;