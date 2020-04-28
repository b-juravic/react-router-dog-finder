import React from 'react';
import { Link } from "react-router-dom";

function DogDetails({ dog }) {

  const dogFacts = dog.facts.map((fact, idx) => (
    <li key={idx}>{fact}</li>
  ));

  return (
    <div>
      <img src={dog.src} alt={dog.name}/>
      <h2>{dog.name}</h2>
      <h3>Age: {dog.age}</h3>
      <ul>
        {dogFacts}
      </ul>
      <Link to="/dogs">Back to List</Link>
    </div>
  );

}

export default DogDetails;