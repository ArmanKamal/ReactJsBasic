import React from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heoName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Diana" heroName="SuperWomen"/>
      <Greet name="John" heroName="SuperMan" />
      <Welcome name="Diana" heroName="SuperWomen"/> */}
      <Message />
    </div>
  );
}

export default App;
