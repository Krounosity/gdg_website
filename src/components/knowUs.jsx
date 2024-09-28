import React from "react";

function KnowUs({ title, image, color, content, alignment }) {
    return (
        <div className="knowUs">
            <h2>{title}</h2>
            <div>
                <img src={image} alt={title} />
                <div>
                    <p style={{ textAlign: alignment }}>{content}</p>
                    <div className="border" style={{ backgroundColor: color }}></div>
                </div>
            </div>
        </div>
    );
}

export default KnowUs;
