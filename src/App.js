import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CoutryPicker from './components/CountryPicker/CountryPicker';


function App() {
  return (
    <div>
      <Cards />
      <Chart />
      <CoutryPicker />
    </div>
  );
}

export default App;
