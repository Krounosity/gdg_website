import React from "react";
import '../styles/know_us.sass';

function KnowUs({ title, image, color, content, alignment }) {
    return (
        <div className="knowUs">
            <h2 className="knowH2">{title}</h2>
            <hr className="horizontal_rule" style={{backgroundColor: color}}></hr>
            <div className="infoBlock">
                <img src={image} alt={title} />
                <p style={{ textAlign: alignment }}>{content}</p>
            </div>
        </div>
    );
}

export default KnowUs;
