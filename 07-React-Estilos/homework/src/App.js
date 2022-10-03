import React from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data/* , { Cairns } */ from './data.js';

function App() {
  return (
    <div className="App">
      <div className='s'>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div className='s'>
        <Cards
          cities={data}
        />
      </div>
      {/* <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr /> */}
      {/* <hr /> */}
    </div>
  );
}

export default App;
