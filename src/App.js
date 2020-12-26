import React from 'react';
import CounterInput from './components/InputOutput/CounterInput';
import CounterOutput from './components/InputOutput/CounterOutput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CounterOutput />
       <br/>
       <CounterInput />
      </header>
    </div>
  );
}

export default App;
