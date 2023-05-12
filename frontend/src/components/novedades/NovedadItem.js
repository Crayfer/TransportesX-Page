import React from "react";

const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;

    return (
        <div className="novedades">
            <br />
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className="centrado">
                <img src={imagen} alt={imagen} />
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    )
}

export default NovedadItem;