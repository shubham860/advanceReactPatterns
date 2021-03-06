import React from 'react';
import './App.css';
import Setstate from "./components/stateManagement/Setstate";
import Setstatecallback from "./components/stateManagement/Setstate&callback";
import SetstateHelperFunc from "./components/stateManagement/setStateHelperFunc";
import UseState from "./components/Hooks/useState/UseState";
import UseRef from "./components/Hooks/useState/UseRef";
import UseEffect from "./components/Hooks/useEffect/UseEffect";
import UseReducer from "./components/Hooks/useReducer/UseReducer";
import ApiRequest from "./components/Hooks/CustomHookFetching/ApiRequest";

function App() {
  return (
    <div className="App">
      {/*<Setstate max={20} step={5}/>*/}
      {/*<Setstatecallback max={20} step={5}/>*/}
      {/*<SetstateHelperFunc max={20} step={5}/>*/}
      {/*<UseState max={20} step={5}/>*/}
      {/*<UseRef/>*/}
      {/*<UseEffect max={20} step={5}/>*/}
      {/*<UseReducer  max={20} step={5} />*/}
      <ApiRequest/>
    </div>
  );
}

export default App;
