import Header from './components/header/Header';
import CounterValue from './components/counterValue/CounterValue';
import IncreaseButton from './components/increaseButton/IncreaseButton';
import DecreaseButton from './components/decreaseButton/DecreaseButton';

import { useState } from 'react';
import './App.css';


const App = () => {

  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);

  const decrease = () => {
    if(counter !== 0){
      setCounter(counter - 1);
    }
  }

  return (
    <div className="App">
      <Header heading="Counter App Using React With TypeScript" />
      <CounterValue value={counter}/>
      <IncreaseButton increase={increase} />
      <DecreaseButton decrease={decrease} />
    </div>
  );
}

export default App;
