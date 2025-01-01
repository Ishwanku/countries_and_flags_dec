import React from 'react';

const CountryCard = ({ name, flagUrl }) => {
    return (
        <div  style = {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center", 
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "10px",
            height: "250px",
            width: "250px",
            textAlign: "center",
         }}>
            <h2>{name}</h2>
            <img src={flagUrl} alt={`${name} flag`} style={{
                width: "200px",
                height: "150px",
            }} />
        </div>
    );
};

export default CountryCard;
