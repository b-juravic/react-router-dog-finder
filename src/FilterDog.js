import React from "react";
import { useParams, Redirect} from 'react-router-dom';
import DogDetails from "./DogDetails";

function FilterDog({ dogs }) {
  const { name } = useParams();

  let filteredDog = dogs.filter(
    dog => dog.name.toLowerCase() === name.toLowerCase());

  if (filteredDog.length !== 0) {
    return  <DogDetails dog={filteredDog[0]} />
  }

  return <Redirect to="/dogs"/>;
}

export default FilterDog;