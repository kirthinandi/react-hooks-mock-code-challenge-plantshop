import React, { useState } from "react";

function PlantCard({plant}) {
const { name, image, price } = plant;
const [isInStock, setIsInStock] = useState(true)

const handleInStock = () => {setIsInStock(false)}

const handleOutOfStock = () => {setIsInStock(true)}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick = {handleInStock} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleOutOfStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
