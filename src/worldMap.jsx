import React, { useState, useEffect } from 'react';

const CountriesDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://crio-location-selector.onrender.com/countries');
        const data = await response.json();
        setCountries(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/states`);
        const data = await response.json();
        setStates(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching States:', error);
      }
    };

    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
    const fetchCities = async () => {
      try {
        const response = await fetch(`https://crio-location-selector.onrender.com/country=${selectedCountry}/state=${selectedState}/cities`);
        const data = await response.json();
        setCities(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching Cities:', error);
      }
    };

    fetchCities();
  }
  }, [selectedCountry, selectedState]);
    
    

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value); 
    setStates([]); 
    setCities([]);
  };
  const handleStateChange = (event) => {
     setSelectedState(event.target.value);
      setCities([]);
     
    };
    const handleCityChange = (event) => {
      setSelectedCity(event.target.value);
     };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      marginTop: '10px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginTop: '20px',
        fontFamily: 'Arial',
      }}>
       <label htmlFor="dropdown"><h1>Select Location</h1></label>
       </div>
       <div style={{
        display: 'flex',
           }}>

      <div style={{padding: '10px',}}>
        <select style={{
              padding: '10px',
            }} id="dropdown" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a Country</option>
          {countries.map((countryName) => (
            <option value={countryName}>
              {countryName}
            </option>
          ))}
        </select>
      </div>

      <div style={{padding: '10px',
      }}>
        <select style={{
              padding: '10px',
            }} id="dropdown" value={selectedState} onChange={handleStateChange}>
          <option value="">Select a State</option>
          {states.map((stateName) => (
            <option value={stateName}>
              {stateName}
            </option>
             ))}
        </select>
      </div>

      <div style={{padding: '10px',}}>
        <select style={{
              padding: '10px',
            }} id="dropdown" value={selectedCity} onChange={handleCityChange}>
          <option value="">Select a City</option>
          {cities.map((cities) => (
            <option value={cities}>
              {cities}
            </option>
             ))}
        </select>
      </div>
    
       </div>
       {selectedCountry && selectedState && selectedCity && (
        <div style={{ display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'baseline',
          marginTop: '20px',
          fontFamily: 'Arial',
        }}>
          <div style={{
            marginRight: '10px'
           }}>
          <h2>You selected</h2>
          </div>
          <div style={{
          marginRight: '10px'
         }}>
          <h1>{selectedCity},</h1>
           </div>
           <div>
            <p style={{
             color: 'gray',
             fontWeight: 'bold', 
            }}>{`${selectedState}, ${selectedCountry}`}</p>
            </div>
            </div>
      )}
    </div>
  );
};
export default CountriesDropdown;
