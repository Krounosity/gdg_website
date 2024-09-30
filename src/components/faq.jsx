import React from "react";
import '../styles/faq.sass';

function FAQ({question, answer, color, height}){
    return(
        <div className="faq">
            <div className="question">
                <h2>{question}</h2>
            </div>

            <div className="answer">
                <div className="left-border" style={{backgroundColor: color, height: height}}></div>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FAQ;