import Header from './components/header/Header';
import CounterValue from './components/counterValue/CounterValue';
import IncreaseButton from './components/increaseButton/IncreaseButton';
import DecreaseButton from './components/decreaseButton/DecreaseButton';

import { useState } from 'react';
import './App.css';
import Reset from './components/reset/Reset';


const App = () => {

  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  
  const decrease = () => {
    if(counter !== 0){
      setCounter(counter - 1);
    }
  }
  
  const reset = () => setCounter(0);

  return (
    <div className="App">
      <Header heading="Counter App Using React With TypeScript" />
      <CounterValue value={counter}/>
      <div className='btns'>
      <IncreaseButton increase={increase} />
      <Reset reset={reset}/>
      <DecreaseButton decrease={decrease} />
      </div>
    </div>
  );
}

export default App;
