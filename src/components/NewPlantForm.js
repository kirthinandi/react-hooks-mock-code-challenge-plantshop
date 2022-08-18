import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  //console.log(name)
  //console.log(image)
  //console.log(price)



  const handleSubmit = (e) => {
   
    let newPlant = {
        name: name,
        image: image,
        price: price,
    }

    fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
    })
    .then(r => r.json())
    .then(createdPlant => {
      addPlant(createdPlant)
      setName("")
      setImage("")
      setPrice("")
    })
   
    e.preventDefault();
    
    
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange = {(e) => setName(e.target.value)} value={name} type="text" name="name" placeholder="Plant name" />
        <input onChange = {(e) => setImage(e.target.value)} value={image} type="text" name="image" placeholder="Image URL" />
        <input onChange = {(e) => setPrice(e.target.value)} value={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
};


export default NewPlantForm;
