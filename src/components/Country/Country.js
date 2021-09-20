import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, capital, population, region } = props.country;
  return (
    <div className="country">
      <h1>Name: {name}</h1>
      <img src={flag} alt="flag" />
      <p>
        <small>
          <strong>Region: </strong> {region}
        </small>
      </p>
      <p>
        <strong>Capital: </strong>
        {capital} <strong> Population: </strong>
        {population}
      </p>
    </div>
  );
};

export default Country;
