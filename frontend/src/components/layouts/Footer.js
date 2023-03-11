import React from "react";

const Footer = (props) => {
    return (
      <footer>
        <p>Copyright 2023</p>
        <p>Prueba de props: {props.texto}</p>
      </footer>
    );
}

export default Footer;