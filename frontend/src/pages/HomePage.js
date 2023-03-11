import React from "react";
import '../styles/home.css';

const HomePage = (props) => {
    return (
        <main class="holder">
        <div>
            
        </div>
        <div class="columnas">
            <section class="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae distinctio architecto tempore voluptatem accusamus, sequi veritatis, nemo quas ab reiciendis illo tenetur inventore consectetur quo ad dolore delectus sit. Praesentium.</p>
            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Simplemente excelente</span>
                    <span class="autor">Juan Gomez - zapatos.com</span>
                </div>
            </section>
        </div>
    </main>
    );
}

export default HomePage;