import Header from './components/header/Header';
import CounterValue from './components/counterValue/CounterValue';
import IncreaseButton from './components/increaseButton/IncreaseButton';

import { useState } from 'react';
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);

  return (
    <div className="App">
      <Header heading="Counter App Using React With TypeScript" />
      <CounterValue value={counter}/>
      <IncreaseButton increase={increase} />
      
    </div>
  );
}

export default App;
