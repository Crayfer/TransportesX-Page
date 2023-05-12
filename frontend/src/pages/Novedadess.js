import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/novedades/NovedadItem";

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    console.log(novedades);

    return (
        <section className="holder">
            <br />
            <h2 className="g">Novedades:</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                //Object.keys(novedades).map(item => console.log(item.titulo))
                //novedades.map(item => console.log(typeof item))
                novedades.map(item =>
                <NovedadItem key={item.id} 
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    )
}

export default NovedadesPage;

/* <NovedadItem key={item.id} 
title={item.titulo} subtitle={item.subtitulo}
imagen={item.img_id} body={item.cuerpo} />*/