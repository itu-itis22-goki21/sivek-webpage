import React, { useState } from 'react';
import "./dictionary.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const AviationDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTerms = aviationTerms.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='dictTitle'>Aviation Dictionary</h1>
      <input
        className='searchBar'
        type="text"
        placeholder="Ara"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      
      <ul >
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <li className= "dictItems" key={index}>
              <strong>{item.term}:  </strong> {item.definition}
            </li>
          ))
        ) : (
          <li className='dictItems'>No terms found.</li>
        )}
      </ul>
      
      
    </div>
  );
};
const aviationTerms = [
    { term: "Altimeter", definition: "An instrument to measure the altitude of an object above a fixed level." },
    { term: "Airspeed", definition: "The speed of an aircraft relative to the air." },
    { term: "Fuselage", definition: "The main body of an aircraft." },
    // Add more terms here...
  ];

export default AviationDictionary;
