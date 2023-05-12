import React, { useState, useEffect } from "react";
import '../../styles/layout.css'

const Prueba = (props) => {

    const [contador, setContador] = useState(0);

    const [condition, setCondition] = useState(true);

    const [error, setError] = useState("");


    const initialProduct = {
        title: "Título original",
        description: "Descripción original"
    }

    const [product, setProduct] = useState(initialProduct);

    const updateP = (prop, valor) => {
        setProduct({
            ...product,
            [prop]: valor,
        })
    }

    const initialCart = [
        { id: 1, title: "Producto", description: "Descripción"},
        { id: 2, title: "Producto 2", description: "Descripción 2"},
        { id: 3, title: "Producto 3", description: "Descripción 3"}
    ]

    const [cart, setCart] = useState(initialCart);

    
    const borrarP = (num) => {
        const newCart = cart.filter(prod => prod.id !== num)
        setCart(newCart)
    }

    
    const agregar = (newProduct) => {
        newProduct.id = Date.now();

        const newCart = [
            ...cart,
            newProduct
        ]
        setCart(newCart);
    }

    
    const update = (editP) => {
        const newCart = cart.map(prod => prod.id === editP.id ? editP : prod)
        setCart(newCart)
    }

    //Primera prueba de useEffect usando botón de condition:

    useEffect(() => {
        console.log("Pruebita uwu")
        return () => {
            console.log("cleanup Pruebita uwu") //Esto se ejecutará cada vez que el state cambie
                                               //y cada vez que el componente se desmonte
        }
    }, [condition]);

    //Segunda prueba de useEffect usando ancho de la pantalla:

    const [ancho, setAncho] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", function() {
            setAncho(window.innerWidth)
        })
    }, []);

    const isMobile = window.innerWidth < 768

    return (
        <div className="holder">

            {contador}
            <br/>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        
            <br/>

            <button onClick={() => setCondition(!condition)}>Toggle</button>
            { condition && <h1>Activado</h1> }
  
            <br/>

            <button onClick={() => setError("Error en aplicación")}>Error</button>
            <button onClick={() => setError("")}>Sin errores</button>
            { error && <h1>{error}</h1> }

            <br/>

            <button onClick={() => updateP("title", "New title")}>Actualizar producto</button>
            <button onClick={() => setProduct(initialProduct)}>Desactualizar producto</button>
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <br/>
        

            <button onClick={() => agregar({title: "Producto 4", description: "Descripción 4"})}>Agregar</button>
            <div>{cart.map(product => 
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => borrarP(product.id)}>Borrar</button>
                    <button onClick={() => update({id: product.id, title:"No se"})}>Actualizar</button>
                </div>)}
            </div>
            <h2>El ancho de la pantalla es de {ancho} píxeles</h2>
            { isMobile &&
                <h2>Tamaño de dispositivos móviles</h2>
            }
        </div>
    );
}

export default Prueba;