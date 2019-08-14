import React, { useState } from "react";


const Card = (props) => {
    return (
    <div className="newCard" key={props.id}> 
        <h1> Photo of the Day: {props.title}</h1>
        <h2>{props.date}</h2>
        <p>{props.explanation}</p>
        <img className="nasa-img" alt="dailyphoto" src={props.url}/>
    </div>
    );
};

export default Card;