import React from 'react';
import CountriesDropdown from './worldMap';


function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <CountriesDropdown/>
    </div>
  );
}

export default App;
