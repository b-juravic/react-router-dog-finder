import React from 'react';
import {Link} from "react-router-dom";

function DogList({ dogs }) {
  const dogList = dogs.map(dog =>
    <li><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
  );

  return(
    <ul>
      {dogList}
    </ul>
  )
}

export default DogList;