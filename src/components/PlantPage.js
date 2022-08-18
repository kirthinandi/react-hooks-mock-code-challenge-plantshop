import React, { useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants, setPlants] = useState([])
const [searchInput, setSearchInput] = useState("")

const addPlant = (plant) => {
  setPlants((plants) => [...plants, plant])
}

useEffect(() => {
   fetch("http://localhost:6001/plants")
  .then(r => r.json())
  .then(data => {
    setPlants(data)
  })
}, [])

const filteredPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(searchInput.toLowerCase())
})

  return (
    <main>
      <NewPlantForm addPlant = {addPlant}/>
      <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;
