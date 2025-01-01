import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Countries = () => {
    const API_URL = "https://xcountries-backend.azurewebsites.net/all";
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching data: " + error));
    }, []);

    return (
        <div style={{ display: "flex", 
        flexWrap: "wrap",
        gap: "10px",alignItems: "center",
        justifyContent: "center" }}>
            {countries.map((country) => (
                <CountryCard 
                    key={country.abbr} 
                    name={country.name} 
                    flagUrl={country.flag} 
                />
            ))}
        </div>
    );
};

export default Countries;
