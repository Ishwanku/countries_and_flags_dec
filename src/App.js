import React from 'react';
import Countries from './countries';


function App() {
  return (
    <div className="App">
      <Countries name={Countries.name} flagUrl={Countries.flag} key={Countries.abbr}/>
    </div>
  );
}

export default App;
