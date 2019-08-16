import React from "react";


const Card = props => {
    return (
    <div className="newCard" key={props.id}> 
        <img className="nasa-img" alt="dailyphoto" src={props.url}/>
    </div>
    );
};

export default Card;