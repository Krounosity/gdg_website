import React from "react";

function FAQ({question, answer, color}){
    return(
        <>
            <div className="question">
                <h2>{question}</h2>
            </div>

            <div className="answer">
                <div className="left-border"></div>
                <p>{answer}</p>
            </div>
        </>
    )
}

export default FAQ;