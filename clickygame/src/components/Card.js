import React form "react";

function Card({handleClick, id, image, name} {
    return (
        <div className="card-holder">
            <img 
                src={image}
                alt={name}
                className="img-responsive fit-image"
                onClick={() => handleClick(id)}
            />
        </div>
    )
})

export default Card;