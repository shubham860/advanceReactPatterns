import React from 'react';
import logo from './logo.svg';
import './App.css';
import Setstate from "./components/Setstate";
import Setstatecallback from "./components/Setstate&callback";
import SetstateHelperFunc from "./components/setStateHelperFunc";

function App() {
  return (
    <div className="App">
      {/*<Setstate max={20} step={5}/>*/}
      {/*<Setstatecallback max={20} step={5}/>*/}
      <SetstateHelperFunc max={20} step={5}/>
    </div>
  );
}

export default App;
