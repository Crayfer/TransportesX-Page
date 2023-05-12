import React from "react";
import '../styles/nosotros.css';

const Nosotros = (props) => {
    return (
      <main className="holder">
        <br />
        <div className="historia">
            <h2 className="g">Historia</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, reprehenderit at. Dicta in nam nesciunt facere tenetur explicabo similique. Fuga dolorem vel temporibus doloribus exercitationem. A, excepturi! Suscipit, nemo quidem.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum quos ex perspiciatis in sed eum, officiis ratione veniam nostrum sunt cupiditate facilis dolor asperiores facere modi accusamus, perferendis nulla.</p>
        </div>
        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/Matt Murdock.jpg" alt="Matt Murdock"/>
                    <h5>Matt Murdock</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque quidem provident corrupti consequatur, ab tempora qui nemo ullam hic laboriosam delectus perspiciatis consequuntur ea repellat cupiditate voluptatum accusamus fuga!</p>
                </div>
                <div className="persona">
                    <img src="img/James Wesley.jpg" alt="James Wesley"/>
                    <h5>James Wesley</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque quidem provident corrupti consequatur, ab tempora qui nemo ullam hic laboriosam delectus perspiciatis consequuntur ea repellat cupiditate voluptatum accusamus fuga!</p>
                </div>
                <div className="persona">
                    <img src="img/Karen Page.jpg" alt="Karen Page"/>
                    <h5>Karen Page</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque quidem provident corrupti consequatur, ab tempora qui nemo ullam hic laboriosam delectus perspiciatis consequuntur ea repellat cupiditate voluptatum accusamus fuga!</p>
                </div>
                <div className="persona">
                    <img src="img/Foggy Nelson.jpg" alt="Foggy Nelson"/>
                    <h5>Foggy Nelson</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque quidem provident corrupti consequatur, ab tempora qui nemo ullam hic laboriosam delectus perspiciatis consequuntur ea repellat cupiditate voluptatum accusamus fuga!</p>
                </div>
                <div className="persona">
                    <img src="img/Dinah Madani.jpg" alt="Dinah Madani"/>
                    <h5>Dinah Madani</h5>
                    <h6>Gerente Logística</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque quidem provident corrupti consequatur, ab tempora qui nemo ullam hic laboriosam delectus perspiciatis consequuntur ea repellat cupiditate voluptatum accusamus fuga!</p>
                </div>
            </div>
        </div>
    </main>
    );
}

export default Nosotros;