import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function Increment() {
    setCount(prevCount => prevCount + 1);
  }

  // function Increment() {
  //   setCount(count + 1 );
  // }




  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={Increment}>Plus 1</button>      
    </div>
  );
}

export default App;
