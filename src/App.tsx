import Header from './components/header/Header';
import CounterValue from './components/counterValue/CounterValue';
import { useState } from 'react';

import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header heading="Counter App Using React With TypeScript" />
      <CounterValue value={counter}/>
    </div>
  );
}

export default App;
