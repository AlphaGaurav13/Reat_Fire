import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 0;
  const deleteValue = () => {
    if(counter > 0) {
      counter--;
      setCounter(counter);
    }
  }

  const addValue = () => {
    // console.log("Value added", Math.random());
    if(counter < 20)  {
      counter++;
      setCounter(counter);
    }
  }

  return (

    
    <>
     <h1>Gaurav aur React</h1>
     <h3>Counter value: {counter}</h3>

     <button onClick={addValue}>Increase</button>
     <br />
     <button onClick={deleteValue}>Decrease</button>

    <p>{counter}</p>
    </>
  )
}

export default App
